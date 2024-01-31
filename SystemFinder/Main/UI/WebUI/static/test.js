let selectedGames = [];

function toggleGameSelection(game) {
    const index = selectedGames.indexOf(game);
    if (index > -1) {
        selectedGames.splice(index, 1);
    } else {
        selectedGames.push(game);
    }
    updateSelectedGamesDisplay();
    highlightSelectedGames();
}

function updateSelectedGamesDisplay() {
    const displayText = selectedGames.length > 0 ? selectedGames.join(', ') : 'Hiçbiri';
    document.getElementById('selected-games').innerText = 'Seçilen Oyunlar: ' + displayText;
}

function highlightSelectedGames() {
    document.querySelectorAll('#game-cards .game-card').forEach(card => {
        const game = card.textContent;
        if (selectedGames.includes(game)) {
            card.classList.add('selected');
        } else {
            card.classList.remove('selected');
        }
    });
}

function searchGames() {
    // Ajax isteği ve sonuçların gösterilmesi
}
