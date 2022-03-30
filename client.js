var socket = io();
let weath = "summer";
side = 20;

function setup() {
  createCanvas(30 * side, 30 * side);
  background("#acacac");
}

function drawing(matrix) {
  for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
      if (matrix[y][x] == 1) {
        if (weath === "spring") {
          fill("green");
        } else if (weath === "winter") {
          fill("white");
        }else if (weath === "summer") {
          fill("#99ba4a");
        }else if (weath === "autumn") {
          fill("orange");
        }
        rect(x * side, y * side, side, side);
      } else if (matrix[y][x] == 0) {
        fill("#acacac");
        rect(x * side, y * side, side, side);
      } else if (matrix[y][x] == 2) {
        if (weath === "spring") {
          fill("yellow");
        } else if (weath === "winter") {
          fill("black");
        }else if (weath === "summer") {
          fill("blue");
        }else if (weath === "autumn") {
          fill("pink");
        }
        rect(x * side, y * side, side, side);
      } else if (matrix[y][x] == 3) {
        fill("red");
        rect(x * side, y * side, side, side);
      } else if (matrix[y][x] == 4) {
        fill("black");
        rect(x * side, y * side, side, side);
      } else if (matrix[y][x] == 5) {
        fill("pink");
        rect(x * side, y * side, side, side);
      }
    }
  }
}

setInterval(function () {
  socket.on("send matrix", drawing);
  socket.on("send weath", function (data) {
    weath = data;
  });
}, 1000);

function weather(w) {
  socket.emit("weather", w);
}
