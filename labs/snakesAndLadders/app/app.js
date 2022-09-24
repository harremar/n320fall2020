let diceFrame = document.getElementById("diceFrame");

newTurn.style.display = "none"; //nextTurn button is now visible

dieBlocker = document.getElementById("dieBlocker");

let p1 = document.getElementById("player1");
let p2 = document.getElementById("player2");

let p1spot = 1;
let p2spot = 1;
let p1spotMove = 0;
let p2spotMove = 0;
let player1Spot = 0;
let player2Spot = 0;

let spaceMove = 1;

let spin = 0;
//THIS IS FOR ROLLING DICE
class randomPicker {
  items;

  constructor(items) {
    //store the use set of items
    this.items = items;
  }

  //returns a random entry in the array
  pickRandom() {
    return this.items[Math.floor(Math.random() * this.items.length)];
  }
}

//lets start with player 1
let player = 1;
//now making dice
class diceRoll extends randomPicker {
  outputElement;
  turnsElement;
  constructor(element) {
    super([1, 2, 3, 4, 5, 6]); //these are all of the possiblities of rolling a dice
    this.outputElement = element;
  }

  //roll function that randomly picks roll number
  roll() {
    let rolled = this.pickRandom(); //dice roll...getting random number

    //shows output to user
    this.outputElement.innerHTML = "You rolled " + rolled;

    newTurn.style.display = "flex"; //nextTurn button is now visible
    dieBlocker.style.display = "flex"; //nextTurn button is now visible

    //creating a time out... wait 0.4 seconds to change the image
    setTimeout(function () {
      document.getElementById("diceFrame").style.backgroundImage =
        "url('../images/dice-six-faces-" + rolled + ".svg')";
      //updating the die
    }, 400);

    spin = spin + 360; //each time it rolls add 360
    // dice jump up
    TweenMax.to(diceFrame, { duration: 0.3, y: -70 });
    // dice going down
    TweenMax.to(diceFrame, { duration: 0.2, y: 0, delay: 0.31 });
    // dice spinning
    TweenLite.to(diceFrame, { duration: 0.5, rotate: spin }); //calling spin
    this.movePlayer(rolled, player);
    // console.log(player + " " + rolled);
    dieBlocker.style.display = "flex"; //cannot reclick the dice
  }

  movePlayer(playerMove, player) {
    let moving = 0;
    // console.log("Player " + player + " moved " + playerMove);
    let currentPlayer = "p" + player;

    if (currentPlayer === "p1") {
      // p1spot = 9;
      moving = playerMove;
      console.log(playerMove);
      console.log(moving);
      p1spotMove = p1spotMove + moving;
      // p1spotMove = 74;

      console.log(p1spotMove);
      if (p1spotMove < 10) {
        TweenMax.to(p1, {
          duration: 0.3 * moving,
          y: 0,
          x: 50 * p1spotMove,
        });
      } else if (p1spotMove === 10) {
        TweenMax.to(p1, {
          duration: 0.3 * moving,
          y: -50,
          x: 450,
        });
      } else if (p1spotMove === 11) {
        TweenMax.to(p1, {
          duration: 0.3 * moving,
          y: -50,
          x: 400,
        });
      } else if (p1spotMove === 12) {
        TweenMax.to(p1, {
          duration: 0.3 * moving,
          y: -50,
          x: 350,
        });
      } else if (p1spotMove === 13) {
        TweenMax.to(p1, {
          duration: 0.3 * moving,
          y: -50,
          x: 300,
        });
      } else if (p1spotMove === 14) {
        TweenMax.to(p1, {
          duration: 0.3 * moving,
          y: -50,
          x: 250,
        });
      } else if (p1spotMove === 15) {
        TweenMax.to(p1, {
          duration: 0.3 * moving,
          y: -50,
          x: 200,
        });
      } else if (p1spotMove === 16) {
        TweenMax.to(p1, {
          duration: 0.3 * moving,
          y: -50,
          x: 150,
        });
      } else if (p1spotMove === 17) {
        TweenMax.to(p1, {
          duration: 0.3 * moving,
          y: -50,
          x: 100,
        });
      } else if (p1spotMove === 18) {
        TweenMax.to(p1, {
          duration: 0.3 * moving,
          y: -50,
          x: 50,
        });
      } else if (p1spotMove === 19) {
        TweenMax.to(p1, {
          duration: 0.3 * moving,
          y: -50,
          x: 0,
        });
        setTimeout(function () {
          TweenMax.to(p1, {
            duration: 0.3,
            y: -150,
            x: 0,
          });
        }, 2000);
        p1spotMove = 39;
        // console.log(moving);
      } else if (p1spotMove === 20) {
        TweenMax.to(p1, {
          duration: 0.3,
          y: -100,
          x: 0,
        });
      } else if (p1spotMove === 21) {
        TweenMax.to(p1, {
          duration: 0.3,
          y: -100,
          x: 50,
        });
      } else if (p1spotMove === 22) {
        TweenMax.to(p1, {
          duration: 0.3,
          y: -100,
          x: 100,
        });
      } else if (p1spotMove === 23) {
        TweenMax.to(p1, {
          duration: 0.3,
          y: -100,
          x: 150,
        });
      } else if (p1spotMove === 24) {
        TweenMax.to(p1, {
          duration: 0.3,
          y: -100,
          x: 200,
        });
      } else if (p1spotMove === 25) {
        TweenMax.to(p1, {
          duration: 0.3,
          y: -100,
          x: 250,
        });
      } else if (p1spotMove === 26) {
        TweenMax.to(p1, {
          duration: 0.3,
          y: -100,
          x: 300,
        });
      } else if (p1spotMove === 27) {
        TweenMax.to(p1, {
          duration: 0.3,
          y: -100,
          x: 350,
        });
      } else if (p1spotMove === 28) {
        TweenMax.to(p1, {
          duration: 0.3,
          y: -100,
          x: 400,
        });
        setTimeout(function () {
          TweenMax.to(p1, {
            duration: 0.3,
            y: 0,
            x: 400,
          });
        }, 2000);
        p1spotMove = 8;
      } else if (p1spotMove === 29) {
        TweenMax.to(p1, {
          duration: 0.3,
          y: -100,
          x: 450,
        });
      } else if (p1spotMove === 30) {
        TweenMax.to(p1, {
          duration: 0.3 * moving,
          y: -150,
          x: 450,
        });
      } else if (p1spotMove === 31) {
        TweenMax.to(p1, {
          duration: 0.3 * moving,
          y: -150,
          x: 400,
        });
        setTimeout(function () {
          TweenMax.to(p1, {
            duration: 0.3,
            y: -250,
            x: 300,
          });
        }, 2000);
        p1spotMove = 53;
      } else if (p1spotMove === 32) {
        TweenMax.to(p1, {
          duration: 0.3 * moving,
          y: -150,
          x: 350,
        });
      } else if (p1spotMove === 33) {
        TweenMax.to(p1, {
          duration: 0.3 * moving,
          y: -150,
          x: 300,
        });
      } else if (p1spotMove === 34) {
        TweenMax.to(p1, {
          duration: 0.3 * moving,
          y: -150,
          x: 250,
        });
      } else if (p1spotMove === 35) {
        TweenMax.to(p1, {
          duration: 0.3 * moving,
          y: -150,
          x: 200,
        });
      } else if (p1spotMove === 36) {
        TweenMax.to(p1, {
          duration: 0.3 * moving,
          y: -150,
          x: 150,
        });
      } else if (p1spotMove === 37) {
        TweenMax.to(p1, {
          duration: 0.3 * moving,
          y: -150,
          x: 100,
        });
      } else if (p1spotMove === 38) {
        TweenMax.to(p1, {
          duration: 0.3 * moving,
          y: -150,
          x: 50,
        });
      } else if (p1spotMove === 39) {
        TweenMax.to(p1, {
          duration: 0.3 * moving,
          y: -150,
          x: 0,
        });
      } else if (p1spotMove === 40) {
        TweenMax.to(p1, {
          duration: 0.3 * moving,
          y: -200,
          x: 0,
        });
      } else if (p1spotMove === 41) {
        TweenMax.to(p1, {
          duration: 0.3 * moving,
          y: -200,
          x: 50,
        });
      } else if (p1spotMove === 42) {
        TweenMax.to(p1, {
          duration: 0.3 * moving,
          y: -200,
          x: 100,
        });
      } else if (p1spotMove === 43) {
        TweenMax.to(p1, {
          duration: 0.3 * moving,
          y: -200,
          x: 150,
        });
        setTimeout(function () {
          TweenMax.to(p1, {
            duration: 0.3,
            y: -250,
            x: 200,
          });
        }, 2000);
        p1spotMove = 55;
      } else if (p1spotMove === 44) {
        TweenMax.to(p1, {
          duration: 0.3 * moving,
          y: -200,
          x: 200,
        });
      } else if (p1spotMove === 45) {
        TweenMax.to(p1, {
          duration: 0.3 * moving,
          y: -200,
          x: 250,
        });
        setTimeout(function () {
          TweenMax.to(p1, {
            duration: 0.3,
            y: -50,
            x: 200,
          });
        }, 2000);
        p1spotMove = 15;
      } else if (p1spotMove === 46) {
        TweenMax.to(p1, {
          duration: 0.3 * moving,
          y: -200,
          x: 300,
        });
      } else if (p1spotMove === 47) {
        TweenMax.to(p1, {
          duration: 0.3 * moving,
          y: -200,
          x: 350,
        });
      } else if (p1spotMove === 48) {
        TweenMax.to(p1, {
          duration: 0.3 * moving,
          y: -200,
          x: 400,
        });
        // console.log(moving);
      } else if (p1spotMove === 49) {
        TweenMax.to(p1, {
          duration: 0.3 * moving,
          y: -200,
          x: 450,
        });
        // console.log(moving);
      } else if (p1spotMove === 50) {
        TweenMax.to(p1, {
          duration: 0.3,
          y: -250,
          x: 450,
        });
      } else if (p1spotMove === 51) {
        TweenMax.to(p1, {
          duration: 0.3,
          y: -250,
          x: 400,
        });
      } else if (p1spotMove === 52) {
        TweenMax.to(p1, {
          duration: 0.3,
          y: -250,
          x: 350,
        });
      } else if (p1spotMove === 53) {
        TweenMax.to(p1, {
          duration: 0.3,
          y: -250,
          x: 300,
        });
      } else if (p1spotMove === 54) {
        TweenMax.to(p1, {
          duration: 0.3,
          y: -250,
          x: 250,
        });
      } else if (p1spotMove === 55) {
        TweenMax.to(p1, {
          duration: 0.3,
          y: -250,
          x: 200,
        });
      } else if (p1spotMove === 56) {
        TweenMax.to(p1, {
          duration: 0.3,
          y: -250,
          x: 150,
        });
      } else if (p1spotMove === 57) {
        TweenMax.to(p1, {
          duration: 0.3,
          y: -250,
          x: 100,
        });
      } else if (p1spotMove === 58) {
        TweenMax.to(p1, {
          duration: 0.3,
          y: -250,
          x: 50,
        });
      } else if (p1spotMove === 59) {
        TweenMax.to(p1, {
          duration: 0.3,
          y: -250,
          x: 0,
        });
      } else if (p1spotMove === 60) {
        TweenMax.to(p1, {
          duration: 0.3 * moving,
          y: -300,
          x: 0,
        });
        setTimeout(function () {
          TweenMax.to(p1, {
            duration: 0.3,
            y: -350,
            x: 150,
          });
        }, 2000);
        p1spotMove = 76;
      } else if (p1spotMove === 61) {
        TweenMax.to(p1, {
          duration: 0.3 * moving,
          y: -300,
          x: 50,
        });
      } else if (p1spotMove === 62) {
        TweenMax.to(p1, {
          duration: 0.3 * moving,
          y: -300,
          x: 100,
        });
      } else if (p1spotMove === 63) {
        TweenMax.to(p1, {
          duration: 0.3 * moving,
          y: -300,
          x: 150,
        });
      } else if (p1spotMove === 64) {
        TweenMax.to(p1, {
          duration: 0.3 * moving,
          y: -300,
          x: 200,
        });
      } else if (p1spotMove === 65) {
        TweenMax.to(p1, {
          duration: 0.3 * moving,
          y: -300,
          x: 250,
        });
      } else if (p1spotMove === 66) {
        TweenMax.to(p1, {
          duration: 0.3 * moving,
          y: -300,
          x: 300,
        });
      } else if (p1spotMove === 67) {
        TweenMax.to(p1, {
          duration: 0.3 * moving,
          y: -300,
          x: 350,
        });
      } else if (p1spotMove === 68) {
        TweenMax.to(p1, {
          duration: 0.3 * moving,
          y: -300,
          x: 400,
        });
      } else if (p1spotMove === 69) {
        TweenMax.to(p1, {
          duration: 0.3 * moving,
          y: -300,
          x: 450,
        });
      } else if (p1spotMove === 70) {
        TweenMax.to(p1, {
          duration: 0.3 * moving,
          y: -350,
          x: 450,
        });
      } else if (p1spotMove === 71) {
        TweenMax.to(p1, {
          duration: 0.3 * moving,
          y: -350,
          x: 400,
        });
      } else if (p1spotMove === 72) {
        TweenMax.to(p1, {
          duration: 0.3 * moving,
          y: -350,
          x: 350,
        });
      } else if (p1spotMove === 73) {
        TweenMax.to(p1, {
          duration: 0.3 * moving,
          y: -350,
          x: 300,
        });
      } else if (p1spotMove === 74) {
        TweenMax.to(p1, {
          duration: 0.3 * moving,
          y: -350,
          x: 250,
        });
        setTimeout(function () {
          TweenMax.to(p1, {
            duration: 0.3,
            y: -450,
            x: 250,
          });
        }, 2000);
        p1spotMove = 94;
      } else if (p1spotMove === 75) {
        TweenMax.to(p1, {
          duration: 0.3 * moving,
          y: -350,
          x: 200,
        });
      } else if (p1spotMove === 76) {
        TweenMax.to(p1, {
          duration: 0.3 * moving,
          y: -350,
          x: 150,
        });
      } else if (p1spotMove === 77) {
        TweenMax.to(p1, {
          duration: 0.3 * moving,
          y: -350,
          x: 100,
        });
      } else if (p1spotMove === 78) {
        TweenMax.to(p1, {
          duration: 0.3 * moving,
          y: -350,
          x: 50,
        });
      } else if (p1spotMove === 79) {
        TweenMax.to(p1, {
          duration: 0.3 * moving,
          y: -350,
          x: 0,
        });
      } else if (p1spotMove === 80) {
        TweenMax.to(p1, {
          duration: 0.3 * moving,
          y: -400,
          x: 0,
        });
      } else if (p1spotMove === 81) {
        TweenMax.to(p1, {
          duration: 0.3 * moving,
          y: -400,
          x: 50,
        });
      } else if (p1spotMove === 82) {
        TweenMax.to(p1, {
          duration: 0.3 * moving,
          y: -400,
          x: 100,
        });
      } else if (p1spotMove === 83) {
        TweenMax.to(p1, {
          duration: 0.3 * moving,
          y: -400,
          x: 150,
        });
      } else if (p1spotMove === 84) {
        TweenMax.to(p1, {
          duration: 0.3 * moving,
          y: -400,
          x: 200,
        });
      } else if (p1spotMove === 85) {
        TweenMax.to(p1, {
          duration: 0.3 * moving,
          y: -400,
          x: 250,
        });
      } else if (p1spotMove === 86) {
        TweenMax.to(p1, {
          duration: 0.3 * moving,
          y: -400,
          x: 300,
        });
        setTimeout(function () {
          TweenMax.to(p1, {
            duration: 0.3,
            y: -200,
            x: 450,
          });
        }, 2000);
        p1spotMove = 49;
      } else if (p1spotMove === 87) {
        TweenMax.to(p1, {
          duration: 0.3 * moving,
          y: -400,
          x: 350,
        });
      } else if (p1spotMove === 88) {
        TweenMax.to(p1, {
          duration: 0.3 * moving,
          y: -400,
          x: 400,
        });
      } else if (p1spotMove === 89) {
        TweenMax.to(p1, {
          duration: 0.3 * moving,
          y: -400,
          x: 450,
        });
      } else if (p1spotMove === 90) {
        TweenMax.to(p1, {
          duration: 0.3 * moving,
          y: -450,
          x: 450,
        });
      } else if (p1spotMove === 91) {
        TweenMax.to(p1, {
          duration: 0.3 * moving,
          y: -450,
          x: 400,
        });
        setTimeout(function () {
          TweenMax.to(p1, {
            duration: 0.3,
            y: -350,
            x: 400,
          });
        }, 2000);
        p1spotMove = 71;
      } else if (p1spotMove === 92) {
        TweenMax.to(p1, {
          duration: 0.3 * moving,
          y: -450,
          x: 350,
        });
      } else if (p1spotMove === 93 || p1spotMove === 105) {
        TweenMax.to(p1, {
          duration: 0.3 * moving,
          y: -450,
          x: 300,
        });
        p1spotMove = 93;
      } else if (p1spotMove === 94 || p1spotMove === 104) {
        TweenMax.to(p1, {
          duration: 0.3 * moving,
          y: -450,
          x: 250,
        });
        p1spotMove = 94;
      } else if (p1spotMove === 95 || p1spotMove === 103) {
        TweenMax.to(p1, {
          duration: 0.3 * moving,
          y: -450,
          x: 200,
        });
        p1spotMove = 95;
      } else if (p1spotMove === 96 || p1spotMove === 102) {
        TweenMax.to(p1, {
          duration: 0.3 * moving,
          y: -450,
          x: 150,
        });
        p1spotMove = 96;
      } else if (p1spotMove === 97 || p1spotMove === 101) {
        TweenMax.to(p1, {
          duration: 0.3 * moving,
          y: -450,
          x: 100,
        });
        setTimeout(function () {
          TweenMax.to(p1, {
            duration: 0.3,
            y: -250,
            x: 50,
          });
        }, 2000);
        p1spotMove = 58;
      } else if (p1spotMove === 98 || p1spotMove === 100) {
        TweenMax.to(p1, {
          duration: 0.3 * moving,
          y: -450,
          x: 50,
        });
        p1spotMove = 98;
      } else if (p1spotMove === 99) {
        TweenMax.to(p1, {
          duration: 0.3 * moving,
          y: -450,
          x: 0,
        });
        console.log("you win");
      }

      player1Spot = p1spotMove + 1;
      console.log("player 1 spot: " + p1spotMove + 1);
      player1SpotMessage.innerHTML = "Player 1 spot: " + player1Spot;
    }
    if (currentPlayer === "p2") {
      // p1spot = 9;
      moving = playerMove;
      console.log(playerMove);
      console.log(moving);
      p2spotMove = p2spotMove + moving;
      // p2spotMove = 20;

      console.log(p2spotMove);
      if (p2spotMove < 10) {
        TweenMax.to(p2, {
          duration: 0.3 * moving,
          y: 0,
          x: 50 * p2spotMove,
        });
      } else if (p2spotMove === 10) {
        TweenMax.to(p2, {
          duration: 0.3 * moving,
          y: -50,
          x: 450,
        });
      } else if (p2spotMove === 11) {
        TweenMax.to(p2, {
          duration: 0.3 * moving,
          y: -50,
          x: 400,
        });
      } else if (p2spotMove === 12) {
        TweenMax.to(p2, {
          duration: 0.3 * moving,
          y: -50,
          x: 350,
        });
      } else if (p2spotMove === 13) {
        TweenMax.to(p2, {
          duration: 0.3 * moving,
          y: -50,
          x: 300,
        });
      } else if (p2spotMove === 14) {
        TweenMax.to(p2, {
          duration: 0.3 * moving,
          y: -50,
          x: 250,
        });
      } else if (p2spotMove === 15) {
        TweenMax.to(p1, {
          duration: 0.3 * moving,
          y: -50,
          x: 200,
        });
      } else if (p2spotMove === 16) {
        TweenMax.to(p2, {
          duration: 0.3 * moving,
          y: -50,
          x: 150,
        });
      } else if (p2spotMove === 17) {
        TweenMax.to(p2, {
          duration: 0.3 * moving,
          y: -50,
          x: 100,
        });
      } else if (p2spotMove === 18) {
        TweenMax.to(p2, {
          duration: 0.3 * moving,
          y: -50,
          x: 50,
        });
      } else if (p2spotMove === 19) {
        TweenMax.to(p2, {
          duration: 0.3 * moving,
          y: -50,
          x: 0,
        });
        setTimeout(function () {
          TweenMax.to(p2, {
            duration: 0.3,
            y: -150,
            x: 0,
          });
        }, 2000);
        p2spotMove = 39;
        // console.log(moving);
      } else if (p2spotMove === 20) {
        TweenMax.to(p2, {
          duration: 0.3,
          y: -100,
          x: 0,
        });
      } else if (p2spotMove === 21) {
        TweenMax.to(p2, {
          duration: 0.3,
          y: -100,
          x: 50,
        });
      } else if (p2spotMove === 22) {
        TweenMax.to(p2, {
          duration: 0.3,
          y: -100,
          x: 100,
        });
      } else if (p2spotMove === 23) {
        TweenMax.to(p2, {
          duration: 0.3,
          y: -100,
          x: 150,
        });
      } else if (p2spotMove === 24) {
        TweenMax.to(p2, {
          duration: 0.3,
          y: -100,
          x: 200,
        });
      } else if (p2spotMove === 25) {
        TweenMax.to(p2, {
          duration: 0.3,
          y: -100,
          x: 250,
        });
      } else if (p2spotMove === 26) {
        TweenMax.to(p2, {
          duration: 0.3,
          y: -100,
          x: 300,
        });
      } else if (p2spotMove === 27) {
        TweenMax.to(p2, {
          duration: 0.3,
          y: -100,
          x: 350,
        });
      } else if (p2spotMove === 28) {
        TweenMax.to(p2, {
          duration: 0.3,
          y: -100,
          x: 400,
        });
        setTimeout(function () {
          TweenMax.to(p2, {
            duration: 0.3,
            y: 0,
            x: 400,
          });
        }, 2000);
        p2spotMove = 8;
      } else if (p2spotMove === 29) {
        TweenMax.to(p2, {
          duration: 0.3,
          y: -100,
          x: 450,
        });
      } else if (p2spotMove === 30) {
        TweenMax.to(p2, {
          duration: 0.3 * moving,
          y: -150,
          x: 450,
        });
      } else if (p2spotMove === 31) {
        TweenMax.to(p2, {
          duration: 0.3 * moving,
          y: -150,
          x: 400,
        });
        setTimeout(function () {
          TweenMax.to(p2, {
            duration: 0.3,
            y: -250,
            x: 300,
          });
        }, 2000);
        p2spotMove = 53;
      } else if (p2spotMove === 32) {
        TweenMax.to(p2, {
          duration: 0.3 * moving,
          y: -150,
          x: 350,
        });
      } else if (p2spotMove === 33) {
        TweenMax.to(p2, {
          duration: 0.3 * moving,
          y: -150,
          x: 300,
        });
      } else if (p2spotMove === 34) {
        TweenMax.to(p2, {
          duration: 0.3 * moving,
          y: -150,
          x: 250,
        });
      } else if (p2spotMove === 35) {
        TweenMax.to(p2, {
          duration: 0.3 * moving,
          y: -150,
          x: 200,
        });
      } else if (p2spotMove === 36) {
        TweenMax.to(p2, {
          duration: 0.3 * moving,
          y: -150,
          x: 150,
        });
      } else if (p2spotMove === 37) {
        TweenMax.to(p2, {
          duration: 0.3 * moving,
          y: -150,
          x: 100,
        });
      } else if (p2spotMove === 38) {
        TweenMax.to(p2, {
          duration: 0.3 * moving,
          y: -150,
          x: 50,
        });
      } else if (p2spotMove === 39) {
        TweenMax.to(p2, {
          duration: 0.3 * moving,
          y: -150,
          x: 0,
        });
      } else if (p2spotMove === 40) {
        TweenMax.to(p2, {
          duration: 0.3 * moving,
          y: -200,
          x: 0,
        });
      } else if (p2spotMove === 41) {
        TweenMax.to(p2, {
          duration: 0.3 * moving,
          y: -200,
          x: 50,
        });
      } else if (p2spotMove === 42) {
        TweenMax.to(p2, {
          duration: 0.3 * moving,
          y: -200,
          x: 100,
        });
      } else if (p2spotMove === 43) {
        TweenMax.to(p2, {
          duration: 0.3 * moving,
          y: -200,
          x: 150,
        });
        setTimeout(function () {
          TweenMax.to(p2, {
            duration: 0.3,
            y: -250,
            x: 200,
          });
        }, 2000);
        p2spotMove = 55;
      } else if (p2spotMove === 44) {
        TweenMax.to(p2, {
          duration: 0.3 * moving,
          y: -200,
          x: 200,
        });
      } else if (p2spotMove === 45) {
        TweenMax.to(p2, {
          duration: 0.3 * moving,
          y: -200,
          x: 250,
        });
        setTimeout(function () {
          TweenMax.to(p2, {
            duration: 0.3,
            y: -50,
            x: 200,
          });
        }, 2000);
        p2spotMove = 15;
      } else if (p2spotMove === 46) {
        TweenMax.to(p2, {
          duration: 0.3 * moving,
          y: -200,
          x: 300,
        });
      } else if (p2spotMove === 47) {
        TweenMax.to(p2, {
          duration: 0.3 * moving,
          y: -200,
          x: 350,
        });
      } else if (p2spotMove === 48) {
        TweenMax.to(p2, {
          duration: 0.3 * moving,
          y: -200,
          x: 400,
        });
        // console.log(moving);
      } else if (p1spotMove === 49) {
        TweenMax.to(p2, {
          duration: 0.3 * moving,
          y: -200,
          x: 450,
        });
        // console.log(moving);
      } else if (p2spotMove === 50) {
        TweenMax.to(p2, {
          duration: 0.3,
          y: -250,
          x: 450,
        });
      } else if (p2spotMove === 51) {
        TweenMax.to(p2, {
          duration: 0.3,
          y: -250,
          x: 400,
        });
      } else if (p2spotMove === 52) {
        TweenMax.to(p2, {
          duration: 0.3,
          y: -250,
          x: 350,
        });
      } else if (p2spotMove === 53) {
        TweenMax.to(p2, {
          duration: 0.3,
          y: -250,
          x: 300,
        });
      } else if (p2spotMove === 54) {
        TweenMax.to(p2, {
          duration: 0.3,
          y: -250,
          x: 250,
        });
      } else if (p2spotMove === 55) {
        TweenMax.to(p2, {
          duration: 0.3,
          y: -250,
          x: 200,
        });
      } else if (p2spotMove === 56) {
        TweenMax.to(p2, {
          duration: 0.3,
          y: -250,
          x: 150,
        });
      } else if (p2spotMove === 57) {
        TweenMax.to(p2, {
          duration: 0.3,
          y: -250,
          x: 100,
        });
      } else if (p2spotMove === 58) {
        TweenMax.to(p2, {
          duration: 0.3,
          y: -250,
          x: 50,
        });
      } else if (p2spotMove === 59) {
        TweenMax.to(p2, {
          duration: 0.3,
          y: -250,
          x: 0,
        });
      } else if (p2spotMove === 60) {
        TweenMax.to(p2, {
          duration: 0.3 * moving,
          y: -300,
          x: 0,
        });
        setTimeout(function () {
          TweenMax.to(p2, {
            duration: 0.3,
            y: -350,
            x: 150,
          });
        }, 2000);
        p2spotMove = 76;
      } else if (p2spotMove === 61) {
        TweenMax.to(p2, {
          duration: 0.3 * moving,
          y: -300,
          x: 50,
        });
      } else if (p2spotMove === 62) {
        TweenMax.to(p2, {
          duration: 0.3 * moving,
          y: -300,
          x: 100,
        });
      } else if (p2spotMove === 63) {
        TweenMax.to(p2, {
          duration: 0.3 * moving,
          y: -300,
          x: 150,
        });
      } else if (p2spotMove === 64) {
        TweenMax.to(p2, {
          duration: 0.3 * moving,
          y: -300,
          x: 200,
        });
      } else if (p2spotMove === 65) {
        TweenMax.to(p2, {
          duration: 0.3 * moving,
          y: -300,
          x: 250,
        });
      } else if (p2spotMove === 66) {
        TweenMax.to(p2, {
          duration: 0.3 * moving,
          y: -300,
          x: 300,
        });
      } else if (p2spotMove === 67) {
        TweenMax.to(p2, {
          duration: 0.3 * moving,
          y: -300,
          x: 350,
        });
      } else if (p2spotMove === 68) {
        TweenMax.to(p2, {
          duration: 0.3 * moving,
          y: -300,
          x: 400,
        });
      } else if (p2spotMove === 69) {
        TweenMax.to(p2, {
          duration: 0.3 * moving,
          y: -300,
          x: 450,
        });
      } else if (p2spotMove === 70) {
        TweenMax.to(p2, {
          duration: 0.3 * moving,
          y: -350,
          x: 450,
        });
      } else if (p2spotMove === 71) {
        TweenMax.to(p2, {
          duration: 0.3 * moving,
          y: -350,
          x: 400,
        });
      } else if (p2spotMove === 72) {
        TweenMax.to(p2, {
          duration: 0.3 * moving,
          y: -350,
          x: 350,
        });
      } else if (p2spotMove === 73) {
        TweenMax.to(p2, {
          duration: 0.3 * moving,
          y: -350,
          x: 300,
        });
      } else if (p2spotMove === 74) {
        TweenMax.to(p2, {
          duration: 0.3 * moving,
          y: -350,
          x: 250,
        });
        setTimeout(function () {
          TweenMax.to(p2, {
            duration: 0.3,
            y: -450,
            x: 250,
          });
        }, 2000);
        p2spotMove = 94;
      } else if (p2spotMove === 75) {
        TweenMax.to(p2, {
          duration: 0.3 * moving,
          y: -350,
          x: 200,
        });
      } else if (p2spotMove === 76) {
        TweenMax.to(p2, {
          duration: 0.3 * moving,
          y: -350,
          x: 150,
        });
      } else if (p2spotMove === 77) {
        TweenMax.to(p2, {
          duration: 0.3 * moving,
          y: -350,
          x: 100,
        });
      } else if (p2spotMove === 78) {
        TweenMax.to(p2, {
          duration: 0.3 * moving,
          y: -350,
          x: 50,
        });
      } else if (p2spotMove === 79) {
        TweenMax.to(p2, {
          duration: 0.3 * moving,
          y: -350,
          x: 0,
        });
      } else if (p2spotMove === 80) {
        TweenMax.to(p2, {
          duration: 0.3 * moving,
          y: -400,
          x: 0,
        });
      } else if (p2spotMove === 81) {
        TweenMax.to(p2, {
          duration: 0.3 * moving,
          y: -400,
          x: 50,
        });
      } else if (p2spotMove === 82) {
        TweenMax.to(p2, {
          duration: 0.3 * moving,
          y: -400,
          x: 100,
        });
      } else if (p2spotMove === 83) {
        TweenMax.to(p2, {
          duration: 0.3 * moving,
          y: -400,
          x: 150,
        });
      } else if (p2spotMove === 84) {
        TweenMax.to(p2, {
          duration: 0.3 * moving,
          y: -400,
          x: 200,
        });
      } else if (p2spotMove === 85) {
        TweenMax.to(p2, {
          duration: 0.3 * moving,
          y: -400,
          x: 250,
        });
      } else if (p2spotMove === 86) {
        TweenMax.to(p2, {
          duration: 0.3 * moving,
          y: -400,
          x: 300,
        });
        setTimeout(function () {
          TweenMax.to(p2, {
            duration: 0.3,
            y: -200,
            x: 450,
          });
        }, 2000);
        p2spotMove = 49;
      } else if (p2spotMove === 87) {
        TweenMax.to(p2, {
          duration: 0.3 * moving,
          y: -400,
          x: 350,
        });
      } else if (p2spotMove === 88) {
        TweenMax.to(p2, {
          duration: 0.3 * moving,
          y: -400,
          x: 400,
        });
      } else if (p2spotMove === 89) {
        TweenMax.to(p2, {
          duration: 0.3 * moving,
          y: -400,
          x: 450,
        });
      } else if (p2spotMove === 90) {
        TweenMax.to(p2, {
          duration: 0.3 * moving,
          y: -450,
          x: 450,
        });
      } else if (p2spotMove === 91) {
        TweenMax.to(p2, {
          duration: 0.3 * moving,
          y: -450,
          x: 400,
        });
        setTimeout(function () {
          TweenMax.to(p2, {
            duration: 0.3,
            y: -350,
            x: 400,
          });
        }, 2000);
        p2spotMove = 71;
      } else if (p2spotMove === 92) {
        TweenMax.to(p2, {
          duration: 0.3 * moving,
          y: -450,
          x: 350,
        });
      } else if (p2spotMove === 93 || p2spotMove === 105) {
        TweenMax.to(p2, {
          duration: 0.3 * moving,
          y: -450,
          x: 300,
        });
        p2spotMove = 93;
      } else if (p2spotMove === 94 || p2spotMove === 104) {
        TweenMax.to(p2, {
          duration: 0.3 * moving,
          y: -450,
          x: 250,
        });
        p1spotMove = 94;
      } else if (p2spotMove === 95 || p2spotMove === 103) {
        TweenMax.to(p2, {
          duration: 0.3 * moving,
          y: -450,
          x: 200,
        });
        p2spotMove = 95;
      } else if (p2spotMove === 96 || p2spotMove === 102) {
        TweenMax.to(p2, {
          duration: 0.3 * moving,
          y: -450,
          x: 150,
        });
        p2spotMove = 96;
      } else if (p2spotMove === 97 || p2spotMove === 101) {
        TweenMax.to(p2, {
          duration: 0.3 * moving,
          y: -450,
          x: 100,
        });
        setTimeout(function () {
          TweenMax.to(p2, {
            duration: 0.3,
            y: -250,
            x: 50,
          });
        }, 2000);
        p2spotMove = 58;
      } else if (p2spotMove === 98 || p2spotMove === 100) {
        TweenMax.to(p2, {
          duration: 0.3 * moving,
          y: -450,
          x: 50,
        });
        p2spotMove = 98;
      } else if (p2spotMove === 99) {
        TweenMax.to(p2, {
          duration: 0.3 * moving,
          y: -450,
          x: 0,
        });
        console.log("you win");
      }

      player2Spot = p2spotMove + 1;
      player2SpotMessage.innerHTML = "Player 2 spot: " + player2Spot;
    }
  }

  next() {
    newTurn.style.display = "none"; //nextTurn button is invisible. Next player needs to roll
    dieBlocker.style.display = "none";

    //only 4 players in the game. Go back to one once player reaches 4
    if (player === 1) {
      this.outputElement.innerHTML =
        "Player 1, end move. Now it's player 2 turn"; //reset saying
    } else {
      this.outputElement.innerHTML =
        "Player 2, end move. Now it's player 1 turn"; //reset saying
      player = 0;
    }
    newTurn.style.display = "none"; //don't show next turn button

    console.log(player);
    player++;
  }
}

let myRoll = new diceRoll(document.getElementById("Response"));

class playerPons {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  playMove() {}
}
let yellowTeam = new playerPons("yellow", 4);
let redTeam = new playerPons("red", 4);
let blueTeam = new playerPons("blue", 4);
let greenTeam = new playerPons("green", 4);

// Creating a Title Class -- simple and easy :)
class Title {
  title;
  constructor(title) {
    // console.log("the title of the game is " + title);
    document.getElementById("title").innerHTML = title;
  }
}

let gameTitle = new Title("Snakes & Ladders");
