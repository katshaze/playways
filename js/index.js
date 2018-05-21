// ================ //
// GLOBAL VARIABLES
// ================ //
// re inputs //
let mic, xo, ratatat, currentSource, currentAlbum, lastPressed, inputMode;
let switching = false;
// re amplitude //
let amplitude;



function preload() {
  // setup() will not run until these are loaded
  xo = [loadSound('./audio/xo/sweet-adeline.mp3'), loadSound('./audio/xo/Tomorrow Tomorrow.mp3')];
  ratatat = [ loadSound('./audio/ratatat/el-pico.mp3'), loadSound('./audio/ratatat/crips.mp3')];
};

function setup() {
  // add song names to album arrays //
  setNames(xo,xoNames);
  setNames(ratatat,ratatatNames);

  // MIC SETUP //
  mic = new p5.AudioIn();
  currentSource = mic;
  currentSource.start();

  // CHANGE USER CONTROLS TEXT //
  $('#loading').addClass('invisible');

  // CANVAS //
  canvas = createCanvas(windowWidth, windowHeight);
  width = windowWidth;
  height = windowHeight;
  canvas.parent('canvas');
  background(30);

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

  // ==================== //
  // USER CONTROLS FOR AUDIO
  // ==================== //
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



// ======================== //
// EXTRA SONGS  //
// ======================== //
//
// , loadSound('./audio/xo/Baby Britain.mp3'), loadSound('./audio/xo/Pitseleh.mp3'), loadSound('./audio/xo/Independence Day.mp3'), loadSound('./audio/xo/Bled White.mp3'), loadSound('./audio/xo/waltz.mp3')

//  loadSound('./audio/ratatat/desert-eagle.mp3'), loadSound('./audio/ratatat/breaking-away.mp3', loadSound('./audio/ratatat/cherry.mp3'),

// ====================== //
// PLAY MODE //
// ====================== //
// for (let i = 0; i < ratatat.length; i++) {
//   ratatat[i].playMode('restart');
// };
// for (let i = 0; i < xo.length; i++) {
//   xo[i].playMode('restart');
// };
