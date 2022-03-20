var express = require('express');
var app = express();
var server = require('http').Server(app);
 io = require('socket.io')(server);
var fs = require("fs");

app.use(express.static("."));

app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);

function matrixGenerator(l) {
    // Local matrix
    var m = [];
    // Fill matrix
    for (var i = 0; i < l; i++) {
        m[i] = [];
        for (var j = 0; j < l; j++) {
            // Stexcel random tiv
            var rand = Math.floor(Math.random() * 100);
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

matrixGenerator(30)

io.sockets.emit('send matrix', matrixGenerator())

grassArr = []
grassEaterArr = []
predatoryArr = []
bombArr = []
waveArr = []

Grass = require("./class/grass")
GrassEater = require("./class/grasseater")

function createObject(matrix){
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
    io.sockets.emit('send matrix', matrix)
}


function game(){
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
    io.sockets.emit('send matrix', matrix)
}

setInterval(game, 1000)

io.on('connection', function (socket) {
    createObject(matrix)
})