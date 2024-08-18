let heroData = [];

const metaCompositions = {
    brawl: ["Reinhardt", "Mei", "Reaper", "Lucio", "Moira"],
    poke: ["Sigma", "Widowmaker", "Ashe", "Ana", "Baptiste"],
    dive: ["D.Va", "Tracer", "Genji", "Lucio", "Kiriko"]
};
// Fetch and store hero data from JSON
function fetchHeroData() {
    return fetch('hero_data.json')
        .then(response => response.json())
        .then(data => {
            heroData = data;
            populateHeroOptions();
        })
        .catch(error => console.error('Error fetching hero data:', error));
}

// Populate the hero select options dynamically
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


// Determine the predominant playstyle and suggest a counter team
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

    // Determine the predominant playstyle
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

    // Suggest the counter team based on the predominant playstyle
    const suggestedTeam = metaCompositions[predominantPlaystyle];
    displaySuggestedTeam(suggestedTeam);
}

// Display the suggested team on the page
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

    // Append the rows to the main container
    suggestedTeamDiv.appendChild(tankRow);
    suggestedTeamDiv.appendChild(damageRow);
    suggestedTeamDiv.appendChild(supportRow);
}


// Handle the form submission to suggest a team
document.getElementById('submit-button').addEventListener('click', function () {
    const enemyTeam = [
        document.getElementById('enemy1').value,
        document.getElementById('enemy2').value,
        document.getElementById('enemy3').value,
        document.getElementById('enemy4').value,
        document.getElementById('enemy5').value,
    ].filter(Boolean); // Filter out empty selections

    determineAndSuggestTeam(enemyTeam);
});

// Initialize the page
document.addEventListener('DOMContentLoaded', fetchHeroData);