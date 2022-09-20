let diceFrame = document.getElementById("diceFrame");

newTurn.style.display = "none"; //nextTurn button is now visible

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
  }

  next() {
    newTurn.style.display = "none"; //nextTurn button is invisible. Next player needs to roll
    dieBlocker.style.display = "none";

    //only 4 players in the game. Go back to one once player reaches 4
    if (player === 1) {
      this.outputElement.innerHTML = "Yellow, end move. Now it's red's turn"; //reset saying
    }
    if (player === 2) {
      this.outputElement.innerHTML = "Red, end move. Now it's green's turn"; //reset saying
    }
    if (player === 3) {
      this.outputElement.innerHTML = "Green, end move. Now it's blue's turn"; //reset saying
    }
    if (player === 4) {
      this.outputElement.innerHTML = "Blue, end move. Now it's yellow's turn"; //reset saying
      player = 0;
    }
    newTurn.style.display = "none"; //don't show next turn button

    console.log(player);
    player++;
  }
}

let myRoll = new diceRoll(document.getElementById("Response"));

class playerPons {
  color; //color of team
  members; //4 pons per team
  constructor(color, members) {
    this.color = color;
    this.members = members;
  }

  playMove() {}
}
let yellowTeam = new playerPons("yellow", 4);
let redTeam = new playerPons("red", 4);
let blueTeam = new playerPons("blue", 4);
let greenTeam = new playerPons("green", 4);

console.log(yellowTeam.color);
console.log(yellowTeam.members);
