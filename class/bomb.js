// const LivingCreature = require('./LivingCreature')

// module.exports = class Bomb extends LivingCreature {
//     constructor(x,y){
//         super(x,y)
//     }
//     chooseCell(character) {
//         return super.chooseCell(character)
//     }

//     burst(){
//         let burstCell = this.chooseCell(0);
//         let burstCell1 = this.chooseCell(1);
//         let burstCell2 = this.chooseCell(2);
//         let burstCell3 = this.chooseCell(3);

//         let newCell = emptyCell[Math.floor(Math.random() * burstCell.length)];
//         let newCell1 = emptyCell[Math.floor(Math.random() * burstCell1.length)];
//         let newCell2 = emptyCell[Math.floor(Math.random() * burstCell2.length)];
//         let newCell3 = emptyCell[Math.floor(Math.random() * burstCell3.length)];


//         if (newCell) {
//             let newX = newCell[0];
//             let newY = newCell[1];

//             matrix[newY][newX] = 4;
//             let newBomb = new Bomb(newX, newY);
//             bombArr.push(newBomb);
//         }else if(newCell1){
//             let newX = newCell1[0];
//             let newY = newCell1[1];

//             matrix[newY][newX] = 4;
            
//             for (let i in grassArr) {
//                 if (newX == grassArr[i].x && newY == grassArr[i].y) {
//                     grassArr.splice(i, 1);
//                     break;
//                 }
//             }
//             let newBomb = new Bomb(newX, newY);
//             bombArr.push(newBomb);
//         }else if(newCell2){
//             let newX = newCell2[0];
//             let newY = newCell2[1];

//             matrix[newY][newX] = 4;
            
//             for (let i in grassEaterArr) {
//                 if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
//                     grassEaterArr.splice(i, 1);
//                     break;
//                 }
//             }
//             let newBomb = new Bomb(newX, newY);
//             bombArr.push(newBomb);
//         }else if(newCell3){
//             let newX = newCell3[0];
//             let newY = newCell3[1];

//             matrix[newY][newX] = 4;
            
//             for (let i in predatoryArr) {
//                 if (newX == predatoryArr[i].x && newY == predatoryArr[i].y) {
//                     predatoryArr.splice(i, 1);
//                     break;
//                 }
//             }
//             let newBomb = new Bomb(newX, newY);
//             bombArr.push(newBomb);
//         }


            
//     }
    
// }