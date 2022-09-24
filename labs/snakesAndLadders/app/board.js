// let board;

// function setup() {
//   createCanvas(500, 500);

//   //creating board
//   //board should have 9 rows and 10 columns
//   board = new Board(9, 10);

//   //calling draw function for the Board
//   board.draw();
// }

// class Board {
//   constructor(x, y) {
//     this.x = x; //x is rows
//     this.y = y; //y is columns
//     this.isOn = true;
//   }

//   draw() {
//     let tileWidth = width / this.x;
//     let tileHeight = height / this.y;

//     for (let y = 0; y < this.y; y++) {
//       for (let x = 0; x < this.x; x++) {
//         if (this.isOn) {
//           fill(255);
//           this.isOn = false;
//         } else {
//           fill(252, 186, 3);
//           this.isOn = true;
//         }
//         rect(x * tileWidth, y * tileHeight, tileWidth, tileHeight);
//       }
//     }
//   }
// }
