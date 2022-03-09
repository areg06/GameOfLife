class Bomb {
    constructor(x,y){
        this.x = x
        this.y = y
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
        let found = [];
        for (let i in this.directions) {
            let x = this.directions[i][0];
            let y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    burst(){
        let burstCell = this.chooseCell(0);
        let burstCell1 = this.chooseCell(1);
        let burstCell2 = this.chooseCell(2);
        let burstCell3 = this.chooseCell(3);

        let newCell = random(burstCell);
        let newCell1 = random(burstCell1);
        let newCell2 = random(burstCell2);
        let newCell3 = random(burstCell3)


        if (newCell) {
            let newX = newCell[0];
            let newY = newCell[1];

            matrix[newY][newX] = 4;
            let newBomb = new Bomb(newX, newY);
            bombArr.push(newBomb);
        }else if(newCell1){
            let newX = newCell1[0];
            let newY = newCell1[1];

            matrix[newY][newX] = 4;
            
            for (let i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
            let newBomb = new Bomb(newX, newY);
            bombArr.push(newBomb);
        }else if(newCell2){
            let newX = newCell2[0];
            let newY = newCell2[1];

            matrix[newY][newX] = 4;
            
            for (let i in grassEaterArr) {
                if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                    break;
                }
            }
            let newBomb = new Bomb(newX, newY);
            bombArr.push(newBomb);
        }else if(newCell3){
            let newX = newCell3[0];
            let newY = newCell3[1];

            matrix[newY][newX] = 4;
            
            for (let i in predatoryArr) {
                if (newX == predatoryArr[i].x && newY == predatoryArr[i].y) {
                    predatoryArr.splice(i, 1);
                    break;
                }
            }
            let newBomb = new Bomb(newX, newY);
            bombArr.push(newBomb);
        }


            
    }
    
}