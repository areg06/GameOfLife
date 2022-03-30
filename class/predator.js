const LivingCreature = require('./LivingCreature')

module.exports = class Predatory extends LivingCreature {
    constructor(x, y, index) { 
        super(x,y,index)
        this.energy = 8;
        this.directions = []
    }

    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }


    chooseCell(character) {
        this.getNewCoordinates()
        return super.chooseCell(character)
    }

    move() {

        let emptyCells = this.chooseCell(0);
        let newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];

        if (newCell) {
            let newX = newCell[0];
            let newY = newCell[1];
            matrix[this.y][this.x] = 0

            matrix[newY][newX] = this.index;

            this.x = newX;
            this.y = newY;
            
        }
        this.energy--

        this.die()

    }


    eat() {
        let emptyCells = this.chooseCell(2);
        let newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];

        if (newCell) {
            let newX = newCell[0];
            let newY = newCell[1];

            matrix[this.y][this.x] = 0
            matrix[newY][newX] = this.index;
            this.x = newX;
            this.y = newY;

            for (let i in grassEaterArr) {
                if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                    break;
                }
            }

            this.energy++


            this.mul()
        } else {
            this.move()
        }
    }


    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0
            for (let i in predatoryArr) {
                if (this.x == predatoryArr[i].x && this.y == predatoryArr[i].y) {
                    predatoryArr.splice(i, 1);
                    break;
                }
            }
        }
    }


    mul() {
        let emptyCell = this.chooseCell(0);
        let newCell = emptyCell[Math.floor(Math.random() * emptyCell.length)];


        if (newCell && this.energy >= 10) {

            let newX = newCell[0];
            let newY = newCell[0];
            matrix[newY][newX] = this.index

            let newPredatory = new Predatory(newX, newY, this.index);
            predatoryArr.push(newPredatory);

            this.energy = 7

        }

    }


}