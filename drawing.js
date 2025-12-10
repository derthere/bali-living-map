// drawing.js - All p5.js drawing functions

function drawBaseLayer() {
    if (document.getElementById('show-guides').checked) {
        drawCosmologicalGuides();
    }
    
    if (document.getElementById('show-mountain').checked) {
        drawMountain();
    }
    
    if (document.getElementById('show-coast').checked) {
        drawCoastline();
    }
    
    if (document.getElementById('show-river1').checked) {
        drawRiver(width * 0.25);
    }
    if (document.getElementById('show-river2').checked) {
        drawRiver(width * 0.75);
    }
}

function drawCosmologicalGuides() {
    push();
    stroke(200, 200, 200, 80);
    strokeWeight(1);
    drawingContext.setLineDash([5, 5]);
    
    line(width/2, 0, width/2, height);
    line(0, height/2, width, height/2);
    
    fill(150);
    noStroke();
    textAlign(CENTER);
    textSize(11);
    text('kelod (sea)', width/2, 20);
    text('kaja (mountain)', width/2, height - 10);
    
    drawingContext.setLineDash([]);
    pop();
}

function drawMountain() {
    push();
    
    let centerX = width / 2;
    let baseY = height - 60;
    
    stroke(100, 80, 60);
    strokeWeight(3);
    noFill();
    
    beginShape();
    vertex(centerX - 100, baseY);
    vertex(centerX - 70, baseY - 50);
    vertex(centerX - 50, baseY - 40);
    vertex(centerX - 30, baseY - 70);
    vertex(centerX - 10, baseY - 60);
    vertex(centerX, baseY - 90);
    vertex(centerX + 15, baseY - 75);
    vertex(centerX + 25, baseY - 80);
    vertex(centerX + 40, baseY - 70);
    vertex(centerX + 50, baseY - 55);
    vertex(centerX + 70, baseY - 40);
    vertex(centerX + 100, baseY);
    endShape();
    
    noFill();
    beginShape();
    vertex(centerX - 100, baseY);
    bezierVertex(
        centerX - 50, baseY + 10,
        centerX + 50, baseY + 10,
        centerX + 100, baseY
    );
    endShape();
    
    fill(100, 80, 60);
    noStroke();
    textAlign(CENTER);
    textSize(12);
    text('Gunung Batur', centerX, height - 30);
    
    pop();
}

function drawCoastline() {
    push();
stroke(100, 180, 220);
    strokeWeight(5);
    noFill();
    
    beginShape();
    let segments = 20;
    for (let i = 0; i <= segments; i++) {
        let x = (i / segments) * width;
        let y = 200 + sin(i * 0.5) * 15;
        vertex(x, y);
    }
    endShape();
    
    fill(70, 130, 180, 200);
    noStroke();
    rect(0, 0, width, 200);
    
    fill(70, 0, 0);
    textAlign(CENTER);
    textSize(12);
    text('Segara (Sea)', width/2, 40);
    
    pop();
}

function drawRiver(xPos) {
    push();
    stroke(100, 180, 220);
    strokeWeight(10);
    noFill();
    
    beginShape();
    let startY = height - 150;
    let endY = 200;
    let segments = 15;
    
    for (let i = 0; i <= segments; i++) {
        let t = i / segments;
        let y = lerp(startY, endY, t);
        let x = xPos + sin(i * 0.8) * 20;
        vertex(x, y);
    }
    endShape();
    
    pop();
}

function drawPlace(place, isSelected = false, isPreview = false) {
    push();
    
    let col = color(colors[place.type] || colors.other);
    let alpha = isPreview ? 120 : 150;
    
    if (isSelected) {
        noFill();
        stroke(col.levels[0], col.levels[1], col.levels[2], 255);
        strokeWeight(4);
        drawBlobShape(place.x, place.y, place.size + 20);
    }
    
    if (isPreview) {
        strokeWeight(3);
        drawingContext.setLineDash([5, 5]);
    }
    
    fill(col.levels[0], col.levels[1], col.levels[2], alpha);
    stroke(col.levels[0] - 30, col.levels[1] - 30, col.levels[2] - 30);
    strokeWeight(2);
    
    if (place.type === 'path') {
        noFill();
        strokeWeight(5);
        drawWobblyLine(
            place.x - place.size, place.y,
            place.x + place.size, place.y
        );
    } else if (place.type === 'rice') {
        drawBlobRect(place.x, place.y, place.size * 1.5, place.size);
    } else if (place.type === 'temple') {
        drawBlobTriangle(place.x, place.y, place.size);
    } else if (place.type === 'home') {
        // Add this new case for home
        drawBlobRect(place.x, place.y, place.size, place.size);  // Square shape
    } else {
        drawBlobShape(place.x, place.y, place.size);
    }
    
    drawingContext.setLineDash([]);
    
    fill(50, isPreview ? 100 : 255);
    noStroke();
    textAlign(CENTER, CENTER);
    textSize(11);
    
    let label = place.narrative.split(' ').slice(0, 3).join(' ');
    if (place.narrative.split(' ').length > 3) label += '...';
    
    text(label, place.x, place.y + place.size/2 + 15);
    
    pop();
}

function drawBlobShape(x, y, size) {
    beginShape();
    let points = 12;
    for (let i = 0; i <= points; i++) {
        let angle = (i / points) * TWO_PI;
        let r = size/2 + random(-size * 0.08, size * 0.08);
        let px = x + cos(angle) * r;
        let py = y + sin(angle) * r;
        if (i === 0) {
            vertex(px, py);
        }
        curveVertex(px, py);
    }
    endShape(CLOSE);
}

function drawBlobRect(x, y, w, h) {
    beginShape();
    // Top left corner
    vertex(x - w/2 + random(-3, 3), y - h/2 + random(-3, 3));
    // Top right corner
    vertex(x + w/2 + random(-3, 3), y - h/2 + random(-3, 3));
    // Bottom right corner
    vertex(x + w/2 + random(-3, 3), y + h/2 + random(-3, 3));
    // Bottom left corner
    vertex(x - w/2 + random(-3, 3), y + h/2 + random(-3, 3));
    endShape(CLOSE);
}

function drawBlobTriangle(x, y, size) {
    beginShape();
    vertex(x + random(-3, 3), y - size/2 + random(-3, 3));
    curveVertex(x + random(-3, 3), y - size/2 + random(-3, 3));
    curveVertex(x - size/2 + random(-3, 3), y + size/2 + random(-3, 3));
    curveVertex(x + size/2 + random(-3, 3), y + size/2 + random(-3, 3));
    curveVertex(x + random(-3, 3), y - size/2 + random(-3, 3));
    endShape(CLOSE);
}

function drawWobblyLine(x1, y1, x2, y2) {
    beginShape();
    let steps = 8;
    for (let i = 0; i <= steps; i++) {
        let t = i / steps;
        let x = lerp(x1, x2, t) + random(-3, 3);
        let y = lerp(y1, y2, t) + random(-3, 3);
        vertex(x, y);
    }
    endShape();
}

function drawConnections() {
    push();
    stroke(150, 150, 150, 40);
    strokeWeight(1);
    
    for (let i = 0; i < places.length; i++) {
        for (let j = i + 1; j < places.length; j++) {
            let d = dist(places[i].x, places[i].y, places[j].x, places[j].y);
            
            if (d < 200) {
                line(places[i].x, places[i].y, places[j].x, places[j].y);
            }
        }
    }
    
    pop();
}