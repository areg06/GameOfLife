


function matrixGenerator(l) {
    // Local matrix
    var m = [];
    // Fill matrix
    for (var i = 0; i < l; i++) {
        m[i] = [];
        for (var j = 0; j < l; j++) {
            // Stexcel random tiv
            var rand = random(0, 100);
            // Lcnel matrix tokosayin haraberutyamb
            if (rand <= 60) {
                // Xot
                m[i][j] = 1;
            } else if (rand > 60 && rand <= 70) {
                // Xotaker
                m[i][j] = 2;
            } else if (rand > 70 && rand <= 78) {
                // Gishatich
                m[i][j] = 3;
            }else {
                // Datarkutyun
                m[i][j] = 0;
            }
        }
    }
    // Veradarcnel matrix
    return m;
}

// Haytararel global matrix popoxakan
var matrix;


let grassArr = [];
let grassEaterArr = [];
let predatoryArr = [];
let bombArr = [];
let waveArr = [];


var side = 20;


function setup() {
    
    matrix = matrixGenerator(30);
    frameRate(40);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');

    // var gr = new Grass(1,2,1);
    // var emptyCells = gr.chooseCell(0);
    
    matrix[matrix.length/2-1][matrix.length/2-1] = 4
    matrix[0][0] = 5

    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                let gr = new Grass(x, y, 1);
                grassArr.push(gr)
            } else if (matrix[y][x] == 2) {
                let ge = new GrassEater(x, y, 2);
                grassEaterArr.push(ge)
            } else if (matrix[y][x] == 3) {
                let pr = new Predatory(x, y, 3);
                predatoryArr.push(pr)
            }else if (matrix[y][x] == 4) {
                let bm = new Bomb(x, y);
                bombArr.push(bm)
            }else if (matrix[y][x] == 5) {
                let wa = new Wave(x, y);
                waveArr.push(wa)
            }
        }
    }
    
    
}

function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side)
            } else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            } else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            } else if (matrix[y][x] == 3) {
                fill("red");
                rect(x * side, y * side, side, side);
            } else if (matrix[y][x] == 4) {
                fill("black");
                rect(x * side, y * side, side, side);
            }else if (matrix[y][x] == 5) {
                fill("pink");
                rect(x * side, y * side, side, side);
            }

        }
    }

    for (let i in grassArr) {
        grassArr[i].mul();
    }

    for (let i in grassEaterArr) {
        grassEaterArr[i].eat()
    }

    for (let i in predatoryArr) {
        predatoryArr[i].eat()
    }
    for (let i in waveArr) {
        waveArr[i].move()
    }
    for (let i = 0; i < 8; i++) {
        bombArr[i].burst() 
    }
    
    
}

setTimeout(function(){
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if(x == y){
                matrix[y][x] = 0
            }
        }
    }
}, 5000);
