//import './style.css'

class Node {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.hit = false;
        this.hasShip = false;
        this.ship = null;
    }

    setShip(ship) {
        this.hasShip = true;
        this.ship = ship;

    }

    hasShip() {
        return this.hasShip;
    }
}

class Ship {
    constructor(length, type, owner) {
        this.length = length;
        this.type = type;
        this.isSunk = false;
        this.numOfHits = 0;
        this.owner = owner;
        this.orientation = null;
    }

    hit() {
        this.numOfHits++;
        if (this.numOfHits === this.length) {
            this.isSunk = true;
        }
    }

    isSunk() {
        return this.isSunk;
    }

    setOrientation(orientation) {
        this.orientation = orientation;
    }

    getOrientation() {
        return this.orientation;
    }

    getOwner() {
        return this.owner;
    }
}

class Gameboard {
    constructor() {
        this.nodeList = [];
        this.shipList = [];
    }

    createGameboard() {
        let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                this.addNode(i + 1, alphabet[j]);
            }
        }
    }

    addNode(x, y) {
        let node = new Node(x, y);
        this.nodeList.push(node);
    }

    addShip(x, y, length, type) {
        let ship = new Ship(length, type);
        this.shipList.push(ship);
        let node = this.findNodeInList(x, y);
        node.setShip(ship);
    }

    printNodes() {
        this.nodeList.forEach((node) => {
            console.log(`Node (${node.x}, ${node.y})`);
        });
    }

    findNodeInList(x, y) {
        let node = this.nodeList.find((node) => {
            return node.x === x && node.y === y;
        });
        if (node === undefined) {
            return null;
        }

        return node;
    }

    recieveAttack(x, y) {
        if (this.findNodeInList(x, y) === null) {
            return null;
        }
        let node = this.findNodeInList(x, y);
        if (node.hasShip) {
            node.hit = true;
            node.ship.hit();
            return true;
        } else {
            node.hit = true;
            return false;
        }
    }
}

class Player {
    constructor(name) {
        this.name = name;
        this.gameboard = new Gameboard();
        this.shipList= [];
    }

    getPlayerName() {
        return this.name;
    }
    printShips() {
        this.shipList.forEach((ship) => {
            console.log(`Ship: ${ship.type}, Length: ${ship.length}, Owner: ${ship.getOwner().getPlayerName()}`);
        });
    }

    attack(x, y, enemyGameboard) {
        enemyGameboard.recieveAttack(x, y);
    }

    populateShipList() {
        this.shipList.push(new Ship(5, 'Carrier', this));
        this.shipList.push(new Ship(2, 'Battleship', this));
        this.shipList.push(new Ship(3, 'Destroyer', this));
        this.shipList.push(new Ship(4, 'Submarine', this));
        this.shipList.push(new Ship(2, 'Patrol Boat', this));
    }

    placeShip(x, y, length, type, orientation) {
        let ship = this.shipList.find((ship) => {
            return ship.type === type;
        });
        if (ship === undefined) {
            return null;
        }
        this.gameboard.addShip(x, y, length, type);
        ship.setOrientation(orientation);
    }


}

class Computer extends Player {
    constructor(name) {
        super();
        this.name = name;
        this.gameboard = new Gameboard();
    }

    //todo: implement random ship placement
    //todo: implement random attack

}

let player = new Player('Player 1');
player.populateShipList();
player.printShips();

let computer = new Computer('Computer');
computer.populateShipList();
computer.printShips();


// let gameboard = new Gameboard();
//
// gameboard.createGameboard();
// gameboard.printNodes();

module.exports = {Node, Ship, Gameboard, Player, Computer};