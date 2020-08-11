// Sets the sample + default sample
let sample = document.querySelector('.synth-sample'); 

// Sets the default volume
sample.volume = 0.5; // Sets default volume

// Used to clear the interval - i.e. pause the metronome
let intervalID; 

// Play button click-event
const playButton = document.getElementById('play-button');
playButton.addEventListener('click', togglePlay);

// Pause button click-event
const pauseButton = document.getElementById('pause-button');
pauseButton.addEventListener('click', pauseSample);

// Change sample button click-event
const sampleButton = document.getElementById('sample-button');
sampleButton.addEventListener('click', changeSample);

// Change volume range change-event
const volumeSlider = document.getElementById('volume-slider');
volumeSlider.addEventListener('change', changeVolume);


//--------------------//
// app functionality // 
//------------------//

function playSample () {
  // Plays the sample, and is triggered every interval
  sample.play()
}

function togglePlay() {
  // Reads the tempo value from the input form and triggers sample
  let tempo = 60000 / document.getElementById('tempo-field').value;
  intervalID = setInterval(playSample, tempo);

  // Changes appearance of active play button
  playButton.className = 'button-active';

  //disables play button while sample is playing
  playButton.setAttribute("disabled", "true"); 
}

function pauseSample() {
  // Pauses sample, resetting the interval function
  clearInterval(intervalID);

  // Enables the play button again
  playButton.removeAttribute("disabled");

  // Resets the class for the play button
  playButton.className = 'button';
}

function changeSample() {
  // Changes the sample
  if (sample === document.querySelector('.synth-sample')) {
    sample = document.querySelector('.acoustic-sample');
  } else {
    sample = document.querySelector('.synth-sample');
  }
}

function changeVolume() {
  // Changes the volume value
  sample.volume = this.value / 100; // Sets default volume
}