fetch('heroscript.json')
    .then(response => response.json())
    .then(heroes => {
        console.log(heroes);

        // Example usage:
        heroes.forEach(hero => {
            console.log(hero.name);
        });
        createHeroGrid(heroes);
    })
    .catch(error => {
        console.error('Error fetching the heroes:', error);
    });

function createHeroGrid(heroes) {
    const tankGrid = document.getElementById('tank-grid');
    const damageGrid = document.getElementById('damage-grid');
    const supportGrid = document.getElementById('support-grid');
    
    heroes.forEach((hero, index) => {
        const gridItem = document.createElement('div');
        gridItem.className = 'grid-item';
        gridItem.addEventListener('click', () => showHeroDetails(hero));
        
        const img = document.createElement('img');
        img.src = hero.grid_img;
        img.alt = hero.name;
        gridItem.appendChild(img);

        if (hero.role.includes('Tank')) {
            tankGrid.appendChild(gridItem);
        } else if (hero.role.includes('Damage')) {
            damageGrid.appendChild(gridItem);
        } else if (hero.role.includes('Support')) {
            supportGrid.appendChild(gridItem);
        }
    });
}

function showHeroDetails(hero) {
    document.getElementById('hero-name').innerText = hero.name;
    document.getElementById('hero-role').innerText = hero.role;
    document.getElementById('hero-img').src = hero.portrait_img;
    document.getElementById('hero-img').style.display = 'block';

    const counters = document.getElementById('hero-counters');
    counters.innerHTML = '';
    hero.counters.forEach(counter => {
        const img = document.createElement('img');
        img.src = counter;
        img.alt = "Counter";
        counters.appendChild(img);
    });

    const weaknesses = document.getElementById('hero-weaknesses');
    weaknesses.innerHTML = '';
    hero.weaknesses.forEach(weakness => {
        const img = document.createElement('img');
        img.src = weakness;
        img.alt = "Weakness";
        weaknesses.appendChild(img);
    });
}

document.addEventListener('DOMContentLoaded', () => {
});
