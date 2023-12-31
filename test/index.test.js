import {Node} from "../src";
import {Ship} from "../src";
import {Gameboard} from "../src";
import {Player} from "../src";
import {Computer} from "../src";

test('create node', () => {
        let node = new Node(1, 'A');
        expect(node.x).toBe(1);
        expect(node.y).toBe('A');
        expect(node.hit).toBe(false);
        expect(node.hasShip).toBe(false);
        expect(node.ship).toBe(null);
    }
);

test('set ship', () => {
        let node = new Node(1, 'A');
        let ship = new Ship(5, 'Carrier');
        node.setShip(ship);
        expect(node.hasShip).toBe(true);
        expect(node.ship).toBe(ship);
    }
);

test('ship hit', () => {
    let testBoard = new Gameboard();
    testBoard.createGameboard();
    testBoard.addShipToNode(1, 'A', 5, 'Carrier');
    testBoard.receiveAttack(1, 'A');
    expect(testBoard.findNodeInList(1, 'A').hit).toBe(true);

});

test('player hit computer', () => {
    let player1 = new Player('Player 1');
    let computer = new Computer('Computer');
    player1.populateShipList();
    computer.populateShipList();
    player1.gameboard.createGameboard();
    computer.gameboard.createGameboard();
});


test('Cell validity check fail',()=>{
    let testBoard= new Gameboard()
    testBoard.createGameboard()
   expect( testBoard.isCellValid(13,'A')).toBe(false)

})
test('Cell validity check pass',()=>{
    let testBoard= new Gameboard()
    testBoard.createGameboard()
   expect( testBoard.isCellValid(1,'A')).toBe(true)

})

test('Vertical Orientation Check pass',()=>{

let player = new Player('Player 1');
player.populateShipList();
let gameboard = new Gameboard();
gameboard.createGameboard();
expect(gameboard.isOrientationValid(10, 'E', player.shipList[0], 'Vertical')).toBe(true)
})

test('Vertical Orientation Check fail',()=>{

let player = new Player('Player 1');
player.populateShipList();
let gameboard = new Gameboard();
gameboard.createGameboard();
expect(gameboard.isOrientationValid(10, 'J', player.shipList[0], 'Vertical')).toBe(false)
})
test('Horizontal Orientation Check fail',()=>{

let player = new Player('Player 1');
player.populateShipList();
let gameboard = new Gameboard();
gameboard.createGameboard();
expect(gameboard.isOrientationValid(10, 'J', player.shipList[0], 'Horizontal')).toBe(false)
})
test('Horizontal Orientation Check pass',()=>{

let player = new Player('Player 1');
player.populateShipList();
let gameboard = new Gameboard();
gameboard.createGameboard();
expect(gameboard.isOrientationValid(1, 'J', player.shipList[0], 'Horizontal')).toBe(true)
})