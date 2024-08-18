const heroes = [
    {
        name: "D.Va",
        role: "Dive Tank",
        portrait_img: "/images/hero_portraits/d.va-portrait.png",
        grid_img: "/images/hero-icons/dva-icon.png",
        counters: [
            "/images/hero_portraits/orisa-portrait.png",
            "/images/hero_portraits/sigma-portrait.png",
        ],
        weaknesses: [
            "/images/hero_portraits/zarya-portrait.png",
            "/images/hero_portraits/symmetra-portrait.png",
            "/images/hero_portraits/mei-portrait.png",
        ]
    },
    {
        name: "Doomfist",
        role: "Dive Tank",
        portrait_img: "/images/hero_portraits/doomfist-portrait.png",
        grid_img: "/images/hero-icons/doomfist-icon.png",
        counters: [
            "/images/hero_portraits/reinhardt-portrait.png",
            "/images/hero_portraits/sigma-portrait.png",
        ],
        weaknesses: [
            "/images/hero_portraits/roadhog-portrait.png",
            "/images/hero_portraits/sombra-portrait.png",
            "/images/hero_portraits/ana-portrait.png",
        ]
    },
    {
        name: "Junker Queen",
        role: "Brawl Tank",
        portrait_img: "/images/hero_portraits/junkerqueen-portrait.png",
        grid_img: "/images/hero-icons/junker-queen-icon.png",
        counters: [
            "/images/hero_portraits/winston-portrait.png",
            "/images/hero_portraits/doomfist-portrait.png",
        ],
        weaknesses: [
            "/images/hero_portraits/orisa-portrait.png",
            "/images/hero_portraits/bastion-portrait.png",
            "/images/hero_portraits/kiriko-portrait.png",
        ]
    },
    {
        name: "Mauga",
        role: "Brawl Tank",
        portrait_img: "/images/hero_portraits/mauga-portrait.png",
        grid_img: "/images/hero-icons/mauga-icon.png",
        counters: [
            "/images/hero_portraits/roadhog-portrait.png",
            "/images/hero_portraits/winston-portrait.png",
            "/images/hero_portraits/doomfist-portrait.png"
            
        ],
        weaknesses: [
            "/images/hero_portraits/zarya-portrait.png",
            "/images/hero_portraits/bastion-portrait.png",
            "/images/hero_portraits/ana-portrait.png",
        ]
    },
    {
        name: "Orisa",
        role: "Poke Tank",
        portrait_img: "/images/hero_portraits/orisa-portrait.png",
        grid_img: "/images/hero-icons/orisa-icon.png",
        counters: [
            "/images/hero_portraits/reinhardt-portrait.png",
            "/images/hero_portraits/ramattra-portrait.png",
        ],
        weaknesses: [
            "/images/hero_portraits/sigma-portrait.png",
            "/images/hero_portraits/zarya-portrait.png",
            "/images/hero_portraits/echo-portrait.png",
        ]
    },
    {
        name: "Ramattra",
        role: "Poke/Brawl Tank",
        portrait_img: "/images/hero_portraits/ramattra-portrait.png",
        grid_img: "/images/hero-icons/ramattra-icon.png",
        counters: [
            "/images/hero_portraits/reinhardt-portrait.png",
            "/images/hero_portraits/d.va-portrait.png",
        ],
        weaknesses: [
            "/images/hero_portraits/orisa-portrait.png",
            "/images/hero_portraits/roadhog-portrait.png",
            "/images/hero_portraits/doomfist-portrait.png",
        ]
    },
    {
        name: "Reinhardt",
        role: "Brawl Tank",
        portrait_img: "/images/hero_portraits/reinhardt-portrait.png",
        grid_img: "/images/hero-icons/reinhardt-icon.png",
        counters: [
            "/images/hero_portraits/zarya-portrait.png",
            "/images/hero_portraits/sigma-portrait.png",
        ],
        weaknesses: [
            "/images/hero_portraits/orisa-portrait.png",
            "/images/hero_portraits/bastion-portrait.png",
            "/images/hero_portraits/ramattra-portrait.png",
        ]
    },
    {
        name: "Roadhog",
        role: "Brawl Tank",
        portrait_img: "/images/hero_portraits/roadhog-portrait.png",
        grid_img: "/images/hero-icons/roadhog-icon.png",
        counters: [
            "/images/hero_portraits/doomfist-portrait.png",
            "/images/hero_portraits/ramattra-portrait.png",
        ],
        weaknesses: [
            "/images/hero_portraits/mauga-portrait.png",
            "/images/hero_portraits/orisa-portrait.png",
            "/images/hero_portraits/ana-portrait.png",
        ]
    },
    {
        name: "Sigma",
        role: "Poke Tank",
        portrait_img: "/images/hero_portraits/sigma-portrait.png",
        grid_img: "/images/hero-icons/sigma-icon.png",
        counters: [
            "/images/hero_portraits/orisa-portrait.png",
            "/images/hero_portraits/bastion-portrait.png",
        ],
        weaknesses: [
            "/images/hero_portraits/doomfist-portrait.png",
            "/images/hero_portraits/winston-portrait.png",
            "/images/hero_portraits/symmetra-portrait.png",
        ]
    },
    {
        name: "Winston",
        role: "Dive Tank",
        portrait_img: "/images/hero_portraits/winston-portrait.png",
        grid_img: "/images/hero-icons/winston-icon.png",
        counters: [
            "/images/hero_portraits/sigma-portrait.png",
            "/images/hero_portraits/d.va-portrait.png",
            "/images/hero_portraits/genji-portrait.png",
        ],
        weaknesses: [
            "/images/hero_portraits/reinhardt-portrait.png",
            "/images/hero_portraits/reaper-portrait.png",
            "/images/hero_portraits/brigitte-portrait.png",
        ]
    },
    {
        name: "Wrecking Ball",
        role: "Dive Tank",
        portrait_img: "/images/hero_portraits/wrecking-ball-portrait.png",
        grid_img: "/images/hero-icons/wrecking-ball-icon.png",
        counters: [
            "/images/hero_portraits/sigma-portrait.png",
            "/images/hero_portraits/d.va-portrait.png",
            "/images/hero_portraits/widowmaker-portrait.png",
        ],
        weaknesses: [
            "/images/hero_portraits/roadhog-portrait.png",
            "/images/hero_portraits/sombra-portrait.png",
            "/images/hero_portraits/junkrat-portrait.png",
        ]
    },
    {
        name: "Zarya",
        role: "Brawl Tank",
        portrait_img: "/images/hero_portraits/zarya-portrait.png",
        grid_img: "/images/hero-icons/zarya-icon.png",
        counters: [
            "/images/hero_portraits/d.va-portrait.png",
            "/images/hero_portraits/mauga-portrait.png",
            "/images/hero_portraits/orisa-portrait.png",
        ],
        weaknesses: [
            "/images/hero_portraits/reinhardt-portrait.png",
            "/images/hero_portraits/bastion-portrait.png",
            "/images/hero_portraits/ramattra-portrait.png",
        ]
    },
    {
        name: "Ashe",
        role: "Poke Damage",
        portrait_img: "/images/hero_portraits/ashe-portrait.png",
        grid_img: "/images/hero-icons/ashe-icon.png",
        counters: [
            "/images/hero_portraits/pharah-portrait.png",
            "/images/hero_portraits/echo-portrait.png",
            "/images/hero_portraits/mercy-portrait.png",
        ],
        weaknesses: [
            "/images/hero_portraits/widowmaker-portrait.png",
            "/images/hero_portraits/tracer-portrait.png",
            "/images/hero_portraits/genji-portrait.png",
        ]
    },
    {
        name: "Bastion",
        role: "Poke Damage",
        portrait_img: "/images/hero_portraits/bastion-portrait.png",
        grid_img: "/images/hero-icons/bastion-icon.png",
        counters: [
            "/images/hero_portraits/zarya-portrait.png",
            "/images/hero_portraits/junkerqueen-portrait.png",
            "/images/hero_portraits/reinhardt-portrait.png",
        ],
        weaknesses: [
            "/images/hero_portraits/sigma-portrait.png",
            "/images/hero_portraits/genji-portrait.png",
            "/images/hero_portraits/tracer-portrait.png",
        ]
    },
    {
        name: "Cassidy",
        role: "Brawl Damage",
        portrait_img: "/images/hero_portraits/cassidy-portrait.png",
        grid_img: "/images/hero-icons/cassidy-icon.png",
        counters: [
            "/images/hero_portraits/pharah-portrait.png",
            "/images/hero_portraits/tracer-portrait.png",
            "/images/hero_portraits/wrecking-ball-portrait.png",
        ],
        weaknesses: [
            "/images/hero_portraits/soldier-76-portrait.png",
            "/images/hero_portraits/ashe-portrait.png",
            "/images/hero_portraits/reaper-portrait.png",
        ]
    },
    {
        name: "Echo",
        role: "Poke Damage",
        portrait_img: "/images/hero_portraits/echo-portrait.png",
        grid_img: "/images/hero-icons/echo-icon.png",
        counters: [
            "/images/hero_portraits/bastion-portrait.png",
            "/images/hero_portraits/reinhardt-portrait.png",
            "/images/hero_portraits/junkrat-portrait.png",
        ],
        weaknesses: [
            "/images/hero_portraits/ashe-portrait.png",
            "/images/hero_portraits/cassidy-portrait.png",
            "/images/hero_portraits/soldier-76-portrait.png",
        ]
    },
    {
        name: "Genji",
        role: "Dive Damage",
        portrait_img: "/images/hero_portraits/genji-portrait.png",
        grid_img: "/images/hero-icons/genji-icon.png",
        counters: [
            "/images/hero_portraits/bastion-portrait.png",
            "/images/hero_portraits/widowmaker-portrait.png",
            "/images/hero_portraits/hanzo-portrait.png",
        ],
        weaknesses: [
            "/images/hero_portraits/winston-portrait.png",
            "/images/hero_portraits/pharah-portrait.png",
            "/images/hero_portraits/mei-portrait.png",
        ]
    },
    {
        name: "Hanzo",
        role: "Poke Damage",
        portrait_img: "/images/hero_portraits/hanzo-portrait.png",
        grid_img: "/images/hero-icons/hanzo-icon.png",
        counters: [
            "/images/hero_portraits/sombra-portrait.png",
            "/images/hero_portraits/torbjorn-portrait.png",
            "/images/hero_portraits/ashe-portrait.png",
        ],
        weaknesses: [
            "/images/hero_portraits/pharah-portrait.png",
            "/images/hero_portraits/sojourn-portrait.png",
            "/images/hero_portraits/soldier-76-portrait.png",
        ]
    },
    {
        name: "Junkrat",
        role: "Brawl/Dive Damage",
        portrait_img: "/images/hero_portraits/junkrat-portrait.png",
        grid_img: "/images/hero-icons/junkrat-icon.png",
        counters: [
            "/images/hero_portraits/reinhardt-portrait.png",
            "/images/hero_portraits/wrecking-ball-portrait.png",
            "/images/hero_portraits/widowmaker-portraiRTDt.png",
        ],
        weaknesses: [
            "/images/hero_portraits/pharah-portrait.png",
            "/images/hero_portraits/echo-portrait.png",
            "/images/hero_portraits/hanzo-portrait.png",
        ]
    },
    {
        name: "Mei",
        role: "Brawl Damage",
        portrait_img: "/images/hero_portraits/mei-portrait.png",
        grid_img: "/images/hero-icons/mei-icon.png",
        counters: [
            "/images/hero_portraits/d.va-portrait.png",
            "/images/hero_portraits/zarya-portrait.png",
            "/images/hero_portraits/genji-portrait.png",
        ],
        weaknesses: [
            "/images/hero_portraits/cassidy-portrait.png",
            "/images/hero_portraits/sojourn-portrait.png",
            "/images/hero_portraits/kiriko-portrait.png",
        ]
    },
    {
        name: "Pharah",
        role: "Poke Damage",
        portrait_img: "/images/hero_portraits/pharah-portrait.png",
        grid_img: "/images/hero-icons/pharah-icon.png",
        counters: [
            "/images/hero_portraits/reinhardt-portrait.png",
            "/images/hero_portraits/torbjorn-portrait.png",
            "/images/hero_portraits/junkrat-portrait.png",
        ],
        weaknesses: [
            "/images/hero_portraits/soldier76-portrait.png",
            "/images/hero_portraits/ashe-portrait.png",
            "/images/hero_portraits/cassidy-portrait.png",
        ]
    },
    {
        name: "Reaper",
        role: "Brawl Damage",
        portrait_img: "/images/hero_portraits/reaper-portrait.png",
        grid_img: "/images/hero-icons/reaper-icon.png",
        counters: [
            "/images/hero_portraits/winston-portrait.png",
            "/images/hero_portraits/bastion-portrait.png",
            "/images/hero_portraits/ana-portrait.png",
        ],
        weaknesses: [
            "/images/hero_portraits/cassidy-portrait.png",
            "/images/hero_portraits/ashe-portrait.png",
            "/images/hero_portraits/echo-portrait.png",
        ]
    },
    {
        name: "Sojourn",
        role: "Poke Damage",
        portrait_img: "/images/hero_portraits/sojourn-portrait.png",
        grid_img: "/images/hero-icons/sojourn-icon.png",
        counters: [
            "/images/hero_portraits/pharah-portrait.png",
            "/images/hero_portraits/cassidy-portrait.png",
            "/images/hero_portraits/hanzo-portrait.png",
        ],
        weaknesses: [
            "/images/hero_portraits/winston-portrait.png",
            "/images/hero_portraits/zarya-portrait.png",
            "/images/hero_portraits/lucio-portrait.png",
        ]
    },
    {
        name: "Soldier: 76",
        role: "Poke Damage",
        portrait_img: "/images/hero_portraits/soldier76-portrait.png",
        grid_img: "/images/hero-icons/soldier76-icon.png",
        counters: [
            "/images/hero_portraits/pharah-portrait.png",
            "/images/hero_portraits/echo-portrait.png",
            "/images/hero_portraits/ana-portrait.png",
        ],
        weaknesses: [
            "/images/hero_portraits/roadhog-portrait.png",
            "/images/hero_portraits/genji-portrait.png",
            "/images/hero_portraits/d.va-portrait.png",
        ]
    },
    {
        name: "Sombra",
        role: "Dive Damage",
        portrait_img: "/images/hero_portraits/sombra-portrait.png",
        grid_img: "/images/hero-icons/sombra-icon.png",
        counters: [
            "/images/hero_portraits/doomfist-portrait.png",
            "/images/hero_portraits/wrecking-ball-portrait.png",
            "/images/hero_portraits/ana-portrait.png",
        ],
        weaknesses: [
            "/images/hero_portraits/hanzo-portrait.png",
            "/images/hero_portraits/winston-portrait.png",
            "/images/hero_portraits/d.va-portrait.png",
        ]
    },
    {
        name: "Symmetra",
        role: "Brawl Damage",
        portrait_img: "/images/hero_portraits/symmetra-portrait.png",
        grid_img: "/images/hero-icons/symmetra-icon.png",
        counters: [
            "/images/hero_portraits/reinhardt-portrait.png",
            "/images/hero_portraits/d.va-portrait.png",
            "/images/hero_portraits/sigma-portrait.png",
        ],
        weaknesses: [
            "/images/hero_portraits/pharah-portrait.png",
            "/images/hero_portraits/junkrat-portrait.png",
            "/images/hero_portraits/mei-portrait.png",
        ]
    },
    {
        name: "Torbjorn",
        role: "Poke Damage",
        portrait_img: "/images/hero_portraits/torbjorn-portrait.png",
        grid_img: "/images/hero-icons/torbjorn-icon.png",
        counters: [
            "/images/hero_portraits/tracer-portrait.png",
            "/images/hero_portraits/sombra-portrait.png",
            "/images/hero_portraits/lucio-portrait.png",
        ],
        weaknesses: [
            "/images/hero_portraits/pharah-portrait.png",
            "/images/hero_portraits/widowmaker-portrait.png",
            "/images/hero_portraits/ana-portrait.png",
        ]
    },
    {
        name: "Tracer",
        role: "Dive Damage",
        portrait_img: "/images/hero_portraits/tracer-portrait.png",
        grid_img: "/images/hero-icons/tracer-icon.png",
        counters: [
            "/images/hero_portraits/widowmaker-portrait.png",
            "/images/hero_portraits/bastion-portrait.png",
            "/images/hero_portraits/cassidy-portrait.png",
        ],
        weaknesses: [
            "/images/hero_portraits/torbjorn-portrait.png",
            "/images/hero_portraits/hanzo-portrait.png",
            "/images/hero_portraits/winston-portrait.png",
        ]
    },
    {
        name: "Venture",
        role: "Dive Damage",
        portrait_img: "/images/hero_portraits/venture-portrait.png",
        grid_img: "/images/hero-icons/venture-icon.png",
        counters: [
            "/images/hero_portraits/widowmaker-portrait.png",
            "/images/hero_portraits/ashe-portrait.png",
            "/images/hero_portraits/ana-portrait.png",
        ],
        weaknesses: [
            "/images/hero_portraits/pharah-portrait.png",
            "/images/hero_portraits/d.va-portrait.png",
            "/images/hero_portraits/baptiste-portrait.png",
        ]
    },
    {
        name: "Widowmaker",
        role: "Poke Damage",
        portrait_img: "/images/hero_portraits/widowmaker-portrait.png",
        grid_img: "/images/hero-icons/widowmaker-icon.png",
        counters: [
            "/images/hero_portraits/pharah-portrait.png",
            "/images/hero_portraits/ana-portrait.png",
            "/images/hero_portraits/mercy-portrait.png",
        ],
        weaknesses: [
            "/images/hero_portraits/widowmaker-portrait.png",
            "/images/hero_portraits/genji-portrait.png",
            "/images/hero_portraits/tracer-portrait.png",
        ]
    },
    {
        name: "Ana",
        role: "Flex Support",
        portrait_img: "/images/hero_portraits/ana-portrait.png",
        grid_img: "/images/hero-icons/ana-icon.png",
        counters: [
            "/images/hero_portraits/roadhog-portrait.png",
            "/images/hero_portraits/mauga-portrait.png",
            "/images/hero_portraits/doomfist-portrait.png",
        ],
        weaknesses: [
            "/images/hero_portraits/d.va-portrait.png",
            "/images/hero_portraits/widowmaker-portrait.png",
            "/images/hero_portraits/tracer-portrait.png",
        ]
    },
    {
        name: "Baptiste",
        role: "Flex Support",
        portrait_img: "/images/hero_portraits/baptiste-portrait.png",
        grid_img: "/images/hero-icons/baptiste-icon.png",
        counters: [
            "/images/hero_portraits/venture-portrait.png",
            "/images/hero_portraits/pharah-portrait.png",
            "/images/hero_portraits/echo-portrait.png",
        ],
        weaknesses: [
            "/images/hero_portraits/d.va-portrait.png",
            "/images/hero_portraits/genji-portrait.png",
            "/images/hero_portraits/hanzo-portrait.png",
        ]
    },
    {
        name: "Brigitte",
        role: "Main Support",
        portrait_img: "/images/hero_portraits/brigitte-portrait.png",
        grid_img: "/images/hero-icons/brigitte-icon.png",
        counters: [
            "/images/hero_portraits/reinhardt-portrait.png",
            "/images/hero_portraits/d.va-portrait.png",
            "/images/hero_portraits/sombra-portrait.png",
        ],
        weaknesses: [
            "/images/hero_portraits/bastion-portrait.png",
            "/images/hero_portraits/pharah-portrait.png",
            "/images/hero_portraits/ramattra-portrait.png",
        ]
    },
    {
        name: "Illari",
        role: "Flex Support",
        portrait_img: "/images/hero_portraits/illari-portrait.png",
        grid_img: "/images/hero-icons/illari-icon.png",
        counters: [
            "/images/hero_portraits/pharah-portrait.png",
            "/images/hero_portraits/echo-portrait.png",
            "/images/hero_portraits/mercy-portrait.png",
        ],
        weaknesses: [
            "/images/hero_portraits/winston-portrait.png",
            "/images/hero_portraits/d.va-portrait.png",
            "/images/hero_portraits/doomfist-portrait.png",
        ]
    },
    {
        name: "Kiriko",
        role: "Flex Support",
        portrait_img: "/images/hero_portraits/kiriko-portrait.png",
        grid_img: "/images/hero-icons/kiriko-icon.png",
        counters: [
            "/images/hero_portraits/junkerqueen-portrait.png",
            "/images/hero_portraits/ana-portrait.png",
            "/images/hero_portraits/mei-portrait.png",
        ],
        weaknesses: [
            "/images/hero_portraits/winston-portrait.png",
            "/images/hero_portraits/d.va-portrait.png",
            "/images/hero_portraits/sombra-portrait.png",
        ]
    },
    {
        name: "Lifeweaver",
        role: "Flex Support",
        portrait_img: "/images/hero_portraits/lifeweaver-portrait.png",
        grid_img: "/images/hero-icons/lifeweaver-icon.png",
        counters: [
            "/images/hero_portraits/orisa-portrait.png",
            "/images/hero_portraits/zarya-portrait.png",
        ],
        weaknesses: [
            "/images/hero_portraits/d.va-portrait.png",
            "/images/hero_portraits/widowmaker-portrait.png",
            "/images/hero_portraits/winston-portrait.png",
        ]
    },
    {
        name: "Lucio",
        role: "Main Support",
        portrait_img: "/images/hero_portraits/lucio-portrait.png",
        grid_img: "/images/hero-icons/lucio-icon.png",
        counters: [
            "/images/hero_portraits/widowmaker-portrait.png",
            "/images/hero_portraits/sojourn-portrait.png",
        ],
        weaknesses: [
            "/images/hero_portraits/torbjorn-portrait.png",
            "/images/hero_portraits/pharah-portrait.png",
            "/images/hero_portraits/moira-portrait.png",
        ]
    },
    {
        name: "Mercy",
        role: "Main Support",
        portrait_img: "/images/hero_portraits/mercy-portrait.png",
        grid_img: "/images/hero-icons/mercy-icon.png",
        counters: [],
        weaknesses: [
            "/images/hero_portraits/d.va-portrait.png",
            "/images/hero_portraits/widowmaker-portrait.png",
            "/images/hero_portraits/genji-portrait.png",
        ]
    },
    {
        name: "Moira",
        role: "Flex Support",
        portrait_img: "/images/hero_portraits/moira-portrait.png",
        grid_img: "/images/hero-icons/moira-icon.png",
        counters: [
            "/images/hero_portraits/genji-portrait.png",
            "/images/hero_portraits/tracer-portrait.png",
        ],
        weaknesses: [
            "/images/hero_portraits/d.va-portrait.png",
            "/images/hero_portraits/widowmaker-portrait.png",
            "/images/hero_portraits/winston-portrait.png",
        ]
    },
    {
        name: "Zenyatta",
        role: "Flex Support",
        portrait_img: "/images/hero_portraits/zenyatta-portrait.png",
        grid_img: "/images/hero-icons/zenyatta-icon.png",
        counters: [
            "/images/hero_portraits/reinhardt-portrait.png",
            "/images/hero_portraits/mauga-portrait.png",
        ],
        weaknesses: [
            "/images/hero_portraits/d.va-portrait.png",
            "/images/hero_portraits/widowmaker-portrait.png",
            "/images/hero_portraits/tracer-portrait.png",
        ]
    },
];

function createHeroGrid() {
    const tankGrid = document.getElementById('tank-grid');
    const damageGrid = document.getElementById('damage-grid');
    const supportGrid = document.getElementById('support-grid');
    
    heroes.forEach((hero, index) => {
        const gridItem = document.createElement('div');
        gridItem.className = 'grid-item';
        gridItem.addEventListener('click', () => showHeroDetails(index));
        
        const img = document.createElement('img');
        img.src = hero.grid_img;
        img.alt = hero.name;
        gridItem.appendChild(img);

        switch(true) {
            case hero.role.includes('Tank'):
                tankGrid.appendChild(gridItem);
                break;
            case hero.role.includes('Damage'):
                damageGrid.appendChild(gridItem);
                break;
            case hero.role.includes('Support'):
                supportGrid.appendChild(gridItem);
                break;
        }
    });
}

function showHeroDetails(index) {
    const hero = heroes[index];
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
    createHeroGrid();
});
