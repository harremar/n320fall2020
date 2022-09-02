class randomPicker {
  //list of all items to be selected from randomly
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

class fortuneCookie extends randomPicker {
  outputElement;
  constructor(element) {
    super([
      "The fortune you seek is in another cookie",
      "I didn't come this far to only come this far",
      "Be careful who you trust. Salt and sugar look the same",
      "Error 404: Fortune not found",
      "This cookie fell on the ground",
      "You love Chinese food",
    ]);
    this.outputElement = element;
  }

  //reveal function that randomly picks the answer
  reveal() {
    let reply = this.pickRandom();
    //If message is revealed don't change the message
    //If message says "please open your cookie, reveal a new fortune"
    if (this.outputElement.innerHTML === "Please open your cookie") {
      this.outputElement.innerHTML = reply; //update fortune
      newF.style.display = "flex"; //makes reset button visible
    }
  }
  //reset function resets the fortune
  reset() {
    this.outputElement.innerHTML = "Please open your cookie"; //reset saying
    newF.style.display = "none"; //reset button not visible
  }
}
//creating a new object
let myFortune = new fortuneCookie(document.getElementById("magicResponse"));

//ID for reset button to get new fortune
let newF = document.getElementById("newF");

//when game is open reset button isn't visible
newF.style.display = "none";

