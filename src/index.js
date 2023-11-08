import './style.css'

class node{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.hit = false;
        this.ship = false;
    }
    
}
class Ship {
    constructor(length, type) {
        this.length = length;
        this.type = type;
        this.isSunk = false;
        this.numOfHits = 0;
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

class Gameboard{

}