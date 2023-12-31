import './style.css'

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

    isHit() {
        return this.hit;
    }


}

class Ship {
    constructor(length, type, owner) {
        this.length = length;
        this.type = type;
        this.isSunk = false;
        this.numOfHits = 0;
        this.owner = owner;
        this.orientation = "Horizontal";
        this.shipCoords = []
    }

    getOrientation() {
        return this.orientation;
    }

    getShipType() {
        return this.type;
    }


    hit() {
        this.numOfHits++;
        if (this.numOfHits === this.length) {
            this.isSunk = true;
            this.owner.remainingShips -= 1
        }

    }

    isSunk() {
        return this.isSunk;
    }

    setOrientation(orientation) {
        this.orientation = orientation;
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


    restartGameBoard() {
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

    printShipList() {
        this.shipList.forEach((ship) => {
            console.log(`Ship ${ship.getShipType()} at ${JSON.stringify(ship.getShipCoords())} facing ${ship.getOrientation()}`)
        });
    }

    isCellValid(x, y) {
        if (this.findNodeInList(x, y) === null) {
            return false
        } else return this.findNodeInList(x, y).hasShip !== true;
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

    }

    addNode(x, y) {
        let node = new Node(x, y);
        this.nodeList.push(node);
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

    receiveAttack(x, y) {
        let node = this.findNodeInList(x, y);
        let nodeCell = document.getElementById(`${y}${x}`)
        if (node === null) {
            return null;
        }

        if (node.hasShip && node.hit === false) {
            node.hit = true;
            node.ship.hit();
            return "Hit";
        } else if (node.hasShip === false && node.hit === false) {
            node.hit = true;
            return "Miss";
        } else if (node.hit === true) {
            return "Already Hit"

        } else {
            return null;
        }
    }
}

class Player {
    constructor(name) {
        this.name = name;
        this.gameboard = new Gameboard();
        this.remainingShips = 5;
        this.shipList = [];
    }

    resetPlayer() {
        this.gameboard.restartGameBoard()
        this.shipList = []
        this.remainingShips = 5
    }

    findShip(shipType) {
        return this.shipList.find((ship) => {
            return ship.type === shipType;
        });
    }

    findShipIndex(shipType) {
        return this.shipList.findIndex((ship) => {
            return ship.type === shipType;
        });
    }

    getPlayerName() {
        return this.name;
    }

    printShips() {
        this.shipList.forEach((ship) => {
            console.log(`Ship: ${ship.type}, Length: ${ship.length}, Owner: ${ship.getOwner().getPlayerName()}`);
        });
    }

    getRemainingShips() {
        return this.remainingShips
    }

    attack(x, y, enemyGameboard) {
        console.log(`Player ${this.name} attacked ${x},${y}`)
        return enemyGameboard.receiveAttack(x, y);
    }

    populateShipList() {
        if (this.shipList.length !== 0) {
            this.shipList = []
        } else {
            this.shipList.push(new Ship(5, 'Carrier', this));
            this.shipList.push(new Ship(4, 'Battleship', this));
            this.shipList.push(new Ship(3, 'Destroyer', this));
            this.shipList.push(new Ship(3, 'Submarine', this));
            this.shipList.push(new Ship(2, 'Patrol Boat', this));
        }
    }

    createRandomCoords() {
        let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']

        let x = Math.floor(Math.random() * 10) + 1;
        let y = alphabet[Math.floor(Math.random() * 10)];

        return [x, y]
    }

    createRandomOrientation() {
        let orientations = ['Horizontal', 'Vertical'];
        return orientations[Math.floor(Math.random() * 2)]
    }

    randomShipPlacement(user) {
        let randomCoords = this.createRandomCoords()
        let orientation = this.createRandomOrientation()
        let x = randomCoords[0]
        let y = randomCoords[1]

        while (this.shipList.length !== 0) {
            let ship = this.shipList[0]
            this.placeShip(x, y, ship, orientation)
            randomCoords = this.createRandomCoords()
            orientation = this.createRandomOrientation()
            x = randomCoords[0]
            y = randomCoords[1]
        }
        let GameBoardCells
        if (user === 'player') {
            GameBoardCells = document.querySelectorAll('.player-gameBoard-cells .gameBoard-cell')
        } else if (user === 'computer') {
            GameBoardCells = document.querySelectorAll('.computer-gameBoard-cells .gameBoard-cell')
        }

        // let GameBoardCells = document.querySelectorAll('.computer-gameBoard-cells .gameBoard-cell')
        let shipList = this.gameboard.shipList
        shipList.forEach((ship) => {
            ship.shipCoords.forEach((coord) => {
                GameBoardCells.forEach((cell) => {
                    if (cell.id === `${coord.y}${coord.x}`) {
                        cell.classList.add('ship-cell')
                    }
                });
            })
        });

    }

    placeShip(x, y, ship, orientation) {
        if (this.gameboard.findNodeInList(x, y) === null) {
            console.log("null")
            return null;
        }
        if (this.gameboard.findNodeInList(x, y).hasShip === true) {
            console.log("has ship")
            return null;
        }

        if (this.gameboard.isOrientationValid(x, y, ship, orientation) && orientation === "Vertical") {

            this.gameboard.setVerticalCoords(x, y, ship)
            let index = this.findShipIndex(ship.type)

            this.shipList.splice(index, 1)
            console.log(`Ship ${ship.getShipType()} placed at ${x},${y}`)


        } else if (this.gameboard.isOrientationValid(x, y, ship, orientation) && orientation === "Horizontal") {
            this.gameboard.setHorizontalCoords(x, y, ship)

            let index = this.findShipIndex(ship.type)

            this.shipList.splice(index, 1)
            console.log(`Ship ${ship.getShipType()} placed at ${x},${y}`)


        } else {
            console.log("Invalid Placement")
            return null;
        }
    }

}


class Computer extends Player {
    constructor(name) {
        super();
        this.name = name;
        this.gameboard = new Gameboard();
        this.coordsAttacked = []
    }

    restartComputer() {
        this.coordsAttacked = []
    }


    randomAttack(playerGameboard) {
        let hitValid = false
        while (hitValid === false) {
            let randomCoords = this.createRandomCoords()
            let x = randomCoords[0]
            let y = randomCoords[1]

            if (playerGameboard.findNodeInList(x, y).isHit() === false && this.coordsAttacked.includes(`${x},${y}`) === false) {
                hitValid = true
                let result = playerGameboard.receiveAttack(x, y)
                this.coordsAttacked.push(`${x},${y}`)
                console.log(`Computer attacked ${x},${y}`)
                let cell = document.getElementById(`${y}${x}`)
                if (result === "Hit") {
                    cell.classList.add('hit')
                    cell.style.backgroundColor = 'red'
                } else if (result === "Miss") {
                    cell.classList.add('miss')
                    cell.style.backgroundColor = 'grey'
                }


            } else {
                console.log(`Computer already attacked ${x},${y}`)
                console.log(playerGameboard.findNodeInList(x, y).isHit())
            }

        }


    }


}

class DomController {

    clearBoard() {
        let playerCells = document.querySelectorAll('.player-gameBoard-cells .gameBoard-cell')
        let computerCells = document.querySelectorAll('.computer-gameBoard-cells .gameBoard-cell')

        playerCells.forEach((cell) => {
            cell.classList.remove('hit')
            cell.classList.remove('miss')
            cell.classList.remove('ship-cell')
            cell.style.backgroundColor = 'white'
        });
        computerCells.forEach((cell) => {
            cell.classList.remove('hit')
            cell.classList.remove('miss')
            cell.classList.remove('ship-cell')
            cell.style.backgroundColor = 'white'
        });

    }


    clearShipSelector() {
        let shipSelectorContainer = document.querySelector('.ship-selector-container')
        shipSelectorContainer.innerHTML = ''
    }

    addShipToSelector(ship) {

        let shipSelectorContainer = document.querySelector('.ship-selector-container')

        shipSelectorContainer.innerHTML = ''
        shipSelectorContainer.style.flexDirection = 'row'
        ship.setOrientation('Horizontal')

        for (let i = 0; i < ship.length; i++) {
            let shipCell = document.createElement('div')
            shipCell.addEventListener('click', (e) => {
                if (shipSelectorContainer.style.flexDirection === 'column') {
                    shipSelectorContainer.style.flexDirection = 'row'
                    ship.setOrientation('Horizontal')
                } else {
                    shipSelectorContainer.style.flexDirection = 'column'
                    ship.setOrientation('Vertical')
                }
            });
            shipCell.classList.add('ship-cell')
            shipCell.setAttribute('id', `${ship.type}${i}`)
            shipSelectorContainer.appendChild(shipCell)
        }
    }


    //style doesn't apply to second gameboard if player is created first
    createGameboard(user) {

        let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
        let gameboardCellContainer = document.createElement('div')
        if (user === 'player') {
            gameboardCellContainer = document.querySelector('.player-gameBoard-cells')
        } else if (user === 'computer') {
            gameboardCellContainer = document.querySelector('.computer-gameBoard-cells')

        }

        let xCoordCell = document.createElement('div')

        gameboardCellContainer.appendChild(xCoordCell)

        for (let i = 0; i < 10; i++) {
            xCoordCell = document.createElement('div')
            xCoordCell.classList.add('x-coord')
            xCoordCell.innerHTML = (i + 1).toString();
            gameboardCellContainer.appendChild(xCoordCell)
        }

        for (let i = 0; i < 10; i++) {
            let yCoordCell = document.createElement('div')
            yCoordCell.classList.add('y-coord')
            yCoordCell.innerHTML = alphabet[i];
            gameboardCellContainer.appendChild(yCoordCell)

            for (let j = 0; j < 10; j++) {

                let cell = document.createElement('div')
                cell.classList.add('gameBoard-cell')
                cell.setAttribute('id', `${alphabet[i]}${j + 1}`)
                //todo add event listener to each cell

                gameboardCellContainer.appendChild(cell)
            }
        }


        const gameBoardCells = document.querySelectorAll('.gameBoard-cell')
        for (let i = 0; i < 100; i++) {
            if (i === 0) {
                gameBoardCells[i].classList.add('topLeftCornerCell')
            } else if (i < 9 && i > 0) {
                gameBoardCells[i].classList.add('topCell')
            } else if (i === 9) {
                gameBoardCells[i].classList.add('topRightCornerCell')
            } else if (i % 10 === 0 && i < 90) {
                gameBoardCells[i].classList.add('leftCell')
            } else if (i === 19 || i === 29 || i === 39 || i === 49 || i === 59 || i === 69 || i === 79 || i === 89) {
                gameBoardCells[i].classList.add('rightCell')

            } else if (i === 90) {
                gameBoardCells[i].classList.add('bottomLeftCornerCell')
            } else if (i === 91 || i === 92 || i === 93 || i === 94 || i === 95 || i === 96 || i === 97 || i === 98) {
                gameBoardCells[i].classList.add('bottomCell')
            } else if (i > 90 && i < 99) {
                gameBoardCells[i].classList.add('bottomCell')
            } else if (i === 99) {
                gameBoardCells[i].classList.add('bottomRightCornerCell')
            }
        }

        if (user === 'computer') {
            let computerGameBoardCells = document.querySelector('.computer-gameBoard-cells');
            let computerOverlay = document.createElement('div')
            computerOverlay.classList.add('computer-overlay')
            computerOverlay.classList.add('overlay')
            computerGameBoardCells.appendChild(computerOverlay)
        }
    }

    cellDragOver(e) {
        e.preventDefault()
        console.log(e.target.id)
        e.target.classList.add('dragging')
        // e.target.style.backgroundColor = 'red'
    }

    cellDrop(e, player) {
        e.preventDefault()
        e.target.classList.remove('dragging')
        console.log(e.target.id)
        let currentShip = document.querySelector('.ship-selector-container .ship-cell')
        let shipType = currentShip.id.slice(0, -1)
        let ship = player.findShip(shipType);
        console.log(ship)
        let x = parseInt(e.target.id.slice(1))
        console.log(x)
        let y = e.target.id.slice(0, 1)
        console.log(y)
        let orientation = ship.getOrientation()
        player.placeShip(x, y, ship, orientation)

        let shipCoords = ship.getShipCoords()
        shipCoords.forEach((coord) => {
            let cell = document.getElementById(`${coord.y}${coord.x}`)
            cell.classList.add('ship-cell')
        });
        if (player.shipList.length !== 0) {
            this.addShipToSelector(player.shipList[0])
        } else {
            let shipSelectorContainer = document.querySelector('.ship-selector-container')
            //  let computerOverlay = document.querySelector('.computer-overlay')
            // computerOverlay.style.display = 'none'
            shipSelectorContainer.innerHTML = ''
        }


    }

    dragLeave(e) {
        e.preventDefault()
        e.target.classList.remove('dragging')
        //e.target.style.backgroundColor = 'white'
    }

    addPlayerBoardListeners(player) {
        let playerGameboardCells = document.querySelectorAll('.player-gameBoard-cells .gameBoard-cell')
        console.log(playerGameboardCells)
        playerGameboardCells.forEach((cell) => {
            cell.addEventListener('dragover', (e) => {
                this.cellDragOver(e)
            })

            cell.addEventListener('drop', (e) => {
                this.cellDrop(e, player)

            })

            cell.addEventListener('dragleave', (e) => {
                this.dragLeave(e)
            });

        })
    }

    showHit(cell) {
        cell.classList.add('hit')
        cell.style.backgroundColor = 'red'
    }

    showMiss(cell) {
        cell.classList.add('miss')
        cell.style.backgroundColor = 'grey'
    }

    toggleComputerOverlayOn() {
        let computerOverlay = document.querySelector('.computer-overlay')

        computerOverlay.style.display = 'block'


    }
}

class GameLogic {

    constructor() {
        this.player = new Player('Player')
        this.computer = new Computer('Computer')
        this.domController = new DomController()
        this.setResetButton()
        this.setrandomBoardButton()
    }


    clearAllIntervals() {
        for (let i = 1; i < 99999; i++) {
            window.clearInterval(i);
        }
    }

    restartGame() {
        let playerGameBoardDiv = document.querySelector('.player-gameBoard-cells')
        let computerGameBoardCellsDiv = document.querySelectorAll('.computer-gameBoard-cells')
        let shipSelectorContainer = document.querySelector('.ship-selector-container')
        console.log(computerGameBoardCellsDiv[0])
        shipSelectorContainer.innerHTML = ''
        computerGameBoardCellsDiv[0].innerHTML = ''
        playerGameBoardDiv.innerHTML = ''

        this.clearAllIntervals()
        this.domController.clearBoard()
        this.player.resetPlayer()
        this.computer.resetPlayer()
        this.computer.restartComputer()
        this.gameSetup()
    }


    setrandomBoardButton() {
        let randomBoardButton = document.querySelector('.random-board')
        randomBoardButton.addEventListener('click', () => {
            this.player.randomShipPlacement('player')
            this.domController.clearShipSelector()
        });
    }

    setResetButton() {
        let resetButton = document.querySelector('.reset-board')
        resetButton.addEventListener('click', () => {
            this.restartGame()
        });

    }

    isGameOver() {
        let gameOverInterval = setInterval(() => {
            if (this.player.getRemainingShips() === 0 || this.computer.getRemainingShips() === 0) {
                clearInterval(gameOverInterval)
                return true
            }
        }, 1000);

    }

    getWinner() {
        if (this.player.getRemainingShips() === 0) {
            return "Computer"
        } else {
            return "Player"

        }

    }

    gameSetup() {


        this.player.populateShipList()
        this.computer.populateShipList()
        this.domController.createGameboard('computer')
        this.domController.createGameboard('player')
        this.player.gameboard.createGameboard()
        this.computer.gameboard.createGameboard()
        this.domController.addPlayerBoardListeners(this.player)
        this.computer.randomShipPlacement('computer')
        this.domController.addShipToSelector(this.player.shipList[0])

        //use this to create  regular game loop
        let gameInterval = setInterval(() => {
            if (this.player.shipList.length === 0 && this.computer.shipList.length === 0) {
                console.log("nextPhase")
                this.addComputerGameBoardListeners()
                clearInterval(gameInterval)
            }
        }, 1000)

        let gameOverInterval = setInterval(() => {
            if (this.player.getRemainingShips() === 0 || this.computer.getRemainingShips() === 0) {
                let winner = this.getWinner()
                alert(`${winner} wins!`)
                this.domController.toggleComputerOverlayOn()
                console.log("game over")
                clearInterval(gameOverInterval)

            }
        }, 1000);


    }

    clickEvent(e) {
        let x = parseInt(e.target.id.slice(1))
        let y = e.target.id.slice(0, 1)
        let result = this.player.attack(x, y, this.computer.gameboard)
        if (result === "Hit") {
            this.domController.showHit(e.target)
            this.computer.randomAttack(this.player.gameboard)
        } else if (result === "Miss") {
            this.domController.showMiss(e.target)
            this.computer.randomAttack(this.player.gameboard)
        } else if (result === "Already Hit") {
            console.log("Already Hit")
        }

    }

    addComputerGameBoardListeners() {
        let computerGameboardCells = document.querySelectorAll('.computer-gameBoard-cells .gameBoard-cell')
        computerGameboardCells.forEach((cell) => {
            cell.addEventListener('click', (e) => {
                this.clickEvent(e)
            });

        })
    }

    removeComputerListeners() {
        let computerGameboardCells = document.querySelectorAll('.computer-gameBoard-cells .gameBoard-cell')
        computerGameboardCells.forEach((cell) => {
            cell.removeEventListener('click', (e) => {
                this.clickEvent(e)
            });
            console.log("removed")
        })
    }
}

let gameLogic = new GameLogic()
gameLogic.gameSetup()


//gameLogic.playerShipPlacementPhase()


module
    .exports = {Node, Ship, Gameboard, Player, Computer};



