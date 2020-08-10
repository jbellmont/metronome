let sample = document.querySelector('.synth-sample');
let intervalID; // Used to clear the interval - i.e. pause the metronome

function playSample () {
  // Plays the sample, and is triggered every interval
  sample.play()
}

function togglePlay() {
  // Reads the tempo value from the input form and triggers sample
  let tempo = 60000 / document.getElementById('tempo-field').value;
  intervalID = setInterval(playSample, tempo);
}

function pauseSample() {
  // Pauses sample, resetting the interval function
  clearInterval(intervalID);
}

function changeSample() {
  // Changes the sample
  if (sample === document.querySelector('.synth-sample')) {
    sample = document.querySelector('.acoustic-sample');
  } else {
    sample = document.querySelector('.synth-sample');
  }
}

// Play button
const playButton = document.getElementById('play-button');
playButton.addEventListener('click', togglePlay);

// Pause button
const pauseButton = document.getElementById('pause-button');
pauseButton.addEventListener('click', pauseSample);

// Change sample button
const sampleButton = document.getElementById('sample-button');
sampleButton.addEventListener('click', changeSample);
