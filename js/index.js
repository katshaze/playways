// GLOBAL VARIABLES //////
// inputs //
let mic, xo, ratatat;
let currentSource = '';
let currentAlbum = null;
let lastPressed = '';
let switching = false;
// re amplitude //
let amplitude, smoothing
// re freq fft //
let binCount, bins, fft;
// re sketch
let canvas, spectrum, width, height, wSeg, hSeg, level, size;


function preload() {
  // add load method with the path to your sound
  xo = [loadSound('./audio/xo/sweet-adeline.mp3'), loadSound('./audio/xo/Tomorrow Tomorrow.mp3')];
  ratatat = [ loadSound('./audio/ratatat/el-pico.mp3'), loadSound('./audio/ratatat/crips.mp3')];
};

function setup() {

  setNames(xo,xoNames);
  setNames(ratatat,ratatatNames);

  // MIC SETUP //
  mic = new p5.AudioIn();
  currentSource = mic;
  currentSource.start();

  // CHANGE USER CONTROLS TEXT //
  $('#loading').addClass('invisible');
  $('#icons').removeClass('invisible');

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
  fft.setInput(currentSource);
  // SOUND ANALYSIS: AMPLITUDE //
  amplitude = new p5.Amplitude()

  // SET SOURCE //
  toggleInput(1); // start with elliot smith

  // USER CONTROLS FOR CLEARING CANVAS //
  $('#refresh').on('click', function() {
    refreshCanvas();
  });

  // USER CONTROLS FOR MODE //
  $('#mic').on('click', function() {
    switching = true;
    toggleInput(0);
    refreshCanvas();
  });
  $('#xo').on('click', function() {
    switching = true;
    toggleInput(1);
    refreshCanvas();
  });
  $('#ratatat').on('click', function() {
    switching = true;
    toggleInput(2);
    refreshCanvas();
  });

  // =============================== //
  // USER CONTROLS FOR PLAYING AUDIO //
  // =============================== //
  $('#play').on('click', function() {
    lastPressed = 'play';
    if (currentSource.isPlaying() === false) {
      currentSource.play();
    }
  });
  $('#pause').on('click', function() {
    lastPressed = 'pause';
    if (currentSource.isPlaying()) {
      currentSource.pause();
    }
  })
  $('#stop').on('click', function() {
    lastPressed = 'stop';
    currentSource.stop();
    refreshCanvas();
  });

}; //end of setup function




const random = function(min,max) {
  // getting a random integer:
  return Math.floor(Math.random() * (max - min + 1)) + min;
};



// ======================== //
// GET RID OF IF NOT NEEDED //
// ======================== //
//
// , loadSound('./audio/xo/Baby Britain.mp3'), loadSound('./audio/xo/Pitseleh.mp3'), loadSound('./audio/xo/Independence Day.mp3'), loadSound('./audio/xo/Bled White.mp3'), loadSound('./audio/xo/waltz.mp3')

//  loadSound('./audio/ratatat/desert-eagle.mp3'), loadSound('./audio/ratatat/breaking-away.mp3', loadSound('./audio/ratatat/cherry.mp3'),

// =========================== //
// PLAY MODE - NOT SURE IF NEEDED //
// =========================== //
// for (let i = 0; i < ratatat.length; i++) {
//   ratatat[i].playMode('restart');
// };
// for (let i = 0; i < xo.length; i++) {
//   xo[i].playMode('restart');
// };
