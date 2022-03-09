class Wave{
    constructor(x,y){
        this.x = x
        this.y = y
        this.directions = []
    }
    getNewCoordinates() {
        for (let y = 0; y < matrix.length; y++) {
            for (let x = 0; x < matrix[y].length; x++) {
                if (x == y) {
                    this.directions.push([x,y])
                }
            }
        }
    }
    chooseCell(character) {
        
        this.getNewCoordinates()
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
    

    

    move() {
        let nextCell = this.chooseCell(0);
        let nextCell1 = this.chooseCell(1);
        let nextCell2 = this.chooseCell(2);
        let nextCell3 = this.chooseCell(3);
        let nextCell4 = this.chooseCell(4);


        let newCell = random(nextCell);
        let newCell1 = random(nextCell1);
        let newCell2 = random(nextCell2);
        let newCell3 = random(nextCell3)
        let newCell4 = random(nextCell4)


        if (newCell) {
            let newX = newCell[0];
            let newY = newCell[1];
            
            matrix[newY][newX] = 5;

            this.x = newX
            this.y = newY
            let newWave = new Wave(newX, newY);
            waveArr.push(newWave);
        }else if(newCell1){
            let newX = newCell1[0];
            let newY = newCell1[1]
            

            matrix[newY][newX] = 5;

            this.x = newX
            this.y = newY
            
            for (let i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
            let newWave = new Wave(newX, newY);
            waveArr.push(newWave);
        }else if(newCell2){
            let newX = newCell2[0];
            let newY = newCell2[1]
            

            matrix[newY][newX] = 5;

            this.x = newX
            this.y = newY
            
            for (let i in grassEaterArr) {
                if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                    break;
                }
            }
            let newWave = new Wave(newX, newY);
            waveArr.push(newWave);
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
            let newWave = new Wave(newX, newY);
            waveArr.push(newWave);
        }else if(newCell4){
            let newX = newCell4[0];
            let newY = newCell4[1]
            

            matrix[newY][newX] = 5;

            this.x = newX
            this.y = newY
            
            for (let i in bombArr) {
                if (newX == bombArr[i].x && newY == bombArr[i].y) {
                    bombArr.splice(i, 1);
                    break;
                }
            }
            let newWave = new Wave(newX, newY);
            waveArr.push(newWave);
        }

    }
}