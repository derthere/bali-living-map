// narratives.js - Community narrative data for Les Village Living Map

const narrativeData = {
    narrative1: {
        id: 'narrative1',
        respondent: "Pak Eka",
        role: "Fisherman leader, reef rehab expert",
        description: "View from a fisherman and marine conservationist who sees Les Village primarily through its relationship with the sea.",
        baseLayer: {
            coast: true,
            river1: true,
            river2: true,
            mountain: true,
            guides: false
        },
        places: [
            {x: 0.5, y: 0.15, narrative: "Rich coral reef diversity, shallow to deep waters (5-12m)", type: "water", size: 80, relative: true},
            {x: 0.5, y: 0.12, narrative: "traditional fishing boats", type: "beach", size: 60, relative: true},
            {x: 0.45, y: 0.13, narrative: "Traditional salt-making area near coconut trees", type: "other", size: 50, relative: true},
            {x: 0.7, y: 0.12, narrative: "Coconut trees along the beach", type: "forest", size: 40, relative: true},
            {x: 0.5, y: 0.5, narrative: "Pura Bale Agung - mother temple where all villagers gather", type: "temple", size: 70, relative: true},
            {x: 0.48, y: 0.52, narrative: "My home - 200m from workplace, view of sunrise", type: "home", size: 35, relative: true},
            {x: 0.35, y: 0.7, narrative: "Panjingan - connected to village origin story", type: "sacred", size: 45, relative: true},
            {x: 0.55, y: 0.72, narrative: "Buu and Yangudi - origin story sites", type: "sacred", size: 45, relative: true},
            {x: 0.5, y: 0.55, narrative: "Pura Puseh maintains ties with other villages", type: "temple", size: 55, relative: true},
            {x: 0.5, y: 0.85, narrative: "Beautiful waterfall with lush trees, sense of tranquility", type: "water", size: 60, relative: true},
            {x: 0.45, y: 0.8, narrative: "Hills and forests to the south", type: "forest", size: 70, relative: true},
            {x: 0.25, y: 0.5, narrative: "Western river border with Tejakula", type: "water", size: 40, relative: true},
            {x: 0.75, y: 0.5, narrative: "Eastern river border with Penuktukan", type: "water", size: 40, relative: true},
            {x: 0.5, y: 0.4, narrative: "Tall lion monument - landmark indicating entry to Les", type: "village", size: 50, relative: true}
        ]
    },
    
    narrative2: {
        id: 'narrative2',
        respondent: "Komang",
        role: "Fisherman",
        description: "Agricultural and village center perspective focusing on orchards, markets, and daily gathering places.",
        baseLayer: {
            coast: true,
            river1: true,
            river2: true,
            mountain: true,
            guides: false
        },
        places: [
            {x: 0.4, y: 0.13, narrative: "Salt-making area ", type: "other", size: 55, relative: true},
            {x: 0.6, y: 0.25, narrative: "Coconut orchards and plantations", type: "rice", size: 65, relative: true},
            {x: 0.65, y: 0.3, narrative: "Rambutan orchards", type: "rice", size: 55, relative: true},
            {x: 0.5, y: 0.5, narrative: "Les market", type: "market", size: 60, relative: true},
            {x: 0.52, y: 0.48, narrative: "Temple in village center", type: "temple", size: 65, relative: true},
            {x: 0.48, y: 0.52, narrative: "Village office", type: "village", size: 50, relative: true},
            {x: 0.46, y: 0.54, narrative: "Multipurpose hall - gathering place", type: "village", size: 55, relative: true},
            {x: 0.54, y: 0.56, narrative: "Football field", type: "other", size: 50, relative: true},
            {x: 0.55, y: 0.45, narrative: "Kitchen and rambutan garden in front of house", type: "home", size: 40, relative: true},
            {x: 0.58, y: 0.43, narrative: "Small path from house to main road", type: "path", size: 45, relative: true},
            {x: 0.35, y: 0.65, narrative: "Panjingan banjar - original settlement", type: "sacred", size: 50, relative: true},
            {x: 0.5, y: 0.53, narrative: "Puseh Temple", type: "temple", size: 55, relative: true},
            {x: 0.5, y: 0.11, narrative: "Beach - holiday gathering place, shoreline fishing", type: "beach", size: 65, relative: true},
            {x: 0.45, y: 0.1, narrative: "Fishing boats and bamboo fish houses (Rumpon)", type: "other", size: 45, relative: true},
            // {x: 0.25, y: 0.4, narrative: "Western small river border", type: "water", size: 35, relative: true},
            // {x: 0.75, y: 0.4, narrative: "Eastern small river border", type: "water", size: 35, relative: true},
            {x: 0.5, y: 0.82, narrative: "Waterfall destination for visitors", type: "water", size: 55, relative: true}
        ]
    },
    
    narrative3: {
        id: 'narrative3',
        respondent: "Pertanyan",
        role: "Fisherman",
        description: "Infrastructure and daily routes perspective with detailed attention to paths, timing, and navigation landmarks.",
        baseLayer: {
            coast: true,
            river1: false,
            river2: false,
            mountain: true,
            guides: false
        },
        places: [
            {x: 0.25, y: 0.45, narrative: "Les village information sign at eastern border", type: "village", size: 45, relative: true},
            {x: 0.75, y: 0.45, narrative: "Village information board at western border", type: "village", size: 45, relative: true},
            {x: 0.42, y: 0.46, narrative: "Three-way intersection with lion statue - Les marker", type: "village", size: 55, relative: true},
            {x: 0.55, y: 0.48, narrative: "My house surrounded by mango and coconut gardens", type: "home", size: 40, relative: true},
            {x: 0.53, y: 0.46, narrative: "Many trees - coconut and mango gardens near house", type: "forest", size: 50, relative: true},
            {x: 0.48, y: 0.52, narrative: "Market - 10 min south from main road", type: "market", size: 60, relative: true},
            {x: 0.5, y: 0.5, narrative: "Temple I visit often", type: "temple", size: 60, relative: true},
            {x: 0.46, y: 0.51, narrative: "Multipurpose hall where people gather", type: "village", size: 50, relative: true},
            {x: 0.52, y: 0.53, narrative: "School", type: "village", size: 45, relative: true},
            {x: 0.49, y: 0.54, narrative: "Public bathing area", type: "water", size: 40, relative: true},
            {x: 0.35, y: 0.45, narrative: "Three-way intersection heading north (5 min to work)", type: "path", size: 40, relative: true},
            {x: 0.32, y: 0.35, narrative: "My workplace", type: "other", size: 40, relative: true},
            {x: 0.35, y: 0.7, narrative: "Temples connected to village history", type: "temple", size: 50, relative: true},
            {x: 0.45, y: 0.75, narrative: "Old Butiyang settlement in the hills", type: "sacred", size: 50, relative: true},
            {x: 0.56, y: 0.49, narrative: "Family temple within home compound", type: "temple", size: 35, relative: true},
            {x: 0.5, y: 0.12, narrative: "The sea - one of most important places", type: "water", size: 70, relative: true},
            {x: 0.48, y: 0.51, narrative: "Area near market where village children play", type: "other", size: 45, relative: true},
            {x: 0.47, y: 0.53, narrative: "Village playground", type: "other", size: 45, relative: true}
        ]
    },
    
    narrative4: {
        id: 'narrative4',
        respondent: "Wira",
        role: "Land Guide",
        description: "Seaside living and coral restoration perspective emphasizing the boat landing, daily sea work, and vision of preservation.",
        baseLayer: {
            coast: true,
            river1: true,
            river2: true,
            mountain: true,
            guides: false
        },
        places: [
            {x: 0.5, y: 0.14, narrative: "Cluster of houses visible from sea, traditional boat parking", type: "village", size: 60, relative: true},
            {x: 0.48, y: 0.16, narrative: "Houses nestled among lush trees (mountain view)", type: "home", size: 50, relative: true},
            {x: 0.3, y: 0.45, narrative: "DESA LES sign from the west", type: "village", size: 45, relative: true},
            {x: 0.5, y: 0.47, narrative: "Village head's office clearly visible", type: "village", size: 55, relative: true},
            {x: 0.52, y: 0.45, narrative: "Small local businesses along roadside", type: "market", size: 40, relative: true},
            {x: 0.45, y: 0.11, narrative: "My house - first thing I see is the sea", type: "home", size: 40, relative: true},
            {x: 0.43, y: 0.125, narrative: "Small path from house, few meters to shoreline", type: "path", size: 35, relative: true},
            {x: 0.5, y: 0.12, narrative: "Traditional fishing boats owned by local fishermen", type: "other", size: 50, relative: true},
            {x: 0.55, y: 0.13, narrative: "Salt farmers working in fields (dry season)", type: "other", size: 50, relative: true},
            {x: 0.5, y: 0.52, narrative: "Temple for worship", type: "temple", size: 65, relative: true},
            {x: 0.48, y: 0.54, narrative: "School where children study", type: "village", size: 50, relative: true},
            {x: 0.52, y: 0.5, narrative: "Community hall (balai banjar) where people gather", type: "village", size: 55, relative: true},
            {x: 0.49, y: 0.48, narrative: "Market where people shop", type: "market", size: 55, relative: true},
            {x: 0.46, y: 0.49, narrative: "Balai bengong - open pavilions where people gather daily", type: "village", size: 45, relative: true},
            {x: 0.35, y: 0.68, narrative: "Banjar Panjingan - origin story", type: "sacred", size: 50, relative: true},
            {x: 0.5, y: 0.7, narrative: "Buhu - origin site", type: "sacred", size: 45, relative: true},
            {x: 0.55, y: 0.72, narrative: "Yangudi - origin site", type: "sacred", size: 45, relative: true},
            {x: 0.5, y: 0.09, narrative: "Boat landing area - where I load equipment", type: "other", size: 50, relative: true},
            {x: 0.52, y: 0.1, narrative: "Deeper water where I start the motor", type: "water", size: 40, relative: true},
            {x: 0.48, y: 0.11, narrative: "Seabed where coral structures are planted", type: "water", size: 55, relative: true},
            {x: 0.5, y: 0.83, narrative: "Waterfall destination for visitors", type: "water", size: 60, relative: true},
            {x: 0.5, y: 0.08, narrative: "Healthy, well-preserved ocean", type: "water", size: 75, relative: true},
            {x: 0.5, y: 0.55, narrative: "Green land symbolizing prosperity to protect", type: "forest", size: 70, relative: true}
        ]
    }
};

// Color palette for place types
const colors = {
    temple: '#FFD700',
    beach: '#4A90E2',
    market: '#E24A4A',
    rice: '#8BC34A',
    village: '#9C27B0',
    water: '#00BCD4',
    forest: '#4CAF50',
    sacred: '#FF9800',
    home: '#795548',
    path: '#8D6E63',
    other: '#9E9E9E'
};

// Keywords for auto-detection of place types
const shapeKeywords = {
    temple: ['temple', 'pura', 'shrine', 'candi'],
    beach: ['beach', 'pantai', 'shore', 'coast'],
    market: ['market', 'pasar', 'warung', 'shop'],
    rice: ['rice', 'sawah', 'field', 'paddy', 'orchard', 'plantation'],
    village: ['village', 'desa', 'banjar', 'community', 'office', 'hall', 'school'],
    water: ['water', 'spring', 'tirta', 'well', 'fountain', 'waterfall', 'river'],
    forest: ['forest', 'jungle', 'trees', 'hutan', 'woods', 'garden'],
    sacred: ['sacred', 'holy', 'suci', 'blessed', 'origin'],
    home: ['home', 'house', 'compound', 'rumah', 'dwelling'],
    path: ['path', 'road', 'jalan', 'trail', 'street', 'route']
};