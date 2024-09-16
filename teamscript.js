let heroData = [];


const metaCompositions = {
    // listed meta compositions as of 09/15/2024
    // due to tank importance, team comp based on tank if specified
    // else, look for majority hero classification

    brawl: ["Reinhardt", "Mei", "Reaper", "Lucio", "Moira"],
    poke: ["Sigma", "Widowmaker", "Ashe", "Ana", "Baptiste"],
    dive: ["D.Va", "Tracer", "Genji", "Lucio", "Kiriko"],

    brawlvdva: ["Zarya", "Mei", "Symmetra", "Brigitte", "Kiriko"],
    brawlvdoom: ["Roadhog", "Sombra", "Cassidy", "Brigitte", "Ana"],
    brawlvmonke: ["Reinhardt", "Reaper", "Bastion", "Brigitte", "Ana"],
    brawlvball: ["Roadhog", "Sombra", "Junkrat", "Brigitte", "Ana"],

    pokevqueen: ["Orisa", "Bastion", "Mei", "Ana", "Kiriko"],
    pokevmaui: ["Zarya", "Bastion", "Sojourn", "Ana", "Zenyatta"],
    pokevram: ["Orisa", "Tracer", "Bastion", "Ana", "Kiriko"],
    pokevrein: ["Ramattra", "Symmetra", "Bastion", "Lucio", "Kiriko"],
    pokevhog: ["Mauga", "Reaper", "Pharah", "Ana", "Baptiste"],
    pokevzarya: ["Reinhardt", "Bastion", "Pharah", "Lucio", "Kiriko"],

    divevsig: ["Doomfist", "Sombra", "Symmetra", "Ana", "Kiriko"],
    divevorisa: ["Winston", "Tracer", "Sombra", "Ana", "Kiriko"],

};
function fetchHeroData() {
    return fetch('hero_data.json')
        .then(response => response.json())
        .then(data => {
            heroData = data;
            populateHeroOptions();
        })
        .catch(error => console.error('Error fetching hero data:', error));
}

function populateHeroOptions() {
    const tankSelect = document.getElementById('enemy1');
    const damageSelects = [document.getElementById('enemy2'), document.getElementById('enemy3')];
    const supportSelects = [document.getElementById('enemy4'), document.getElementById('enemy5')];

    heroData.forEach(hero => {
        const option = document.createElement('option');
        option.value = hero["Hero Name"];
        option.textContent = hero["Hero Name"];

        if (hero["Role"].includes("Tank")) {
            tankSelect.appendChild(option);
        } else if (hero["Role"].includes("Damage")) {
            damageSelects.forEach(select => select.appendChild(option.cloneNode(true)));
        } else if (hero["Role"].includes("Support")) {
            supportSelects.forEach(select => select.appendChild(option.cloneNode(true)));
        }
    });
}

/*
function determineAndSuggestTeam(enemyTeam) {
    let playstyleCounts = { brawl: 0, poke: 0, dive: 0 };

    // Count the occurrences of each playstyle
    enemyTeam.forEach(heroName => {
        const hero = heroData.find(h => h["Hero Name"] === heroName);
        if (hero) {
            const role = hero["Role"];
            if (role.includes("Brawl")) {playstyleCounts.brawl++;}
            if (role.includes("Poke")) {playstyleCounts.poke++;}
            if (role.includes("Dive")) {playstyleCounts.dive++;}
        }
    });

    let predominantPlaystyle = "brawl";
    if (playstyleCounts.poke > playstyleCounts.brawl && playstyleCounts.poke > playstyleCounts.dive) {
        predominantPlaystyle = "dive";
    } else if (playstyleCounts.dive > playstyleCounts.brawl && playstyleCounts.dive > playstyleCounts.poke) {
        predominantPlaystyle = "brawl";
    } else if (playstyleCounts.brawl > playstyleCounts.poke && playstyleCounts.brawl > playstyleCounts.dive) {
        predominantPlaystyle = "poke";
    }

    console.log(playstyleCounts.brawl)
    console.log(playstyleCounts.poke)
    console.log(playstyleCounts.dive)

    const suggestedTeam = metaCompositions[predominantPlaystyle];
    displaySuggestedTeam(suggestedTeam);
}
*/

function determineAndSuggestTeam(enemyTeam) {
    let playstyleCounts = { brawl: 0, poke: 0, dive: 0 };
    let tankSpecified = false;

    // counts for majority team comp class, in case of no tank
    enemyTeam.forEach(heroName => {
        const hero = heroData.find(h => h["Hero Name"] === heroName);
        if (hero) {
            const role = hero["Role"];
            if (role.includes("Brawl")) { playstyleCounts.brawl++; }
            if (role.includes("Poke")) { playstyleCounts.poke++; }
            if (role.includes("Dive")) { playstyleCounts.dive++; }
            if (role.includes("Tank")) { tankSpecified = true; }
        }
    });

    console.log('Playstyle counts:', playstyleCounts);

    if (tankSpecified) {
        const tankHero = enemyTeam.find(name => {
            const hero = heroData.find(h => h["Hero Name"] === name);
            return hero && hero["Role"].includes("Tank");
        });

        let suggestedTeam;

        // determine tank specific comp
        // couldve used switch statement i know
        if (tankHero === "D.Va") {
            suggestedTeam = metaCompositions.brawlvdva;
        } else if (tankHero === "Doomfist") {
            suggestedTeam = metaCompositions.brawlvdoom;
        } else if (tankHero === "Winston") {
            suggestedTeam = metaCompositions.brawlvmonke;
        } else if (tankHero === "Wrecking Ball") {
            suggestedTeam = metaCompositions.brawlvball;
        } else if (tankHero === "Orisa") {
            suggestedTeam = metaCompositions.divevorisa;
        } else if (tankHero === "Zarya") {
            suggestedTeam = metaCompositions.pokevzarya;
        } else if (tankHero === "Ramattra") {
            suggestedTeam = metaCompositions.pokevram;
        } else if (tankHero === "Roadhog") {
            suggestedTeam = metaCompositions.pokevhog;
        } else if (tankHero === "Sigma") {
            suggestedTeam = metaCompositions.divevsig;
        } else if (tankHero === "Reinhardt") {
            suggestedTeam = metaCompositions.pokevrein;
        } else if (tankHero === "Junker Queen") {
            suggestedTeam = metaCompositions.pokevqueen;
        } else if (tankHero === "Mauga") {
            suggestedTeam = metaCompositions.pokevmaui;
        }
        displaySuggestedTeam(suggestedTeam);
    } else {
        let predominantPlaystyle = "dive"; //defaults to dive in case of no heroes, as dive is most meta
        if (playstyleCounts.poke > playstyleCounts.brawl && playstyleCounts.poke > playstyleCounts.dive) {
            predominantPlaystyle = "dive";
        } else if (playstyleCounts.dive > playstyleCounts.brawl && playstyleCounts.dive > playstyleCounts.poke) {
            predominantPlaystyle = "brawl";
        } else if (playstyleCounts.brawl > playstyleCounts.poke && playstyleCounts.brawl > playstyleCounts.dive) {
            predominantPlaystyle = "poke";
        }

        const suggestedTeam = metaCompositions[predominantPlaystyle];
        displaySuggestedTeam(suggestedTeam);
    }
}

function displaySuggestedTeam(team) {
    console.log('Suggested team:', team);
    // Update your UI with the suggested team here
}



function displaySuggestedTeam(suggestedTeam) {
    const suggestedTeamDiv = document.getElementById('suggested-team-heroes');
    suggestedTeamDiv.innerHTML = '';

    const tankRow = document.createElement('div');
    const damageRow = document.createElement('div');
    const supportRow = document.createElement('div');

    tankRow.className = 'role-row';
    damageRow.className = 'role-row';
    supportRow.className = 'role-row';

    suggestedTeam.forEach(heroName => {
        const hero = heroData.find(h => h["Hero Name"] === heroName);
        if (hero) {
            const heroDiv = document.createElement('div');
            heroDiv.className = 'hero-card';

            const img = document.createElement('img');
            img.src = hero["Icon Img"];
            img.alt = hero["Hero Name"];
            heroDiv.appendChild(img);

            const heroNameElem = document.createElement('p');
            heroNameElem.innerText = hero["Hero Name"];
            heroDiv.appendChild(heroNameElem);

            if (hero["Role"].includes("Tank")) {
                tankRow.appendChild(heroDiv);
            } else if (hero["Role"].includes("Damage")) {
                damageRow.appendChild(heroDiv);
            } else if (hero["Role"].includes("Support")) {
                supportRow.appendChild(heroDiv);
            }
        }
    });

    suggestedTeamDiv.appendChild(tankRow);
    suggestedTeamDiv.appendChild(damageRow);
    suggestedTeamDiv.appendChild(supportRow);
}


document.getElementById('submit-button').addEventListener('click', function () {
    const enemyTeam = [
        document.getElementById('enemy1').value,
        document.getElementById('enemy2').value,
        document.getElementById('enemy3').value,
        document.getElementById('enemy4').value,
        document.getElementById('enemy5').value,
    ].filter(Boolean);

    determineAndSuggestTeam(enemyTeam);
});

document.addEventListener('DOMContentLoaded', fetchHeroData);