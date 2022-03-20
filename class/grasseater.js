let LivingCreature = require('./LivingCreature')

module.exports = class GrassEater extends LivingCreature {

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
        let newCell = random(emptyCells);

        if (newCell) {
            let newX = newCell[0];
            let newY = newCell[1];
            matrix[this.y][this.x] = 0;

            matrix[newY][newX] = this.index;

            this.x = newX;
            this.y = newY;
            
        }
        this.energy--
        this.die()

    }

    eat() {
        let emptyCells = this.chooseCell(1);
        let newCell = random(emptyCells);

        if (newCell) {
            let newX = newCell[0];
            let newY = newCell[1];
            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = this.index;
            this.x = newX;
            this.y = newY;

            for (let i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1);
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
            matrix[this.y][this.x] = 0;
            for (let i in grassEaterArr) {
                if (this.x == grassEaterArr[i].x && this.y == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                    break;
                }
            }
        }
    }


    mul() {
        let emptyCell = this.chooseCell(0);
        let newCell = emptyCell[Math.floor(Math.random() * emptyCell.length)];


        if (newCell && this.energy >= 12) {

            let newX = newCell[0];
            let newY = newCell[0];
            matrix[newY][newX] = this.index

            let newGrass2 = new GrassEater(newX, newY, this.index);
            grassEaterArr.push(newGrass2);

            this.energy = 6
        }


    }
}