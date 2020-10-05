import {renderGame} from './utils.js';
import {gamesArray} from './games.js';


const gamesList = document.getElementById('games-list');

for (let i = 0; i < gamesArray.length; i++) {
    let game = gamesArray[i];

    gamesList.appendChild(renderGame(game));
}

