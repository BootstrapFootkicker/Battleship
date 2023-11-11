//import './style.css'

class Node {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.hit = false;
        this.hasShip = false;
        this.ship = null;
        this.edges = [];
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
        this.shipCoords = []
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

    getLength() {
        return this.length
    }

    getShipCoords() {
        return this.shipCoords
    }

    addShipCoords(coords) {
        this.shipCoords.push(coords)
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

    isCellValid(x, y) {
        if (this.findNodeInList(x, y) === null) {
            return false
        } else if (this.findNodeInList(x, y).hasShip === true) {
            return false
        } else {
            return true
        }
    }

    isOrientationValid(x, y, ship, orientation) {
        let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
        let alphabetIndex = alphabet.indexOf(y)

        if (orientation === 'Horizontal') {
            for (let i = 0; i < ship.getLength(); i++) {
                if (this.isCellValid(x, y) === false) {

                    return false
                }
                x += 1
            }
            return true
        } else if (orientation === 'Vertical') {
            for (let i = 0; i < ship.getLength(); i++) {
                if (this.isCellValid(x, y) === false) {
                    return false
                }
                alphabetIndex += 1
                y = alphabet[alphabetIndex]
            }
            return true
        }

    }

    setVerticalCoords(x, y, ship) {
        let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
        let alphabetIndex = alphabet.indexOf(y)
        ship.setOrientation('Vertical')
        for (let i = 0; i < ship.getLength(); i++) {
            ship.addShipCoords({'x': x, 'y': y})
            alphabetIndex += 1
            y = alphabet[alphabetIndex]
        }

        ship.shipCoords.forEach((coord) => {
            this.addShipToNode(coord.x, coord.y, ship)
        });
        this.addShipToList(ship)
        return
    }

    setHorizontalCoords(x, y, ship) {
        ship.setOrientation('Horizontal')

        for (let i = 0; i < ship.getLength(); i++) {
            ship.addShipCoords({'x': x, 'y': y})
            x += 1
        }
        ship.shipCoords.forEach((coord) => {
            this.addShipToNode(coord.x, coord.y, ship)


        });

        this.addShipToList(ship)
        return
    }

    addNode(x, y) {
        let node = new Node(x, y);
        this.nodeList.push(node);
    }

    addEdge(node1, node2) {
        node1.edges.push(node2);
        node2.edges.push(node1);
    }

    addShipToNode(x, y, ship) {

        let node = this.findNodeInList(x, y);
        node.setShip(ship);

    }

    addShipToList(ship) {
        this.shipList.push(ship)
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
        this.shipList = [];
    }

    findShip(shipType) {
        let ship = this.shipList.find((ship) => {
            return ship.type === shipType;
        });
        return ship;
    }

    findShipIndex(shipType) {
        let ship = this.shipList.findIndex((ship) => {
            return ship.type === shipType;
        });
        return ship;
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
        this.shipList.push(new Ship(5, 'Carrier', this.name));
        this.shipList.push(new Ship(2, 'Battleship', this.name));
        this.shipList.push(new Ship(3, 'Destroyer', this.name));
        this.shipList.push(new Ship(4, 'Submarine', this.name));
        this.shipList.push(new Ship(2, 'Patrol Boat', this.name));
    }

    placeShip(x, y, ship, orientation) {
        if (this.gameboard.findNodeInList(x, y) === null) {

            return null;
        }
        if (this.gameboard.isOrientationValid(x, y, ship, orientation) && orientation === "Vertical") {
            this.gameboard.setVerticalCoords(x, y, ship)
            let index = this.findShipIndex(ship.type)
            this.shipList.splice(index, 1)


        } else if (this.gameboard.isOrientationValid(x, y, ship, orientation) && orientation === "Horizontal") {
            this.gameboard.setHorizontalCoords(x, y, ship)

            let index = this.findShipIndex(ship.type)
            this.shipList.splice(index, 1)


        } else {
            return null;
        }
    }

}


class Computer extends Player {
    constructor(name) {
        super();
        this.name = name;
        this.gameboard = new Gameboard();
    }

    randomShipPlacement() {
        let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
        let orientations = ['horizontal', 'vertical'];
        let x = Math.floor(Math.random() * 10) + 1;
        let y = alphabet[Math.floor(Math.random() * 10)];

        this.shipList.forEach((ship) => {
            let orientation = orientations[Math.floor(Math.random() * 2)];
            this.placeShip(x, y, ship.length, ship.type, orientation);
        });

    }

    randomAttack(playerGameboard) {
        let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
        let x = Math.floor(Math.random() * 10) + 1;
        let y = alphabet[Math.floor(Math.random() * 10)];

        if (playerGameboard.gameboard.findNodeInList(x, y).hit === true) {
            this.randomAttack(playerGameboard);
        } else {
            this.attack(x, y, playerGameboard.gameboard);
        }
    }

    //todo: implement random ship placement
    //todo: implement random attack

}

let player = new Player('Player 1');
player.populateShipList();
// player.printShips();


// let computer = new Computer('Computer');
// computer.populateShipList();
// computer.printShips();


let gameboard = new Gameboard();

gameboard.createGameboard();
//console.log(player.shipList[0])
//console.log(gameboard.isOrientationValid(10, 'E', player.shipList[0], 'Vertical'))
// gameboard.printNodes();
player.gameboard.createGameboard()
//player.placeShip(1, 'A', player.shipList[0], "Vertical")
//player.placeShip(1, 'A', player.shipList[0], "Horizontal")
//player.gameboard.setHorizontalCoords(1,"A",player.shipList[0],"Horizontal")
//player.gameboard.setVerticalCoords(1, "A", player.shipList[0], "Horizontal")

// console.log(player.shipList[0])
player.placeShip(1, 'A', player.shipList[0], "Vertical")
player.placeShip(1, 'A', player.shipList[1], "Vertical")

console.log(player.shipList.length)
console.log(player.gameboard.shipList)
module.exports = {Node, Ship, Gameboard, Player, Computer};


//todo add has ship to coords and connect coords to ship
