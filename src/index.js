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
    constructor(length, type) {
        this.length = length;
        this.type = type;
        this.isSunk = false;
        this.numOfHits = 0;
        this.owner = null;
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
}

class Gameboard {
    constructor() {
        this.nodeList = [];
        this.shipList = [];
    }
createGameboard() {
        let alphabet=['A','B','C','D','E','F','G','H','I','J']
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10;j++) {
                this.addNode(i + 1,alphabet[j]);
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
        if(this.findNodeInList(x, y) === null) {
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

class Player{}

// let gameboard = new Gameboard();
//
// gameboard.createGameboard();
// gameboard.printNodes();

module.exports = {Node, Ship, Gameboard, Player};