let yp1 = document.getElementById("yp1");
let yp2 = document.getElementById("yp2");
let yp3 = document.getElementById("yp3");
let yp4 = document.getElementById("yp4");

let yp1Position = 0;
let yp2Position = 0;
let yp3Position = 0;
let yp4Position = 0;

function moveYellow(yp) {
  yp.style.top = "23px";
  yp.style.left = "24px";
  // moves--;
  // movesLeft.innerHTML = "Moves left: " + moves;

  if (yp1Position === 0) {
    TweenMax.to(yp, { duration: 0.3, y: 67, x: 100 });
  }
  if (yp1Position === 1) {
    TweenMax.to(yp, { duration: 0.3, y: 110, x: 55 });
  }
  if (yp1Position === 2) {
    TweenMax.to(yp, { duration: 0.3, y: 162, x: 25 });
  }
  if (yp1Position === 3) {
    TweenMax.to(yp, { duration: 0.3, y: 220, x: 9 });
  }
  if (yp1Position === 4) {
    TweenMax.to(yp, { duration: 0.3, y: 280, x: 5 });
  }
  if (yp1Position === 5) {
    TweenMax.to(yp, { duration: 0.3, y: 340, x: 15 });
  }
  if (yp1Position === 6) {
    TweenMax.to(yp, { duration: 0.3, y: 400, x: 40 });
  }
  if (yp1Position === 7) {
    TweenMax.to(yp, { duration: 0.3, y: 447, x: 75 });
  }
  if (yp1Position === 8) {
    TweenMax.to(yp, { duration: 0.3, y: 485, x: 122 });
  }
  if (yp1Position === 9) {
    TweenMax.to(yp, { duration: 0.3, y: 512, x: 178 });
  }
  if (yp1Position === 10) {
    TweenMax.to(yp, { duration: 0.3, y: 526, x: 235 });
  }
  if (yp1Position === 11) {
    TweenMax.to(yp, { duration: 0.3, y: 526, x: 297 });
  }
  if (yp1Position === 12) {
    TweenMax.to(yp, { duration: 0.3, y: 512, x: 352 });
  }
  if (yp1Position === 13) {
    TweenMax.to(yp, { duration: 0.3, y: 485, x: 410 });
  }
  if (yp1Position === 14) {
    TweenMax.to(yp, { duration: 0.3, y: 447, x: 458 });
  }
  if (yp1Position === 15) {
    TweenMax.to(yp, { duration: 0.3, y: 397, x: 493 });
  }
  if (yp1Position === 16) {
    TweenMax.to(yp, { duration: 0.3, y: 340, x: 514 });
  }
  if (yp1Position === 17) {
    TweenMax.to(yp, { duration: 0.3, y: 280, x: 526 });
  }
  if (yp1Position === 18) {
    TweenMax.to(yp, { duration: 0.3, y: 220, x: 520 });
  }
  if (yp1Position === 19) {
    TweenMax.to(yp, { duration: 0.3, y: 162, x: 504 });
  }
  if (yp1Position === 20) {
    TweenMax.to(yp, { duration: 0.3, y: 110, x: 476 });
  }
  if (yp1Position === 21) {
    TweenMax.to(yp, { duration: 0.3, y: 67, x: 430 });
  }
  if (yp1Position === 22) {
    TweenMax.to(yp, { duration: 0.3, y: 36, x: 380 });
  }
  if (yp1Position === 23) {
    TweenMax.to(yp, { duration: 0.3, y: 12, x: 326 });
  }
  if (yp1Position === 24) {
    TweenMax.to(yp, { duration: 0.3, y: 7, x: 265 });
  }
  if (yp1Position === 25) {
    TweenMax.to(yp, { duration: 0.3, y: 12, x: 205 });
  }
  if (yp1Position === 26) {
    TweenMax.to(yp, { duration: 0.3, y: 36, x: 150 });
  }
  if (yp1Position === 27) {
    TweenMax.to(yp1, { duration: 0.3, y: 190, x: 200 });
  }

  yp1Position++;
}

function moveYellow2(yp) {
  yp.style.top = "23px";
  yp.style.left = "24px";

  if (yp2Position === 0) {
    TweenMax.to(yp, { duration: 0.3, y: 67, x: 100 });
  }
  if (yp2Position === 1) {
    TweenMax.to(yp, { duration: 0.3, y: 110, x: 55 });
  }
  if (yp2Position === 2) {
    TweenMax.to(yp, { duration: 0.3, y: 162, x: 25 });
  }
  if (yp2Position === 3) {
    TweenMax.to(yp, { duration: 0.3, y: 220, x: 9 });
  }
  if (yp2Position === 4) {
    TweenMax.to(yp, { duration: 0.3, y: 280, x: 5 });
  }
  if (yp2Position === 5) {
    TweenMax.to(yp, { duration: 0.3, y: 340, x: 15 });
  }
  if (yp2Position === 6) {
    TweenMax.to(yp, { duration: 0.3, y: 400, x: 40 });
  }
  if (yp2Position === 7) {
    TweenMax.to(yp, { duration: 0.3, y: 447, x: 75 });
  }
  if (yp2Position === 8) {
    TweenMax.to(yp, { duration: 0.3, y: 485, x: 122 });
  }
  if (yp2Position === 9) {
    TweenMax.to(yp, { duration: 0.3, y: 512, x: 178 });
  }
  if (yp2Position === 10) {
    TweenMax.to(yp, { duration: 0.3, y: 526, x: 235 });
  }
  if (yp2Position === 11) {
    TweenMax.to(yp, { duration: 0.3, y: 526, x: 297 });
  }
  if (yp2Position === 12) {
    TweenMax.to(yp, { duration: 0.3, y: 512, x: 352 });
  }
  if (yp2Position === 13) {
    TweenMax.to(yp, { duration: 0.3, y: 485, x: 410 });
  }
  if (yp2Position === 14) {
    TweenMax.to(yp, { duration: 0.3, y: 447, x: 458 });
  }
  if (yp2Position === 15) {
    TweenMax.to(yp, { duration: 0.3, y: 397, x: 493 });
  }
  if (yp2Position === 16) {
    TweenMax.to(yp, { duration: 0.3, y: 340, x: 514 });
  }
  if (yp2Position === 17) {
    TweenMax.to(yp, { duration: 0.3, y: 280, x: 526 });
  }
  if (yp2Position === 18) {
    TweenMax.to(yp, { duration: 0.3, y: 220, x: 520 });
  }
  if (yp2Position === 19) {
    TweenMax.to(yp, { duration: 0.3, y: 162, x: 504 });
  }
  if (yp2Position === 20) {
    TweenMax.to(yp, { duration: 0.3, y: 110, x: 476 });
  }
  if (yp2Position === 21) {
    TweenMax.to(yp, { duration: 0.3, y: 67, x: 430 });
  }
  if (yp2Position === 22) {
    TweenMax.to(yp, { duration: 0.3, y: 36, x: 380 });
  }
  if (yp2Position === 23) {
    TweenMax.to(yp, { duration: 0.3, y: 12, x: 326 });
  }
  if (yp2Position === 24) {
    TweenMax.to(yp, { duration: 0.3, y: 7, x: 265 });
  }
  if (yp2Position === 25) {
    TweenMax.to(yp, { duration: 0.3, y: 12, x: 205 });
  }
  if (yp2Position === 26) {
    TweenMax.to(yp, { duration: 0.3, y: 36, x: 150 });
  }
  if (yp2Position === 27) {
    TweenMax.to(yp, { duration: 0.3, y: 165, x: 174 });
  }

  yp2Position++;
}

function moveYellow3(yp) {
  yp.style.top = "23px";
  yp.style.left = "24px";

  if (yp3Position === 0) {
    TweenMax.to(yp, { duration: 0.3, y: 67, x: 100 });
  }
  if (yp3Position === 1) {
    TweenMax.to(yp, { duration: 0.3, y: 110, x: 55 });
  }
  if (yp3Position === 2) {
    TweenMax.to(yp, { duration: 0.3, y: 162, x: 25 });
  }
  if (yp3Position === 3) {
    TweenMax.to(yp, { duration: 0.3, y: 220, x: 9 });
  }
  if (yp3Position === 4) {
    TweenMax.to(yp, { duration: 0.3, y: 280, x: 5 });
  }
  if (yp3Position === 5) {
    TweenMax.to(yp, { duration: 0.3, y: 340, x: 15 });
  }
  if (yp3Position === 6) {
    TweenMax.to(yp, { duration: 0.3, y: 400, x: 40 });
  }
  if (yp3Position === 7) {
    TweenMax.to(yp, { duration: 0.3, y: 447, x: 75 });
  }
  if (yp3Position === 8) {
    TweenMax.to(yp, { duration: 0.3, y: 485, x: 122 });
  }
  if (yp3Position === 9) {
    TweenMax.to(yp, { duration: 0.3, y: 512, x: 178 });
  }
  if (yp3Position === 10) {
    TweenMax.to(yp, { duration: 0.3, y: 526, x: 235 });
  }
  if (yp3Position === 11) {
    TweenMax.to(yp, { duration: 0.3, y: 526, x: 297 });
  }
  if (yp3Position === 12) {
    TweenMax.to(yp, { duration: 0.3, y: 512, x: 352 });
  }
  if (yp3Position === 13) {
    TweenMax.to(yp, { duration: 0.3, y: 485, x: 410 });
  }
  if (yp3Position === 14) {
    TweenMax.to(yp, { duration: 0.3, y: 447, x: 458 });
  }
  if (yp3Position === 15) {
    TweenMax.to(yp, { duration: 0.3, y: 397, x: 493 });
  }
  if (yp3Position === 16) {
    TweenMax.to(yp, { duration: 0.3, y: 340, x: 514 });
  }
  if (yp3Position === 17) {
    TweenMax.to(yp, { duration: 0.3, y: 280, x: 526 });
  }
  if (yp3Position === 18) {
    TweenMax.to(yp, { duration: 0.3, y: 220, x: 520 });
  }
  if (yp3Position === 19) {
    TweenMax.to(yp, { duration: 0.3, y: 162, x: 504 });
  }
  if (yp3Position === 20) {
    TweenMax.to(yp, { duration: 0.3, y: 110, x: 476 });
  }
  if (yp3Position === 21) {
    TweenMax.to(yp, { duration: 0.3, y: 67, x: 430 });
  }
  if (yp3Position === 22) {
    TweenMax.to(yp, { duration: 0.3, y: 36, x: 380 });
  }
  if (yp3Position === 23) {
    TweenMax.to(yp, { duration: 0.3, y: 12, x: 326 });
  }
  if (yp3Position === 24) {
    TweenMax.to(yp, { duration: 0.3, y: 7, x: 265 });
  }
  if (yp3Position === 25) {
    TweenMax.to(yp, { duration: 0.3, y: 12, x: 205 });
  }
  if (yp3Position === 26) {
    TweenMax.to(yp, { duration: 0.3, y: 36, x: 150 });
  }
  if (yp3Position === 27) {
    TweenMax.to(yp, { duration: 0.3, y: 140, x: 147 });
  }

  yp3Position++;
}

function moveYellow4(yp) {
  yp.style.top = "23px";
  yp.style.left = "24px";

  if (yp4Position === 0) {
    TweenMax.to(yp, { duration: 0.3, y: 67, x: 100 });
  }
  if (yp4Position === 1) {
    TweenMax.to(yp, { duration: 0.3, y: 110, x: 55 });
  }
  if (yp4Position === 2) {
    TweenMax.to(yp, { duration: 0.3, y: 162, x: 25 });
  }
  if (yp4Position === 3) {
    TweenMax.to(yp, { duration: 0.3, y: 220, x: 9 });
  }
  if (yp4Position === 4) {
    TweenMax.to(yp, { duration: 0.3, y: 280, x: 5 });
  }
  if (yp4Position === 5) {
    TweenMax.to(yp, { duration: 0.3, y: 340, x: 15 });
  }
  if (yp4Position === 6) {
    TweenMax.to(yp, { duration: 0.3, y: 400, x: 40 });
  }
  if (yp4Position === 7) {
    TweenMax.to(yp, { duration: 0.3, y: 447, x: 75 });
  }
  if (yp4Position === 8) {
    TweenMax.to(yp, { duration: 0.3, y: 485, x: 122 });
  }
  if (yp4Position === 9) {
    TweenMax.to(yp, { duration: 0.3, y: 512, x: 178 });
  }
  if (yp4Position === 10) {
    TweenMax.to(yp, { duration: 0.3, y: 526, x: 235 });
  }
  if (yp4Position === 11) {
    TweenMax.to(yp, { duration: 0.3, y: 526, x: 297 });
  }
  if (yp4Position === 12) {
    TweenMax.to(yp, { duration: 0.3, y: 512, x: 352 });
  }
  if (yp4Position === 13) {
    TweenMax.to(yp, { duration: 0.3, y: 485, x: 410 });
  }
  if (yp4Position === 14) {
    TweenMax.to(yp, { duration: 0.3, y: 447, x: 458 });
  }
  if (yp4Position === 15) {
    TweenMax.to(yp, { duration: 0.3, y: 397, x: 493 });
  }
  if (yp4Position === 16) {
    TweenMax.to(yp, { duration: 0.3, y: 340, x: 514 });
  }
  if (yp4Position === 17) {
    TweenMax.to(yp, { duration: 0.3, y: 280, x: 526 });
  }
  if (yp4Position === 18) {
    TweenMax.to(yp, { duration: 0.3, y: 220, x: 520 });
  }
  if (yp4Position === 19) {
    TweenMax.to(yp, { duration: 0.3, y: 162, x: 504 });
  }
  if (yp4Position === 20) {
    TweenMax.to(yp, { duration: 0.3, y: 110, x: 476 });
  }
  if (yp4Position === 21) {
    TweenMax.to(yp, { duration: 0.3, y: 67, x: 430 });
  }
  if (yp4Position === 22) {
    TweenMax.to(yp, { duration: 0.3, y: 36, x: 380 });
  }
  if (yp4Position === 23) {
    TweenMax.to(yp, { duration: 0.3, y: 12, x: 326 });
  }
  if (yp4Position === 24) {
    TweenMax.to(yp, { duration: 0.3, y: 7, x: 265 });
  }
  if (yp4Position === 25) {
    TweenMax.to(yp, { duration: 0.3, y: 12, x: 205 });
  }
  if (yp4Position === 26) {
    TweenMax.to(yp, { duration: 0.3, y: 36, x: 150 });
  }
  if (yp4Position === 27) {
    TweenMax.to(yp, { duration: 0.3, y: 114, x: 120 });
  }
  yp4Position++;
}

let rp1 = document.getElementById("rp1");
let rp2 = document.getElementById("rp2");
let rp3 = document.getElementById("rp3");
let rp4 = document.getElementById("rp4");

let rp1Position = 0;
let rp2Position = 0;
let rp3Position = 0;
let rp4Position = 0;

function moveRed(yp) {
  yp.style.top = "23px";
  yp.style.right = "24px";
  // moves--;
  // movesLeft.innerHTML = "Moves left: " + moves;

  if (rp1Position === 0) {
    TweenMax.to(yp, { duration: 0.3, y: 67, x: -100 });
  }
  if (rp1Position === 1) {
    TweenMax.to(yp, { duration: 0.3, y: 34, x: -150 });
  }
  if (rp1Position === 2) {
    TweenMax.to(yp, { duration: 0.3, y: 12, x: -205 });
  }
  if (rp1Position === 3) {
    TweenMax.to(yp, { duration: 0.3, y: 5, x: -265 });
  }
  if (rp1Position === 4) {
    TweenMax.to(yp, { duration: 0.3, y: 12, x: -325 });
  }
  if (rp1Position === 5) {
    TweenMax.to(yp, { duration: 0.3, y: 34, x: -385 });
  }
  if (rp1Position === 6) {
    TweenMax.to(yp, { duration: 0.3, y: 67, x: -433 });
  }
  if (rp1Position === 7) {
    TweenMax.to(yp, { duration: 0.3, y: 112, x: -474 });
  }
  if (rp1Position === 8) {
    TweenMax.to(yp, { duration: 0.3, y: 162, x: -505 });
  }
  if (rp1Position === 9) {
    TweenMax.to(yp, { duration: 0.3, y: 222, x: -523 });
  }
  if (rp1Position === 10) {
    TweenMax.to(yp, { duration: 0.3, y: 285, x: -525 });
  }
  if (rp1Position === 11) {
    TweenMax.to(yp, { duration: 0.3, y: 344, x: -515 });
  }
  if (rp1Position === 12) {
    TweenMax.to(yp, { duration: 0.3, y: 400, x: -490 });
  }
  if (rp1Position === 13) {
    TweenMax.to(yp, { duration: 0.3, y: 446, x: -453 });
  }
  if (rp1Position === 14) {
    TweenMax.to(yp, { duration: 0.3, y: 486, x: -406 });
  }
  if (rp1Position === 15) {
    TweenMax.to(yp, { duration: 0.3, y: 510, x: -353 });
  }
  if (rp1Position === 16) {
    TweenMax.to(yp, { duration: 0.3, y: 528, x: -295 });
  }
  if (rp1Position === 17) {
    TweenMax.to(yp, { duration: 0.3, y: 525, x: -235 });
  }
  if (rp1Position === 18) {
    TweenMax.to(yp, { duration: 0.3, y: 510, x: -180 });
  }
  if (rp1Position === 19) {
    TweenMax.to(yp, { duration: 0.3, y: 485, x: -124 });
  }
  if (rp1Position === 20) {
    TweenMax.to(yp, { duration: 0.3, y: 448, x: -75 });
  }
  if (rp1Position === 21) {
    TweenMax.to(yp, { duration: 0.3, y: 396, x: -38 });
  }
  if (rp1Position === 22) {
    TweenMax.to(yp, { duration: 0.3, y: 340, x: -15 });
  }
  if (rp1Position === 23) {
    TweenMax.to(yp, { duration: 0.3, y: 280, x: -5 });
  }
  if (rp1Position === 24) {
    TweenMax.to(yp, { duration: 0.3, y: 220, x: -7 });
  }
  if (rp1Position === 25) {
    TweenMax.to(yp, { duration: 0.3, y: 164, x: -28 });
  }
  if (rp1Position === 26) {
    TweenMax.to(yp, { duration: 0.3, y: 110, x: -55 });
  }
  if (rp1Position === 27) {
    TweenMax.to(yp, { duration: 0.3, y: 190, x: -200 });
  }

  rp1Position++;
}

function moveRed2(yp) {
  yp.style.top = "23px";
  yp.style.right = "24px";
  // moves--;
  // movesLeft.innerHTML = "Moves left: " + moves;

  if (rp2Position === 0) {
    TweenMax.to(yp, { duration: 0.3, y: 67, x: -100 });
  }
  if (rp2Position === 1) {
    TweenMax.to(yp, { duration: 0.3, y: 34, x: -150 });
  }
  if (rp2Position === 2) {
    TweenMax.to(yp, { duration: 0.3, y: 12, x: -205 });
  }
  if (rp2Position === 3) {
    TweenMax.to(yp, { duration: 0.3, y: 5, x: -265 });
  }
  if (rp2Position === 4) {
    TweenMax.to(yp, { duration: 0.3, y: 12, x: -325 });
  }
  if (rp2Position === 5) {
    TweenMax.to(yp, { duration: 0.3, y: 34, x: -385 });
  }
  if (rp2Position === 6) {
    TweenMax.to(yp, { duration: 0.3, y: 67, x: -433 });
  }
  if (rp2Position === 7) {
    TweenMax.to(yp, { duration: 0.3, y: 112, x: -474 });
  }
  if (rp2Position === 8) {
    TweenMax.to(yp, { duration: 0.3, y: 162, x: -505 });
  }
  if (rp2Position === 9) {
    TweenMax.to(yp, { duration: 0.3, y: 222, x: -523 });
  }
  if (rp2Position === 10) {
    TweenMax.to(yp, { duration: 0.3, y: 285, x: -525 });
  }
  if (rp2Position === 11) {
    TweenMax.to(yp, { duration: 0.3, y: 344, x: -515 });
  }
  if (rp2Position === 12) {
    TweenMax.to(yp, { duration: 0.3, y: 400, x: -490 });
  }
  if (rp2Position === 13) {
    TweenMax.to(yp, { duration: 0.3, y: 446, x: -453 });
  }
  if (rp2Position === 14) {
    TweenMax.to(yp, { duration: 0.3, y: 486, x: -406 });
  }
  if (rp2Position === 15) {
    TweenMax.to(yp, { duration: 0.3, y: 510, x: -353 });
  }
  if (rp2Position === 16) {
    TweenMax.to(yp, { duration: 0.3, y: 528, x: -295 });
  }
  if (rp2Position === 17) {
    TweenMax.to(yp, { duration: 0.3, y: 525, x: -235 });
  }
  if (rp2Position === 18) {
    TweenMax.to(yp, { duration: 0.3, y: 510, x: -180 });
  }
  if (rp2Position === 19) {
    TweenMax.to(yp, { duration: 0.3, y: 485, x: -124 });
  }
  if (rp2Position === 20) {
    TweenMax.to(yp, { duration: 0.3, y: 448, x: -75 });
  }
  if (rp2Position === 21) {
    TweenMax.to(yp, { duration: 0.3, y: 396, x: -38 });
  }
  if (rp2Position === 22) {
    TweenMax.to(yp, { duration: 0.3, y: 340, x: -15 });
  }
  if (rp2Position === 23) {
    TweenMax.to(yp, { duration: 0.3, y: 280, x: -5 });
  }
  if (rp2Position === 24) {
    TweenMax.to(yp, { duration: 0.3, y: 220, x: -7 });
  }
  if (rp2Position === 25) {
    TweenMax.to(yp, { duration: 0.3, y: 164, x: -28 });
  }
  if (rp2Position === 26) {
    TweenMax.to(yp, { duration: 0.3, y: 110, x: -55 });
  }
  if (rp2Position === 27) {
    TweenMax.to(yp, { duration: 0.3, y: 164, x: -175 });
  }

  rp2Position++;
}

function moveRed3(yp) {
  yp.style.top = "23px";
  yp.style.right = "24px";
  // moves--;
  // movesLeft.innerHTML = "Moves left: " + moves;

  if (rp3Position === 0) {
    TweenMax.to(yp, { duration: 0.3, y: 67, x: -100 });
  }
  if (rp3Position === 1) {
    TweenMax.to(yp, { duration: 0.3, y: 34, x: -150 });
  }
  if (rp3Position === 2) {
    TweenMax.to(yp, { duration: 0.3, y: 12, x: -205 });
  }
  if (rp3Position === 3) {
    TweenMax.to(yp, { duration: 0.3, y: 5, x: -265 });
  }
  if (rp3Position === 4) {
    TweenMax.to(yp, { duration: 0.3, y: 12, x: -325 });
  }
  if (rp3Position === 5) {
    TweenMax.to(yp, { duration: 0.3, y: 34, x: -385 });
  }
  if (rp3Position === 6) {
    TweenMax.to(yp, { duration: 0.3, y: 67, x: -433 });
  }
  if (rp3Position === 7) {
    TweenMax.to(yp, { duration: 0.3, y: 112, x: -474 });
  }
  if (rp3Position === 8) {
    TweenMax.to(yp, { duration: 0.3, y: 162, x: -505 });
  }
  if (rp3Position === 9) {
    TweenMax.to(yp, { duration: 0.3, y: 222, x: -523 });
  }
  if (rp3Position === 10) {
    TweenMax.to(yp, { duration: 0.3, y: 285, x: -525 });
  }
  if (rp3Position === 11) {
    TweenMax.to(yp, { duration: 0.3, y: 344, x: -515 });
  }
  if (rp3Position === 12) {
    TweenMax.to(yp, { duration: 0.3, y: 400, x: -490 });
  }
  if (rp3Position === 13) {
    TweenMax.to(yp, { duration: 0.3, y: 446, x: -453 });
  }
  if (rp3Position === 14) {
    TweenMax.to(yp, { duration: 0.3, y: 486, x: -406 });
  }
  if (rp3Position === 15) {
    TweenMax.to(yp, { duration: 0.3, y: 510, x: -353 });
  }
  if (rp3Position === 16) {
    TweenMax.to(yp, { duration: 0.3, y: 528, x: -295 });
  }
  if (rp3Position === 17) {
    TweenMax.to(yp, { duration: 0.3, y: 525, x: -235 });
  }
  if (rp3Position === 18) {
    TweenMax.to(yp, { duration: 0.3, y: 510, x: -180 });
  }
  if (rp3Position === 19) {
    TweenMax.to(yp, { duration: 0.3, y: 485, x: -124 });
  }
  if (rp3Position === 20) {
    TweenMax.to(yp, { duration: 0.3, y: 448, x: -75 });
  }
  if (rp3Position === 21) {
    TweenMax.to(yp, { duration: 0.3, y: 396, x: -38 });
  }
  if (rp3Position === 22) {
    TweenMax.to(yp, { duration: 0.3, y: 340, x: -15 });
  }
  if (rp3Position === 23) {
    TweenMax.to(yp, { duration: 0.3, y: 280, x: -5 });
  }
  if (rp3Position === 24) {
    TweenMax.to(yp, { duration: 0.3, y: 220, x: -7 });
  }
  if (rp3Position === 25) {
    TweenMax.to(yp, { duration: 0.3, y: 164, x: -28 });
  }
  if (rp3Position === 26) {
    TweenMax.to(yp, { duration: 0.3, y: 110, x: -55 });
  }
  if (rp3Position === 27) {
    TweenMax.to(yp, { duration: 0.3, y: 136, x: -147 });
  }

  rp3Position++;
}

function moveRed4(yp) {
  yp.style.top = "23px";
  yp.style.right = "24px";
  // moves--;
  // movesLeft.innerHTML = "Moves left: " + moves;

  if (rp4Position === 0) {
    TweenMax.to(yp, { duration: 0.3, y: 67, x: -100 });
  }
  if (rp4Position === 1) {
    TweenMax.to(yp, { duration: 0.3, y: 34, x: -150 });
  }
  if (rp4Position === 2) {
    TweenMax.to(yp, { duration: 0.3, y: 12, x: -205 });
  }
  if (rp4Position === 3) {
    TweenMax.to(yp, { duration: 0.3, y: 5, x: -265 });
  }
  if (rp4Position === 4) {
    TweenMax.to(yp, { duration: 0.3, y: 12, x: -325 });
  }
  if (rp4Position === 5) {
    TweenMax.to(yp, { duration: 0.3, y: 34, x: -385 });
  }
  if (rp4Position === 6) {
    TweenMax.to(yp, { duration: 0.3, y: 67, x: -433 });
  }
  if (rp4Position === 7) {
    TweenMax.to(yp, { duration: 0.3, y: 112, x: -474 });
  }
  if (rp4Position === 8) {
    TweenMax.to(yp, { duration: 0.3, y: 162, x: -505 });
  }
  if (rp4Position === 9) {
    TweenMax.to(yp, { duration: 0.3, y: 222, x: -523 });
  }
  if (rp4Position === 10) {
    TweenMax.to(yp, { duration: 0.3, y: 285, x: -525 });
  }
  if (rp4Position === 11) {
    TweenMax.to(yp, { duration: 0.3, y: 344, x: -515 });
  }
  if (rp4Position === 12) {
    TweenMax.to(yp, { duration: 0.3, y: 400, x: -490 });
  }
  if (rp4Position === 13) {
    TweenMax.to(yp, { duration: 0.3, y: 446, x: -453 });
  }
  if (rp4Position === 14) {
    TweenMax.to(yp, { duration: 0.3, y: 486, x: -406 });
  }
  if (rp4Position === 15) {
    TweenMax.to(yp, { duration: 0.3, y: 510, x: -353 });
  }
  if (rp4Position === 16) {
    TweenMax.to(yp, { duration: 0.3, y: 528, x: -295 });
  }
  if (rp4Position === 17) {
    TweenMax.to(yp, { duration: 0.3, y: 525, x: -235 });
  }
  if (rp4Position === 18) {
    TweenMax.to(yp, { duration: 0.3, y: 510, x: -180 });
  }
  if (rp4Position === 19) {
    TweenMax.to(yp, { duration: 0.3, y: 485, x: -124 });
  }
  if (rp4Position === 20) {
    TweenMax.to(yp, { duration: 0.3, y: 448, x: -75 });
  }
  if (rp4Position === 21) {
    TweenMax.to(yp, { duration: 0.3, y: 396, x: -38 });
  }
  if (rp4Position === 22) {
    TweenMax.to(yp, { duration: 0.3, y: 340, x: -15 });
  }
  if (rp4Position === 23) {
    TweenMax.to(yp, { duration: 0.3, y: 280, x: -5 });
  }
  if (rp4Position === 24) {
    TweenMax.to(yp, { duration: 0.3, y: 220, x: -7 });
  }
  if (rp4Position === 25) {
    TweenMax.to(yp, { duration: 0.3, y: 164, x: -28 });
  }
  if (rp4Position === 26) {
    TweenMax.to(yp, { duration: 0.3, y: 110, x: -55 });
  }
  if (rp4Position === 27) {
    TweenMax.to(yp, { duration: 0.3, y: 112, x: -122 });
  }

  rp4Position++;
}
