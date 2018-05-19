// VARIABLES //////
let song, binCount, bins, smoothing, fft, amplitude;
let canvas, spectrum, width, height, wSeg, hSeg, level, size;

function preload() {
  // add load method with the path to your sound
  song = loadSound('./audio/sweet-adeline.mp3');
};

function setup() {
  // CHANGE USER CONTROLS TEXT //
  $('#play-pause').text('Play');
  $('#stop').text('Stop');
  // USER CONTROLS FOR PLAYING AUDIO /////////////////////
  $('#play-pause').on('click', function() {
    let text = $('#play-pause').text();
    if (text === 'Play') {
      song.play();

      $('#play-pause').text('Pause');
    } else {
      song.pause();
      $('#play-pause').text('Play');
    }
  });
  $('#stop').on('click', function() {
    song.pause();
    song.currentTime = 0;
    $('#play-pause').text('Play');
  })
  // CANVAS //
  canvas = createCanvas(windowWidth, windowHeight); // this sets width & height
  width = windowWidth;
  height = windowHeight;
  canvas.parent('canvas');
  background(30);
  // SOUND ANALYSIS: FFT //
  binCount = 256;
  bins = new Array(binCount);
  smoothing = 0.6;
  fft = new p5.FFT(smoothing, binCount);
  fft.setInput(song);
  // SOUND ANALYSIS: AMPLITUDE //
  amplitude = new p5.Amplitude()
};

const random = function(min,max) {
  // getting a random integer:
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

$(document).ready(function() {


}); // end of doc ready
