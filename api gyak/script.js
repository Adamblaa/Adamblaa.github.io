async function csapatok() {
    try {
        const response = await fetch('https://api.squiggle.com.au/?q=teams');
        const data = await response.json();
        const teamContainer = document.getElementById('csapatok');
        teamContainer.innerHTML = '';
        
        data.teams.forEach(csapat => {
            const teamDiv = document.createElement('div');
            teamDiv.classList.add('csapat');
            teamDiv.innerHTML = `
                <h3>${csapat.name}</h3>
                <p>Rövidítés: ${csapat.abbrev}</p>
            `;
            teamContainer.appendChild(teamDiv);
        });
    } catch (error) {
        console.error('Hiba történt a csapatok betöltésekor:', error);
    }
}