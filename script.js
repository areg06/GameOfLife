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
    

    // var gr = new Grass(1,2,1);
    // var emptyCells = gr.chooseCell(0);
    
    matrix[matrix.length/2-1][matrix.length/2-1] = 4
    matrix[0][0] = 5


    
    
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
