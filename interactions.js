// interactions.js - User interactions and UI updates

// State variables
let places = [];
let originalPlaces = [];
let currentNarrative = 'blank';
let previewPlace = null;
let draggingPlace = null;
let dragOffset = { x: 0, y: 0 };
let selectedPlace = null;

// Utility functions
function detectType(narrative) {
    for (let [type, keywords] of Object.entries(shapeKeywords)) {
        for (let keyword of keywords) {
            if (narrative.toLowerCase().includes(keyword)) {
                return type;
            }
        }
    }
    return 'other';
}

function convertRelativeToAbsolute(place, canvasWidth, canvasHeight) {
    if (place.relative) {
        return {
            ...place,
            x: place.x * canvasWidth,
            y: place.y * canvasHeight,
            relative: false
        };
    }
    return place;
}

// Narrative loading
function loadNarrative() {
    let selectValue = document.getElementById('narrative-select').value;
    currentNarrative = selectValue;
    
    if (selectValue === 'blank') {
        places = [];
        originalPlaces = [];
        document.getElementById('narrative-info').style.display = 'none';
        updatePlacesList();
        redrawMap();
        return;
    }
    
    let narrative = narrativeData[selectValue];
    
    document.getElementById('narrative-info').style.display = 'block';
    document.querySelector('.narrative-name').textContent = `${narrative.respondent} - ${narrative.role}`;
    document.querySelector('.narrative-desc').textContent = narrative.description;
    
    document.getElementById('show-coast').checked = narrative.baseLayer.coast;
    document.getElementById('show-river1').checked = narrative.baseLayer.river1;
    document.getElementById('show-river2').checked = narrative.baseLayer.river2;
    document.getElementById('show-mountain').checked = narrative.baseLayer.mountain;
    document.getElementById('show-guides').checked = narrative.baseLayer.guides;
    
    places = narrative.places.map(p => convertRelativeToAbsolute(p, width, height));
    places.forEach(p => p.source = 'original');
    originalPlaces = JSON.parse(JSON.stringify(places));
    
    updatePlacesList();
    redrawMap();
}

// Preview management
function updatePlacesList() {
    let container = document.getElementById('places-container');
    container.innerHTML = '';
    
    // If something is selected, show its details
    if (selectedPlace) {
        container.innerHTML = `
            <div class="place-item selected" style="border-left-color: ${colors[selectedPlace.type]}">
                <div class="place-name">${selectedPlace.type}</div>
                <div class="place-narrative">${selectedPlace.narrative}</div>
                <div class="place-source">${selectedPlace.source === 'user-added' ? 'Your addition' : 'From interview'}</div>
            </div>
        `;
    } else {
        container.innerHTML = '<p style="color: #999; font-size: 12px;">Click on a place to see details</p>';
    }
}

// function addPreviewToMap() {
//     if (!previewPlace) {
//         alert('Type a narrative first to create a preview');
//         return;
//     }
    
//     places.push({
//         ...previewPlace,
//         timestamp: new Date().toISOString(),
//         source: 'user-added'
//     });
    
//     updatePlacesList();
//     document.getElementById('narrative-input').value = '';
//     previewPlace = null;
//     document.getElementById('preview-info').style.display = 'none';
    
//     redrawMap();
// }

function addPreviewToMap() {
    if (!previewPlace) {
        // Create a default preview if none exists
        let typeSelect = document.getElementById('place-type').value;
        let size = parseInt(document.getElementById('size-slider').value);
        
        // Use selected type or default to 'other'
        let placeType = typeSelect === 'auto' ? 'other' : typeSelect;
        
        previewPlace = {
            x: width / 2,
            y: height / 2,
            narrative: `New ${placeType}`,  // Default narrative
            type: placeType,
            size: size
        };
    }
    
    places.push({
        ...previewPlace,
        timestamp: new Date().toISOString(),
        source: 'user-added'
    });
    
    updatePlacesList();
    previewPlace = null;
    
    redrawMap();
}

function clearPreview() {
    document.getElementById('narrative-input').value = '';
    previewPlace = null;
    document.getElementById('preview-info').style.display = 'none';
    redrawMap();
}

function resetToOriginal() {
    if (originalPlaces.length === 0) {
        alert('No original narrative loaded');
        return;
    }
    if (confirm('Reset to original narrative? This will remove your additions.')) {
        places = JSON.parse(JSON.stringify(originalPlaces));
        selectedPlace = null;
        updatePlacesList();
        redrawMap();
    }
}

function deletePlace(index) {
    if (confirm('Delete this place?')) {
        places.splice(index, 1);
        selectedPlace = null;
        updatePlacesList();
        redrawMap();
    }
}

// Mouse interactions
function mousePressed() {
    if (mouseX < 0 || mouseX > width || mouseY < 0 || mouseY > height) {
        return;
    }
    
    for (let i = places.length - 1; i >= 0; i--) {
        let place = places[i];
        let d = dist(mouseX, mouseY, place.x, place.y);
        
        if (d < place.size / 2) {
            draggingPlace = place;
            dragOffset.x = place.x - mouseX;
            dragOffset.y = place.y - mouseY;
            selectedPlace = place;
            
            // Update size slider to match selected place
            document.getElementById('size-slider').value = place.size;
            document.getElementById('size-value').textContent = place.size;
            
            updatePlacesList();
            redrawMap();
            return;
        }
    }
    
    if (previewPlace) {
        let d = dist(mouseX, mouseY, previewPlace.x, previewPlace.y);
        if (d < previewPlace.size / 2) {
            draggingPlace = previewPlace;
            dragOffset.x = previewPlace.x - mouseX;
            dragOffset.y = previewPlace.y - mouseY;
            return;
        }
    }
    
    selectedPlace = null;
    updatePlacesList();
    redrawMap();
}

function mouseDragged() {
    if (draggingPlace) {
        draggingPlace.x = mouseX + dragOffset.x;
        draggingPlace.y = mouseY + dragOffset.y;
        redrawMap();
    }
}

function mouseReleased() {
    draggingPlace = null;
}

// Data export
function exportData() {
    let baseLayer = {
        coast: document.getElementById('show-coast').checked,
        river1: document.getElementById('show-river1').checked,
        river2: document.getElementById('show-river2').checked,
        mountain: document.getElementById('show-mountain').checked,
        guides: document.getElementById('show-guides').checked
    };
    
    let data = {
        mapType: 'living-map',
        location: 'Les Village, Bali',
        created: new Date().toISOString(),
        sourceNarrative: currentNarrative,
        baseLayer: baseLayer,
        places: places.map(p => ({
            ...p,
            xRelative: p.x / width,
            yRelative: p.y / height
        }))
    };
    
    let dataStr = JSON.stringify(data, null, 2);
    let dataBlob = new Blob([dataStr], {type: 'application/json'});
    let url = URL.createObjectURL(dataBlob);
    let link = document.createElement('a');
    link.href = url;
    link.download = `les-village-map-${currentNarrative}-${Date.now()}.json`;
    link.click();
    
    alert(`Exported ${places.length} places from ${currentNarrative}!`);
}


function updateSizeValue() {
    let newSize = document.getElementById('size-slider').value;
    document.getElementById('size-value').textContent = newSize;
    
    // If a place is selected, update its size
    if (selectedPlace) {
        selectedPlace.size = parseInt(newSize);
        redrawMap();
    }
    
    // If preview exists, update its size
    if (previewPlace) {
        updatePreview();
    }
}

function redrawMap() {
    redraw();
}

function windowResized() {
    resizeCanvas(windowWidth - 370, windowHeight);
    
    if (currentNarrative !== 'blank' && originalPlaces.length > 0) {
        let narrative = narrativeData[currentNarrative];
        places = narrative.places.map(p => convertRelativeToAbsolute(p, width, height));
        places.forEach(p => p.source = 'original');
        originalPlaces = JSON.parse(JSON.stringify(places));
    }
    
    redrawMap();
}