let instruments = []; //empty array
//where you get sound
let synthApp = {
  synth: new Tone.Synth().toDestination(),
  notes: ["C4", "E4", "G4"], //the sould each instrument makes
  currentInstrument: 0, //start at 0
  //function that plays sound
  playSound() {
    this.synth.triggerAttackRelease(this.notes[this.currentInstrument], "8n"); // plays a eighth note
    this.currentInstrument++; //go to next instrument
    console.log(this.currentInstrument);
    //play string note
    if (this.currentInstrument === 3) {
      this.currentInstrument = 0;
      instruments[2] = new Strings("quite");
      instruments[2].playNext(); //this gets message
      document.body.style.backgroundColor = "lightblue";
    }
    //play percussion note
    if (this.currentInstrument === 1) {
      instruments[1] = new Percussion("low");
      instruments[1].playNext();
      document.body.style.backgroundColor = "lightseagreen";
    }
    //play woodwinds note
    if (this.currentInstrument === 2) {
      instruments[0] = new Woodwinds("very loud");
      instruments[0].playNext();
      document.body.style.backgroundColor = "lightcoral";
    }
    //wait 0.5sec
    setTimeout(this.playSound.bind(this), 500);
  },
};

//base class
class Instrument {
  constructor(loudness, family, verb) {
    this.loudness = loudness;
    this.family = family;
    this.verb = verb;
  }
  //function creates sentence
  playNext() {
    console.log(
      this.family + " " + this.verb + " at a " + this.loudness + " volume"
    );
  }
}
//child classes
class Woodwinds extends Instrument {
  //family and verb in child constructor
  constructor(loudness) {
    super(loudness, "woodwinds", "play");
    //define family and verb
    //put loudness in super constructor will be passed when creating new object
  }
}
class Percussion extends Instrument {
  constructor(loudness) {
    super(loudness, "Percussion", "beats"); //:loudness" property
  }
}

class Strings extends Instrument {
  constructor(loudness) {
    super(loudness, "Strings", "strum"); //:loudness" property
  }
}
