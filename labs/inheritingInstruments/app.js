let instruments = [];
let synthApp = {
  synth: new Tone.Synth().toDestination(),
  notes: ["C4", "E4", "G4"],
  currentInstrument: 0,
  playSound() {
    this.synth.triggerAttackRelease(this.notes[this.currentInstrument], "8n");
    this.currentInstrument++;
    // this.activatedCallback(); //when a instrument plays a note
    console.log(this.currentInstrument);
    if (this.currentInstrument === 3) {
      this.currentInstrument = 0;
      instruments[2] = new Strings("quite");
      instruments[2].playNext();
    }
    if (this.currentInstrument === 1) {
      instruments[1] = new Percussion("low");
      instruments[1].playNext();
    }
    if (this.currentInstrument === 2) {
      instruments[0] = new Woodwinds("very loud");
      instruments[0].playNext();
    }
    setTimeout(this.playSound.bind(this), 500);
  },
};

class Instrument {
  constructor(loudness, family, verb) {
    this.loudness = loudness;
    this.family = family;
    this.verb = verb;
  }
  playNext() {
    console.log(
      this.family + " " + this.verb + " at a " + this.loudness + " volume"
    );

    // setTimeout(instruments[0].musicPlaying, 500);
  }
}
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
