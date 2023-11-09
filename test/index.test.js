import {Node} from "../src";
import {Ship} from "../src";
import {Gameboard} from "../src";
import {Player} from "../src";

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
    testBoard.addShip(1, 'A', 5, 'Carrier');
    testBoard.recieveAttack(1, 'A');
    expect(testBoard.findNodeInList(1, 'A').hit).toBe(true);

});