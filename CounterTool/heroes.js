let heroImageMap = {};

function fetchAndCreateHeroGrid() {
    fetch('hero_data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Build the hero image map
            heroImageMap = data.reduce((map, hero) => {
                map[hero["Hero Name"]] = hero["Grid Img"];
                return map;
            }, {});

            const tankGrid = document.getElementById('tank-grid');
            const damageGrid = document.getElementById('damage-grid');
            const supportGrid = document.getElementById('support-grid');

            data.forEach((hero) => {
                const gridItem = document.createElement('div');
                gridItem.className = 'grid-item';
                gridItem.addEventListener('click', () => showHeroDetails(hero));
                
                const img = document.createElement('img');
                img.src = hero["Icon Img"];
                img.alt = hero["Hero Name"];
                
                img.onerror = function() {
                    console.error("Image failed to load for hero:", hero["Hero Name"], "with path:", hero["Icon Img"]);
                    img.src = 'path_to_fallback_image.jpg';  // Optional fallback
                };

                gridItem.appendChild(img);

                if (hero["Role"].includes('Tank')) {
                    tankGrid.appendChild(gridItem);
                } else if (hero["Role"].includes('Damage')) {
                    damageGrid.appendChild(gridItem);
                } else if (hero["Role"].includes('Support')) {
                    supportGrid.appendChild(gridItem);
                }
            });
        })
        .catch(error => console.error('Error fetching hero data:', error));
}

// Show the hero details when a hero is clicked
function showHeroDetails(hero) {
    document.getElementById('hero-name').innerText = hero["Hero Name"];
    document.getElementById('hero-role').innerText = hero["Role"];
    document.getElementById('hero-img').src = hero["Portrait Img"];
    document.getElementById('hero-img').style.display = 'block';

    const counters = document.getElementById('hero-counters');
    counters.innerHTML = '';
    if (hero["Counters"]) {
        hero["Counters"].forEach(counterName => {
            const img = document.createElement('img');
            img.src = heroImageMap[counterName] || 'path_to_fallback_image.jpg'; // Use the mapping to get the image path
            img.alt = "Counter";
            counters.appendChild(img);
        });
    }

    const weaknesses = document.getElementById('hero-weaknesses');
    weaknesses.innerHTML = '';
    if (hero["Weaknesses"]) {
        hero["Weaknesses"].forEach(weaknessName => {
            const img = document.createElement('img');
            img.src = heroImageMap[weaknessName] || 'path_to_fallback_image.jpg'; // Use the mapping to get the image path
            img.alt = "Weakness";
            weaknesses.appendChild(img);
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    fetchAndCreateHeroGrid();
});
