import {
    renderGame
} from '../apps/utils.js'


const test = QUnit.test;

test('time to test a function', (expect) => {
    const game = {
        id: 'csgo',
        name: 'Counter-Strike: Global Offensive',
        developer: 'Valve Corporation',
        image: 'csgo.png',
        description: 'a competitive first-person shooter game',
        category: 'fps',
        price: 15.00,
        onSale: false,
    }

    const expected = '<li class="game"><p class="title">Counter-Strike: Global Offensive</p><p class="developer">Valve Corporation</p><img class="cover" src="../assets/csgo.png"><p class="price">$15.00</p><button value="csgo">Add to cart</button></li>'

    const actual = renderGame(game);

    expect.equal(actual.outerHTML, expected)
});
