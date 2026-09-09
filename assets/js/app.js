// ============================================================
// WORLD EXPLORER | SOUTH AFRICA
// Main JavaScript
// ============================================================


// ============================================================
// API CONFIGURATION
// ============================================================

const GEOCODING_API =
    "https://geocoding-api.open-meteo.com/v1/search";

const WEATHER_API =
    "https://api.open-meteo.com/v1/forecast";

const WIKIPEDIA_API =
    "https://en.wikipedia.org/api/rest_v1/page/summary/";

const WIKIMEDIA_COMMONS_API =
    "https://commons.wikimedia.org/w/api.php";


// ============================================================
// PROVINCE / CITY DATA
// ============================================================

const provinceCities = {
    Gauteng: [
        "Johannesburg",
        "Pretoria",
        "Soweto"
    ],

    "Western Cape": [
        "Cape Town",
        "Stellenbosch",
        "George"
    ],

    "KwaZulu-Natal": [
        "Durban",
        "Pietermaritzburg",
        "Richards Bay"
    ],

    "Eastern Cape": [
        "Gqeberha",
        "East London",
        "Mthatha"
    ],

    Mpumalanga: [
        "Mbombela",
        "White River",
        "Hazyview"
    ],

    Limpopo: [
        "Polokwane",
        "Tzaneen",
        "Thohoyandou"
    ],

    "Free State": [
        "Bloemfontein",
        "Welkom",
        "Bethlehem"
    ],

    "North West": [
        "Rustenburg",
        "Mahikeng",
        "Potchefstroom"
    ],

    "Northern Cape": [
        "Kimberley",
        "Upington",
        "Springbok"
    ]
};


// ============================================================
// WEATHER DESCRIPTIONS
// ============================================================

const weatherDescriptions = {
    0: "Clear sky",
    1: "Mainly clear",
    2: "Partly cloudy",
    3: "Overcast",
    45: "Fog",
    48: "Depositing rime fog",
    51: "Light drizzle",
    53: "Moderate drizzle",
    55: "Dense drizzle",
    56: "Light freezing drizzle",
    57: "Dense freezing drizzle",
    61: "Slight rain",
    63: "Moderate rain",
    65: "Heavy rain",
    66: "Light freezing rain",
    67: "Heavy freezing rain",
    71: "Slight snowfall",
    73: "Moderate snowfall",
    75: "Heavy snowfall",
    77: "Snow grains",
    80: "Slight rain showers",
    81: "Moderate rain showers",
    82: "Violent rain showers",
    85: "Slight snow showers",
    86: "Heavy snow showers",
    95: "Thunderstorm",
    96: "Thunderstorm with slight hail",
    99: "Thunderstorm with heavy hail"
};


// ============================================================
// TOURIST DESTINATION DATA
// ============================================================

const touristDestinationsData = {

    Johannesburg: [
        {
            name: "Apartheid Museum",
            tag: "History & Culture",
            location: "Ormonde, Johannesburg",
            description:
                "A powerful museum documenting South Africa's apartheid history through photographs, film, exhibitions and personal stories.",
            wikipedia: "Apartheid Museum"
        },
        {
            name: "Maboneng Precinct",
            tag: "Urban Culture",
            location: "Maboneng, Johannesburg",
            description:
                "A creative urban district known for restaurants, galleries, street art, design studios and an energetic city atmosphere.",
            wikipedia: "Maboneng"
        },
        {
            name: "Constitution Hill",
            tag: "Heritage",
            location: "Braamfontein, Johannesburg",
            description:
                "A historic site and former prison complex that now tells important stories about South Africa's journey toward democracy.",
            wikipedia: "Constitution Hill, South Africa"
        },
        {
            name: "Gold Reef City",
            tag: "Entertainment",
            location: "Ormonde, Johannesburg",
            description:
                "A major theme park and entertainment destination built around Johannesburg's gold-mining history, with rides, attractions and heritage experiences.",
            wikipedia: "Gold Reef City"
        }
    ],

    Pretoria: [
        {
            name: "Union Buildings",
            tag: "Landmark",
            location: "Arcadia, Pretoria",
            description:
                "One of Pretoria's most recognizable landmarks, set among beautifully landscaped gardens overlooking the city.",
            wikipedia: "Union Buildings"
        },
        {
            name: "Voortrekker Monument",
            tag: "History",
            location: "Groenkloof, Pretoria",
            description:
                "A monumental granite structure surrounded by nature reserve and offering panoramic views across Pretoria.",
            wikipedia: "Voortrekker Monument"
        },
        {
            name: "Freedom Park",
            tag: "Culture",
            location: "Salvokop, Pretoria",
            description:
                "A significant heritage site dedicated to South Africa's history, memory and reconciliation.",
            wikipedia: "Freedom Park, Pretoria"
        }
    ],

    Soweto: [
        {
            name: "Vilakazi Street",
            tag: "Culture",
            location: "Orlando West, Soweto",
            description:
                "A famous Soweto street associated with two Nobel Peace Prize laureates and an important chapter of South African history.",
            wikipedia: "Vilakazi Street"
        },
        {
            name: "Hector Pieterson Museum",
            tag: "History",
            location: "Orlando West, Soweto",
            description:
                "A museum dedicated to the 1976 Soweto uprising and the young people whose actions became part of South Africa's history.",
            wikipedia: "Hector Pieterson Museum"
        },
        {
            name: "Soweto Towers",
            tag: "Adventure",
            location: "Orlando, Soweto",
            description:
                "A distinctive pair of cooling towers transformed into a colorful landmark and adventure destination.",
            wikipedia: "Orlando Towers"
        }
    ],

    "Cape Town": [
        {
            name: "Table Mountain",
            tag: "Nature",
            location: "Table Mountain, Cape Town",
            description:
                "The iconic flat-topped mountain overlooking Cape Town, offering extraordinary views of the city, ocean and surrounding landscape.",
            wikipedia: "Table Mountain"
        },
        {
            name: "V&A Waterfront",
            tag: "Lifestyle",
            location: "V&A Waterfront, Cape Town",
            description:
                "A lively waterfront destination filled with restaurants, shops, entertainment, museums and harbor views.",
            wikipedia: "Victoria & Alfred Waterfront"
        },
        {
            name: "Robben Island",
            tag: "History",
            location: "Robben Island, Cape Town",
            description:
                "A UNESCO-associated heritage destination where visitors can learn about South Africa's political history and Nelson Mandela's imprisonment.",
            wikipedia: "Robben Island"
        }
    ],

    Stellenbosch: [
        {
            name: "Stellenbosch Winelands",
            tag: "Food & Wine",
            location: "Stellenbosch Winelands",
            description:
                "A scenic wine region surrounded by mountains, historic architecture, vineyards and celebrated food experiences.",
            wikipedia: "Stellenbosch"
        },
        {
            name: "Jonkershoek Nature Reserve",
            tag: "Nature",
            location: "Jonkershoek, Stellenbosch",
            description:
                "A spectacular mountain reserve offering hiking trails, waterfalls and beautiful Cape landscapes.",
            wikipedia: "Jonkershoek Nature Reserve"
        },
        {
            name: "Stellenbosch Village",
            tag: "Culture",
            location: "Stellenbosch Central",
            description:
                "A historic university town famous for Cape Dutch architecture, oak-lined streets, galleries and restaurants.",
            wikipedia: "Stellenbosch"
        }
    ],

    George: [
        {
            name: "Outeniqua Transport Museum",
            tag: "Heritage",
            location: "George Central",
            description:
                "A fascinating collection of historic locomotives, railway memorabilia and transport history.",
            wikipedia: "Outeniqua Transport Museum"
        },
        {
            name: "Outeniqua Mountains",
            tag: "Nature",
            location: "Outeniqua Mountains, George",
            description:
                "A dramatic mountain range providing beautiful scenery and access to the Garden Route's natural landscapes.",
            wikipedia: "Outeniqua Mountains"
        },
        {
            name: "Garden Route",
            tag: "Adventure",
            location: "Garden Route, George",
            description:
                "George is a major gateway to one of South Africa's best-known scenic regions, stretching along forests, mountains and coastline.",
            wikipedia: "Garden Route"
        }
    ],

    Durban: [
        {
            name: "uShaka Marine World",
            tag: "Family",
            location: "Point, Durban",
            description:
                "A large marine-themed entertainment complex featuring aquariums, water attractions, restaurants and family activities.",
            wikipedia: "uShaka Marine World"
        },
        {
            name: "Golden Mile",
            tag: "Beach",
            location: "Golden Mile, Durban",
            description:
                "Durban's famous beachfront promenade, popular for swimming, walking, cycling and enjoying the warm Indian Ocean.",
            wikipedia: "Golden Mile, Durban"
        },
        {
            name: "Moses Mabhida Stadium",
            tag: "Landmark",
            location: "Stamford Hill, Durban",
            description:
                "An iconic Durban stadium recognized by its dramatic arch and panoramic views of the city.",
            wikipedia: "Moses Mabhida Stadium"
        }
    ],

    Pietermaritzburg: [
        {
            name: "KwaZulu-Natal Museum",
            tag: "Culture",
            location: "Pietermaritzburg CBD",
            description:
                "A museum exploring natural history, archaeology, cultural heritage and the history of KwaZulu-Natal.",
            wikipedia: "KwaZulu-Natal Museum"
        },
        {
            name: "Natal Midlands",
            tag: "Nature",
            location: "KwaZulu-Natal Midlands",
            description:
                "A scenic region of rolling hills, farms, forests and small towns surrounding Pietermaritzburg.",
            wikipedia: "KwaZulu-Natal Midlands"
        },
        {
            name: "Tatham Art Gallery",
            tag: "Art",
            location: "Pietermaritzburg CBD",
            description:
                "A respected public art gallery with collections spanning South African and international works.",
            wikipedia: "Tatham Art Gallery"
        }
    ],

    "Richards Bay": [
        {
            name: "Richards Bay Waterfront",
            tag: "Coast",
            location: "Richards Bay Waterfront",
            description:
                "A coastal area where visitors can enjoy the lagoon, restaurants, water activities and beautiful sunsets.",
            wikipedia: "Richards Bay"
        },
        {
            name: "Enseleni Nature Reserve",
            tag: "Wildlife",
            location: "Enseleni, Richards Bay",
            description:
                "A protected wetland and forest environment with opportunities for bird watching and nature walks.",
            wikipedia: "Enseleni Nature Reserve"
        },
        {
            name: "Alkanstrand Beach",
            tag: "Beach",
            location: "Alkanstrand, Richards Bay",
            description:
                "A popular beach destination offering a relaxed coastal experience on the KwaZulu-Natal shoreline.",
            wikipedia: "Richards Bay"
        }
    ],

    Gqeberha: [
        {
            name: "Addo Elephant National Park",
            tag: "Wildlife",
            location: "Near Gqeberha",
            description:
                "One of South Africa's major wildlife destinations, famous for elephant sightings and diverse ecosystems.",
            wikipedia: "Addo Elephant National Park"
        },
        {
            name: "Boardwalk",
            tag: "Entertainment",
            location: "Summerstrand, Gqeberha",
            description:
                "A popular entertainment complex near the beachfront with restaurants, shops and leisure activities.",
            wikipedia: "The Boardwalk Casino and Entertainment World"
        },
        {
            name: "Donkin Reserve",
            tag: "Heritage",
            location: "Central Gqeberha",
            description:
                "A historic hilltop area featuring the iconic lighthouse and pyramid monument overlooking the city.",
            wikipedia: "Donkin Heritage Trail"
        }
    ],

    "East London": [
        {
            name: "East London Aquarium",
            tag: "Marine Life",
            location: "Esplanade, East London",
            description:
                "A coastal aquarium where visitors can learn about marine life from the Eastern Cape coastline.",
            wikipedia: "East London Aquarium"
        },
        {
            name: "Nahoon Beach",
            tag: "Beach",
            location: "Nahoon, East London",
            description:
                "A beautiful beach known for surfing, long walks and its relaxed coastal atmosphere.",
            wikipedia: "East London, Eastern Cape"
        },
        {
            name: "Mpongo Private Game Reserve",
            tag: "Wildlife",
            location: "Macleantown, near East London",
            description:
                "A wildlife reserve offering safari experiences and opportunities to see African animals in a natural setting.",
            wikipedia: "East London, Eastern Cape"
        }
    ],

    Mthatha: [
        {
            name: "Nelson Mandela Museum",
            tag: "History",
            location: "Mthatha Central",
            description:
                "A museum dedicated to the life, legacy and history of Nelson Mandela and the Eastern Cape.",
            wikipedia: "Nelson Mandela Museum"
        },
        {
            name: "Mthatha Dam",
            tag: "Nature",
            location: "Mthatha Dam",
            description:
                "A scenic reservoir surrounded by rolling landscapes and countryside.",
            wikipedia: "Mthatha"
        },
        {
            name: "Qunu",
            tag: "Heritage",
            location: "Qunu, near Mthatha",
            description:
                "The rural area associated with Nelson Mandela's childhood and later years.",
            wikipedia: "Qunu"
        }
    ],

    Mbombela: [
        {
            name: "Kruger National Park",
            tag: "Wildlife",
            location: "Near Mbombela",
            description:
                "One of Africa's most famous wildlife reserves, home to an extraordinary diversity of animals and landscapes.",
            wikipedia: "Kruger National Park"
        },
        {
            name: "Lowveld National Botanical Garden",
            tag: "Nature",
            location: "Riverside, Mbombela",
            description:
                "A botanical garden showcasing the distinctive plants and landscapes of the Lowveld region.",
            wikipedia: "Lowveld National Botanical Garden"
        },
        {
            name: "Sudwala Caves",
            tag: "Adventure",
            location: "N4, near Mbombela",
            description:
                "Ancient caves with dramatic formations and a fascinating geological history.",
            wikipedia: "Sudwala Caves"
        }
    ],

    "White River": [
        {
            name: "Casterbridge Lifestyle Centre",
            tag: "Lifestyle",
            location: "White River Central",
            description:
                "A creative destination with restaurants, art, crafts, gardens and local experiences.",
            wikipedia: "White River, Mpumalanga"
        },
        {
            name: "White River Country Estate",
            tag: "Nature",
            location: "White River, Mpumalanga",
            description:
                "A peaceful Lowveld setting surrounded by the area's distinctive landscapes and wildlife.",
            wikipedia: "White River, Mpumalanga"
        },
        {
            name: "Kruger Gateway",
            tag: "Wildlife",
            location: "Near White River",
            description:
                "White River provides convenient access to the Lowveld and major wildlife destinations.",
            wikipedia: "White River, Mpumalanga"
        }
    ],

    Hazyview: [
        {
            name: "Elephant Whispers",
            tag: "Wildlife",
            location: "Hazyview",
            description:
                "A well-known elephant interaction experience focused on education and conservation.",
            wikipedia: "Hazyview"
        },
        {
            name: "Panorama Route",
            tag: "Scenery",
            location: "Panorama Route, near Hazyview",
            description:
                "A spectacular route featuring waterfalls, cliffs, forests and some of Mpumalanga's most famous viewpoints.",
            wikipedia: "Panorama Route"
        },
        {
            name: "Mac-Mac Falls",
            tag: "Nature",
            location: "Sabie, near Hazyview",
            description:
                "A striking waterfall surrounded by the lush scenery of the Mpumalanga highlands.",
            wikipedia: "Mac-Mac Falls"
        }
    ],

    Polokwane: [
        {
            name: "Polokwane Game Reserve",
            tag: "Wildlife",
            location: "Polokwane",
            description:
                "A large reserve offering wildlife viewing, hiking and outdoor experiences close to the city.",
            wikipedia: "Polokwane Game Reserve"
        },
        {
            name: "Bakone Malapa Open-Air Museum",
            tag: "Culture",
            location: "Flora Park, Polokwane",
            description:
                "An open-air museum preserving and presenting the traditional culture and architecture of the Bakone people.",
            wikipedia: "Bakone Malapa Northern Sotho Open-Air Museum"
        },
        {
            name: "Meropa Casino",
            tag: "Entertainment",
            location: "R71, Polokwane",
            description:
                "A leisure destination featuring restaurants, entertainment and family-oriented attractions.",
            wikipedia: "Polokwane"
        }
    ],

    Tzaneen: [
        {
            name: "Debegeni Falls",
            tag: "Nature",
            location: "Magoebaskloof, near Tzaneen",
            description:
                "A beautiful waterfall destination surrounded by lush northern Limpopo scenery.",
            wikipedia: "Tzaneen"
        },
        {
            name: "Modjadji Cycad Reserve",
            tag: "Nature",
            location: "Modjadjiskloof, near Tzaneen",
            description:
                "A unique botanical reserve protecting one of the world's largest concentrations of ancient cycads.",
            wikipedia: "Modjadji Cycad Reserve"
        },
        {
            name: "Agatha Forest Reserve",
            tag: "Outdoors",
            location: "Agatha, Tzaneen",
            description:
                "A peaceful forested landscape ideal for exploring Limpopo's natural environment.",
            wikipedia: "Tzaneen"
        }
    ],

    Thohoyandou: [
        {
            name: "Thathe Vondo Forest",
            tag: "Nature",
            location: "Vondo, near Thohoyandou",
            description:
                "A beautiful forest region featuring waterfalls, mountain scenery and traditional cultural significance.",
            wikipedia: "Vhembe District Municipality"
        },
        {
            name: "Lake Fundudzi",
            tag: "Heritage",
            location: "Lake Fundudzi, near Thohoyandou",
            description:
                "A culturally significant natural lake surrounded by Venda traditions and beautiful scenery.",
            wikipedia: "Lake Fundudzi"
        },
        {
            name: "Phiphidi Waterfalls",
            tag: "Nature",
            location: "Phiphidi, near Thohoyandou",
            description:
                "A scenic waterfall destination surrounded by lush vegetation in the Vhembe region.",
            wikipedia: "Vhembe District Municipality"
        }
    ],

    Bloemfontein: [
        {
            name: "Naval Hill",
            tag: "Nature",
            location: "Naval Hill, Bloemfontein",
            description:
                "A prominent hill overlooking Bloemfontein, offering city views and outdoor experiences.",
            wikipedia: "Naval Hill"
        },
        {
            name: "Oliewenhuis Art Museum",
            tag: "Art",
            location: "Westdene, Bloemfontein",
            description:
                "A respected art museum displaying South African works in a beautiful historic setting.",
            wikipedia: "Oliewenhuis Art Museum"
        },
        {
            name: "National Museum",
            tag: "Science & Culture",
            location: "Bloemfontein Central",
            description:
                "A long-established museum covering natural history, archaeology, fossils and cultural heritage.",
            wikipedia: "National Museum, Bloemfontein"
        }
    ],

    Welkom: [
        {
            name: "Ernest Oppenheimer Memorial Gardens",
            tag: "Heritage",
            location: "Welkom Central",
            description:
                "A notable landmark reflecting Welkom's mining history and civic heritage.",
            wikipedia: "Welkom"
        },
        {
            name: "Goldfields Casino",
            tag: "Entertainment",
            location: "Welkom Central",
            description:
                "A leisure and entertainment destination serving the Goldfields region.",
            wikipedia: "Welkom"
        },
        {
            name: "Welkom Mine Heritage",
            tag: "History",
            location: "Welkom, Free State",
            description:
                "Explore the city's identity and development through its important gold-mining heritage.",
            wikipedia: "Welkom"
        }
    ],

    Bethlehem: [
        {
            name: "Golden Gate Highlands National Park",
            tag: "Nature",
            location: "Golden Gate Highlands, near Bethlehem",
            description:
                "A spectacular mountain park known for golden sandstone cliffs, hiking and wildlife.",
            wikipedia: "Golden Gate Highlands National Park"
        },
        {
            name: "Clarens",
            tag: "Village",
            location: "Clarens, near Bethlehem",
            description:
                "A picturesque Free State village surrounded by sandstone mountains and known for art, food and outdoor activities.",
            wikipedia: "Clarens, Free State"
        },
        {
            name: "Basotho Cultural Village",
            tag: "Culture",
            location: "Golden Gate Highlands, near Bethlehem",
            description:
                "A cultural attraction offering insight into Basotho traditions, architecture and heritage.",
            wikipedia: "Golden Gate Highlands National Park"
        }
    ],

    Rustenburg: [
        {
            name: "Pilanesberg National Park",
            tag: "Wildlife",
            location: "Pilanesberg, near Rustenburg",
            description:
                "A major wildlife reserve set inside an ancient volcanic landscape, home to a wide range of African wildlife.",
            wikipedia: "Pilanesberg National Park"
        },
        {
            name: "Sun City",
            tag: "Resort",
            location: "Sun City, near Rustenburg",
            description:
                "A world-famous resort destination featuring entertainment, hotels, restaurants, water attractions and golf.",
            wikipedia: "Sun City, South Africa"
        },
        {
            name: "Kgaswane Mountain Reserve",
            tag: "Nature",
            location: "Rustenburg",
            description:
                "A mountain reserve known for hiking trails, wildlife and beautiful Magaliesberg scenery.",
            wikipedia: "Kgaswane Mountain Reserve"
        }
    ],

    Mahikeng: [
        {
            name: "Mafikeng Game Reserve",
            tag: "Wildlife",
            location: "Mahikeng",
            description:
                "A wildlife reserve offering a peaceful bush experience close to the city.",
            wikipedia: "Mahikeng"
        },
        {
            name: "Mafikeng Museum",
            tag: "History",
            location: "Mahikeng Central",
            description:
                "A museum preserving important stories from the history and heritage of the region.",
            wikipedia: "Mahikeng"
        },
        {
            name: "Mafikeng Heritage",
            tag: "Culture",
            location: "Mahikeng, North West",
            description:
                "Discover the cultural history and significance of Mahikeng and the surrounding region.",
            wikipedia: "Mahikeng"
        }
    ],

    Potchefstroom: [
        {
            name: "North-West University Botanical Garden",
            tag: "Nature",
            location: "North-West University, Potchefstroom",
            description:
                "A botanical garden showcasing diverse plants and providing a peaceful green space.",
            wikipedia: "North-West University"
        },
        {
            name: "Potchefstroom Museum",
            tag: "History",
            location: "Potchefstroom Central",
            description:
                "A heritage museum documenting the history and development of one of South Africa's historic towns.",
            wikipedia: "Potchefstroom"
        },
        {
            name: "Mooi River",
            tag: "Outdoors",
            location: "Mooi River, Potchefstroom",
            description:
                "The river and surrounding green spaces contribute to Potchefstroom's relaxed outdoor character.",
            wikipedia: "Potchefstroom"
        }
    ],

    Kimberley: [
        {
            name: "Big Hole",
            tag: "History",
            location: "Kimberley Central",
            description:
                "One of South Africa's most famous mining landmarks, telling the story of Kimberley's diamond rush.",
            wikipedia: "Big Hole"
        },
        {
            name: "McGregor Museum",
            tag: "Culture",
            location: "Belgravia, Kimberley",
            description:
                "A major museum exploring the natural and cultural history of the Northern Cape.",
            wikipedia: "McGregor Museum"
        },
        {
            name: "Kamfers Dam",
            tag: "Nature",
            location: "Kamfersdam, Kimberley",
            description:
                "A wetland area known for birdlife and distinctive Northern Cape scenery.",
            wikipedia: "Kimberley, Northern Cape"
        }
    ],

    Upington: [
        {
            name: "Kalahari-Oranje Museum",
            tag: "History",
            location: "Upington Central",
            description:
                "A museum exploring the history and culture of Upington and the surrounding Northern Cape.",
            wikipedia: "Upington"
        },
        {
            name: "Orange River",
            tag: "Nature",
            location: "Orange River, Upington",
            description:
                "The Orange River provides a striking green contrast against the dry landscapes surrounding Upington.",
            wikipedia: "Orange River"
        },
        {
            name: "Kalahari",
            tag: "Adventure",
            location: "Kalahari, near Upington",
            description:
                "Upington provides access to the remarkable landscapes and wilderness of the Kalahari region.",
            wikipedia: "Kalahari Desert"
        }
    ],

    Springbok: [
        {
            name: "Namaqualand",
            tag: "Nature",
            location: "Namaqualand, near Springbok",
            description:
                "A spectacular region famous for seasonal wildflowers transforming the normally dry landscape.",
            wikipedia: "Namaqualand"
        },
        {
            name: "Goegap Nature Reserve",
            tag: "Wildlife",
            location: "Goegap Nature Reserve, near Springbok",
            description:
                "A dramatic desert reserve with rugged mountains, wildlife and distinctive succulent vegetation.",
            wikipedia: "Goegap Nature Reserve"
        },
        {
            name: "Springbok Klipkerk",
            tag: "Heritage",
            location: "Springbok Central",
            description:
                "A historic stone church and recognizable landmark in the heart of Springbok.",
            wikipedia: "Springbok, Northern Cape"
        }
    ]
};

// ============================================================
// FALLBACK IMAGE
// ============================================================

const fallbackImage =
    "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&q=85";

// ============================================================
// DOM ELEMENTS
// ============================================================

const countryInput =
    document.getElementById("countryInput");

const searchButton =
    document.getElementById("searchButton");

const countryResult =
    document.getElementById("countryResult");

const discoverCitySelect =
    document.getElementById("discoverCitySelect");

const discoverResultsHeading =
    document.getElementById("discoverResultsHeading");

const destinationGrid =
    document.getElementById("destinationGrid");

const countryExperience =
    document.getElementById("countryExperience");

const experienceContent =
    document.getElementById("experienceContent");

const closeExperience =
    document.getElementById("closeExperience");


// ============================================================
// HELPER FUNCTIONS
// ============================================================

function escapeHTML(value) {
    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


function formatNumber(value, decimals = 0) {
    const number = Number(value);

    if (!Number.isFinite(number)) {
        return "—";
    }

    return number.toFixed(decimals);
}


function getWeatherDescription(code) {
    return weatherDescriptions[code] || "Weather conditions unavailable";
}


function getMapsUrl(location) {
    return (
        "https://www.google.com/maps/search/?api=1&query=" +
        encodeURIComponent(location + ", South Africa")
    );
}


// ============================================================
// DESTINATION IMAGE LOOKUP
// ============================================================

async function getDestinationImage(destination) {

    /*
     * Search the actual destination name first.
     * This prevents different attractions from receiving
     * the same city-wide Wikipedia image.
     */
    const searches = [
        destination.name,
        `${destination.name}, South Africa`,
        destination.wikipedia
    ];

    // --------------------------------------------------------
    // 1. TRY WIKIPEDIA
    // --------------------------------------------------------

    for (const searchTerm of searches) {

        if (!searchTerm) {
            continue;
        }

        try {

            const response =
                await fetch(
                    WIKIPEDIA_API +
                    encodeURIComponent(searchTerm)
                );

            if (!response.ok) {
                continue;
            }

            const data =
                await response.json();

            if (
                data &&
                data.thumbnail &&
                data.thumbnail.source
            ) {

                return data.thumbnail.source;

            }

        } catch (error) {

            console.warn(
                "Wikipedia image lookup failed:",
                searchTerm,
                error
            );

        }

    }


    // --------------------------------------------------------
    // 2. TRY WIKIMEDIA COMMONS
    // --------------------------------------------------------

    try {

        const params =
            new URLSearchParams({

                action: "query",

                generator: "search",

                gsrsearch:
                    `${destination.name} South Africa`,

                gsrnamespace: "6",

                gsrlimit: "10",

                prop: "imageinfo",

                iiprop: "url|mime",

                iiurlwidth: "1200",

                format: "json",

                origin: "*"

            });


        const response =
            await fetch(
                WIKIMEDIA_COMMONS_API +
                "?" +
                params.toString()
            );


        if (response.ok) {

            const data =
                await response.json();


            const pages =
                data?.query?.pages
                    ? Object.values(
                        data.query.pages
                    )
                    : [];


            const imagePage =
                pages.find(
                    page =>
                        page.imageinfo &&
                        page.imageinfo[0] &&
                        page.imageinfo[0].mime &&
                        page.imageinfo[0].mime.startsWith(
                            "image/"
                        )
                );


            if (imagePage) {

                const imageInfo =
                    imagePage.imageinfo[0];


                return (
                    imageInfo.thumburl ||
                    imageInfo.url
                );

            }

        }

    } catch (error) {

        console.warn(
            "Wikimedia Commons image lookup failed:",
            destination.name,
            error
        );

    }


    // --------------------------------------------------------
    // 3. ONLY USE TREE FALLBACK IF EVERYTHING FAILS
    // --------------------------------------------------------

    return fallbackImage;

}

// ============================================================
// PROVINCE IMAGES
// ============================================================

function loadProvinceImages() {

    const provinceImages = {
        "Gauteng":
            "https://images.unsplash.com/photo-1577948000111-9c970d143e8b?auto=format&fit=crop&w=1200&q=85",

        "Western Cape":
            "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&fit=crop&w=1200&q=85",

        "KwaZulu-Natal":
            "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&w=1200&q=85",

        "Eastern Cape":
            "https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=1200&q=85",

        "Mpumalanga":
            "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=85",

        "Limpopo":
            "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&q=85",

        "Free State":
            "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=85",

        "North West":
            "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=85",

        "Northern Cape":
            "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=85"
    };

    const provinceCards =
        document.querySelectorAll(".province-card");

    provinceCards.forEach(card => {

        const provinceName =
            card
                .querySelector(".province-card-front h3")
                ?.textContent
                .trim();

        const image =
            card.querySelector(".province-card-image");

        if (!image || !provinceName) {
            return;
        }

        const imageUrl =
            provinceImages[provinceName];

        if (imageUrl) {

            image.src = imageUrl;

            image.onerror = function () {

                this.src = fallbackImage;

            };

        }

    });
}


// ============================================================
// WEATHER INITIAL STATE
// ============================================================

function showInitialWeatherState() {

    countryResult.innerHTML = `
        <div class="destination-empty">
            <div class="empty-icon">◎</div>

            <h3>
                Your next destination starts here.
            </h3>

            <p>
                Search for a city above to see its
                current weather conditions.
            </p>
        </div>
    `;
}


// ============================================================
// WEATHER LOADING
// ============================================================

function showWeatherLoading() {

    countryResult.innerHTML = `
        <div class="loading-message">
            <h3>Finding your destination...</h3>
            <p>
                Loading live location and weather information.
            </p>
        </div>
    `;
}


// ============================================================
// WEATHER ERROR
// ============================================================

function showWeatherError(message) {

    countryResult.innerHTML = `
        <div class="error-message">
            <strong>We couldn't find that city.</strong>
            <p>${escapeHTML(message)}</p>
        </div>
    `;
}


// ============================================================
// WEATHER RESULT
// ============================================================

function renderWeatherResult(location, weather) {

    const current =
        weather.current;

    const temperature =
        formatNumber(current.temperature_2m);

    const apparentTemperature =
        formatNumber(current.apparent_temperature);

    const humidity =
        formatNumber(current.relative_humidity_2m);

    const windSpeed =
        formatNumber(current.wind_speed_10m);

    const condition =
        getWeatherDescription(
            current.weather_code
        );

    const latitude =
        Number(location.latitude).toFixed(3);

    const longitude =
        Number(location.longitude).toFixed(3);

    countryResult.innerHTML = `
        <div class="weather-result">

            <div class="weather-result-header">

                <div class="weather-result-location">

                    <span class="eyebrow">
                        LIVE WEATHER
                    </span>

                    <h3>
                        ${escapeHTML(location.name)}
                    </h3>

                    <p>
                        ${escapeHTML(location.admin1 || "South Africa")}
                        · ${latitude}, ${longitude}
                    </p>

                </div>

                <div>
                    <a
                        href="${getMapsUrl(location.name)}"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="btn-secondary"
                    >
                        VIEW MAP
                    </a>
                </div>

            </div>


            <div class="weather-main">

                <div class="weather-temperature">

                    <div>
                        <span class="value">
                            ${temperature}
                        </span>

                        <span class="unit">
                            °C
                        </span>
                    </div>

                    <p class="weather-condition">
                        ${escapeHTML(condition)}
                    </p>

                </div>


                <div class="weather-details">

                    <div class="weather-detail">

                        <span>
                            Humidity
                        </span>

                        <strong>
                            ${humidity}%
                        </strong>

                        <small>
                            Relative humidity
                        </small>

                    </div>


                    <div class="weather-detail">

                        <span>
                            Feels Like
                        </span>

                        <strong>
                            ${apparentTemperature}°C
                        </strong>

                        <small>
                            Apparent temperature
                        </small>

                    </div>


                    <div class="weather-detail">

                        <span>
                            Wind
                        </span>

                        <strong>
                            ${windSpeed}
                        </strong>

                        <small>
                            km/h
                        </small>

                    </div>


                    <div class="weather-detail">

                        <span>
                            Coordinates
                        </span>

                        <strong>
                            ${latitude}
                        </strong>

                        <small>
                            Latitude
                        </small>

                    </div>

                </div>

            </div>

        </div>
    `;
}


// ============================================================
// GEOCODING
// ============================================================

async function geocodeCity(city) {

    const url =
        `${GEOCODING_API}?name=${encodeURIComponent(city)}` +
        `&count=10&language=en&format=json`;

    const response =
        await fetch(url);

    if (!response.ok) {
        throw new Error(
            "The location service is currently unavailable."
        );
    }

    const data =
        await response.json();

    if (
        !data.results ||
        data.results.length === 0
    ) {
        throw new Error(
            `No location was found for "${city}".`
        );
    }

    const southAfricanResult =
        data.results.find(
            result =>
                result.country_code === "ZA"
        );

    return southAfricanResult ||
        data.results[0];
}


// ============================================================
// FETCH WEATHER
// ============================================================

async function fetchWeather(latitude, longitude) {

    const url =
        `${WEATHER_API}?latitude=${latitude}` +
        `&longitude=${longitude}` +
        `&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m` +
        `&timezone=auto`;

    const response =
        await fetch(url);

    if (!response.ok) {
        throw new Error(
            "Unable to retrieve weather information."
        );
    }

    return await response.json();
}


// ============================================================
// EXPLORE CITY
// ============================================================

async function exploreCity(city) {

    if (!city || !city.trim()) {

        showWeatherError(
            "Please enter a city name first."
        );

        return;
    }

    const cleanCity =
        city.trim();

    document
        .getElementById("explore")
        .scrollIntoView({
            behavior: "smooth",
            block: "start"
    });


    showWeatherLoading();

    try {

        const location =
            await geocodeCity(cleanCity);

        const weather =
            await fetchWeather(
                location.latitude,
                location.longitude
            );

        renderWeatherResult(
            location,
            weather
        );

        countryInput.value =
            location.name;

        document
            .getElementById("explore")
            .scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

    } catch (error) {

        console.error(error);

        showWeatherError(
            error.message ||
            "Something went wrong while loading the city."
        );
    }
}


// ============================================================
// WEATHER SEARCH EVENTS
// ============================================================

if (searchButton) {

    searchButton.addEventListener(
        "click",
        () => {

            exploreCity(
                countryInput.value
            );

        }
    );
}


if (countryInput) {

    countryInput.addEventListener(
        "keydown",
        event => {

            if (event.key === "Enter") {

                event.preventDefault();

                exploreCity(
                    countryInput.value
                );

            }

        }
    );
}


// ============================================================
// QUICK CITY SEARCHES
// ============================================================

document
    .querySelectorAll(".quick-country")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const city =
                    button.dataset.city;

                countryInput.value =
                    city;

                exploreCity(city);

            }
        );

    });


// ============================================================
// PROVINCE CARD FLIPPING
// ============================================================

document
    .querySelectorAll(".province-card")
    .forEach(card => {

        const front =
            card.querySelector(".province-card-front");

        const back =
            card.querySelector(".province-card-back");

        if (!front || !back) {
            return;
        }

        front.addEventListener(
            "click",
            event => {

                // Don't flip the card when clicking
                // an interactive element on the front.
                if (event.target.closest("button, a")) {
                    return;
                }

                card.classList.add("flipped");

            }
        );

        back.addEventListener(
            "click",
            event => {

                // Don't flip the card when clicking
                // an interactive element on the back.
                if (event.target.closest("button, a")) {
                    return;
                }

                card.classList.remove("flipped");

            }
        );

    });

// ============================================================
// PROVINCE CITY CLICKS
// ============================================================

document
    .querySelectorAll(".province-cities span")
    .forEach(cityElement => {

        cityElement.classList.add(
            "province-city"
        );

        cityElement.setAttribute(
            "role",
            "button"
        );

        cityElement.setAttribute(
            "tabindex",
            "0"
        );

        const activateCity =
            () => {

                const city =
                    cityElement.textContent.trim();

                countryInput.value =
                    city;

                exploreCity(city);

            };

        cityElement.addEventListener(
            "click",
            event => {

                event.stopPropagation();

                activateCity();

            }
        );

        cityElement.addEventListener(
            "keydown",
            event => {

                if (
                    event.key === "Enter" ||
                    event.key === " "
                ) {

                    event.preventDefault();

                    event.stopPropagation();

                    activateCity();

                }

            }
        );

    });


// ============================================================
// PROVINCE EXPLORE BUTTONS
// ============================================================

document
    .querySelectorAll(".province-explore")
    .forEach(button => {

        button.addEventListener(
            "click",
            event => {

                event.stopPropagation();

                const city =
                    button.dataset.city;

                countryInput.value =
                    city;

                exploreCity(city);

            }
        );

    });


// ============================================================
// DISCOVER EMPTY STATE
// ============================================================

function showDiscoverEmptyState() {

    if (!destinationGrid) {
        return;
    }

    destinationGrid.innerHTML = `
        <div class="destination-empty">

            <div class="empty-icon">
                ✦
            </div>

            <h3>
                Your next adventure is waiting.
            </h3>

            <p>
                Select a city above to discover
                remarkable places and experiences.
            </p>

        </div>
    `;

    if (discoverResultsHeading) {

        discoverResultsHeading.innerHTML = `
            <h3>Featured places</h3>
            <span>Choose a city to begin</span>
        `;

    }
}


// ============================================================
// CREATE DESTINATION CARD
// ============================================================

function createDestinationCard(destination, image) {

    const card = document.createElement("article");

    card.className = "destination-card";

    card.innerHTML = `
        <div class="destination-card-inner">

            <!-- FRONT -->
            <div class="destination-card-front">

                <div class="destination-image-container">

                    <img
                        class="destination-card-image"
                        src="${escapeHTML(image)}"
                        alt="${escapeHTML(destination.name)}"
                        loading="lazy"
                    >

                    <div class="destination-overlay"></div>

                </div>

                <div class="destination-content">

                    <span class="destination-tag">
                        ${escapeHTML(destination.tag)}
                    </span>

                    <h3>
                        ${escapeHTML(destination.name)}
                    </h3>

                    <p class="destination-location">
                        ${escapeHTML(destination.location)}
                    </p>

                    <span class="destination-flip-hint">
                        CLICK TO EXPLORE →
                    </span>

                </div>

            </div>


            <!-- BACK -->
            <div class="destination-card-back">

                <div class="destination-back-content">

                    <span class="destination-tag destination-tag-back">
                        ${escapeHTML(destination.tag)}
                    </span>

                    <h3>
                        ${escapeHTML(destination.name)}
                    </h3>

                    <p class="destination-description">
                        ${escapeHTML(destination.description)}
                    </p>

                    <div class="destination-back-actions">

                        <a
                            class="destination-map-button"
                            href="${getMapsUrl(
                                destination.name + ", " + destination.location
                            )}"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            VIEW ON GOOGLE MAPS →
                        </a>

                    </div>

                </div>

            </div>

        </div>
    `;


    /*
     * FRONT
     * Clicking anywhere on the front
     * flips the card.
     */
    const front =
        card.querySelector(
            ".destination-card-front"
        );

    if (front) {

        front.addEventListener(
            "click",
            () => {

                card.classList.add(
                    "flipped"
                );

            }
        );

    }


    /*
     * BACK
     * Clicking the back flips it
     * back to the front.
     */
    const back =
        card.querySelector(
            ".destination-card-back"
        );

    if (back) {

        back.addEventListener(
            "click",
            event => {

                /*
                 * IMPORTANT:
                 * If the Google Maps link was
                 * clicked, do NOT flip.
                 */
                if (
                    event.target.closest(
                        ".destination-map-button"
                    )
                ) {
                    return;
                }

                card.classList.remove(
                    "flipped"
                );

            }
        );

    }


    /*
     * GOOGLE MAPS
     *
     * Stop the click from reaching
     * the back-card handler.
     */
    const mapButton =
        card.querySelector(
            ".destination-map-button"
        );

    if (mapButton) {

        mapButton.addEventListener(
            "click",
            event => {

                event.stopPropagation();

            }
        );

    }


    return card;
}



// ============================================================
// RENDER DISCOVER CITY
// ============================================================

async function renderDiscoverCity(city) {

    if (!city) {

        showDiscoverEmptyState();

        return;
    }

    const destinations =
        touristDestinationsData[city];

    if (
        !destinations ||
        destinations.length === 0
    ) {

        destinationGrid.innerHTML = `
            <div class="destination-empty">

                <div class="empty-icon">
                    ✦
                </div>

                <h3>
                    No destinations found.
                </h3>

                <p>
                    Try selecting another city.
                </p>

            </div>
        `;

        return;
    }


    discoverResultsHeading.innerHTML = `
        <h3>
            ${escapeHTML(city)}
        </h3>

        <span>
            ${destinations.length} places to discover
        </span>
    `;


    destinationGrid.innerHTML = `
        <div class="loading-message">
            <h3>Finding beautiful places...</h3>
            <p>
                Loading destination images.
            </p>
        </div>
    `;


    const destinationCards =
        await Promise.all(
            destinations.map(
                async destination => {

                    const image =
                        await getDestinationImage(
                            destination
                        );

                    return createDestinationCard(
                        destination,
                        image
                    );

                }
            )
        );


    destinationGrid.innerHTML = "";

    destinationCards.forEach(card => {

        destinationGrid.appendChild(
            card
        );

    });

}


// ============================================================
// DISCOVER SELECT
// ============================================================

if (discoverCitySelect) {

    discoverCitySelect.addEventListener(
        "change",
        () => {

            const city =
                discoverCitySelect.value.trim();

            if (!city) {

                showDiscoverEmptyState();

                return;
            }

            renderDiscoverCity(city);

        }
    );

}




// ============================================================
// NAVIGATION
// ============================================================

document
    .querySelectorAll('a[href^="#"]')
    .forEach(link => {

        link.addEventListener(
            "click",
            event => {

                const targetId =
                    link.getAttribute("href");

                if (
                    !targetId ||
                    targetId === "#"
                ) {
                    return;
                }

                const target =
                    document.querySelector(
                        targetId
                    );

                if (!target) {
                    return;
                }

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }
        );

    });


// ============================================================
// MODAL
// ============================================================

function openExperience(content) {

    if (!countryExperience) {
        return;
    }

    experienceContent.innerHTML =
        content;

    countryExperience.classList.add(
        "active"
    );

    countryExperience.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.style.overflow =
        "hidden";
}


function closeExperienceModal() {

    if (!countryExperience) {
        return;
    }

    countryExperience.classList.remove(
        "active"
    );

    countryExperience.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.style.overflow =
        "";
}


if (closeExperience) {

    closeExperience.addEventListener(
        "click",
        closeExperienceModal
    );

}


if (countryExperience) {

    countryExperience.addEventListener(
        "click",
        event => {

            if (
                event.target ===
                countryExperience
            ) {

                closeExperienceModal();

            }

        }
    );

}


document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            countryExperience &&
            countryExperience.classList.contains(
                "active"
            )
        ) {

            closeExperienceModal();

        }

    }
);


// ============================================================
// INITIALIZATION
// ============================================================

document.addEventListener(
    "DOMContentLoaded",
    async () => {

        showInitialWeatherState();

        showDiscoverEmptyState();

        await loadProvinceImages();

        console.log(
            "World Explorer initialized successfully."
        );

    }
);