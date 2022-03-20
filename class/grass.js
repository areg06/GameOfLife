let LivingCreature = require('./LivingCreature')

module.exports = class Grass extends LivingCreature {

    constructor(x, y, index) {
        super(x,y,index)

    }

    chooseCell(character) {
        return super.chooseCell(character)
    }

    mul() {
        this.multiply++;
        let emptyCell = this.chooseCell(0);
        let newCell = emptyCell[Math.floor(Math.random() * emptyCell.length)];


        if (newCell && this.multiply >= 5) {
            let newX = newCell[0];
            let newY = newCell[1];
            matrix[newY][newX] = this.index

            let newGrass = new Grass(newX, newY, this.index);
            grassArr.push(newGrass);
            this.multiply = 0;
        }
    }
}

