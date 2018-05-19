// inputMode index:
// 0 = mic, 1 = song
let inputMode;

function toggleInput(mode) {
  inputMode = mode;
  switch (inputMode) {
    case 0: // mic mode
      currentSource.stop();
      $('.currentMode').removeClass('currentMode');
      currentSource = mic;
      currentSource.start();
      amplitude.setInput(currentSource);
      $('.songControls').addClass('invisible');
      $('#mic').addClass('currentMode');
      break;
    case 1: // elliot smith mode
      currentSource.stop();
      $('.currentMode').removeClass('currentMode')
      $('.songControls').removeClass('invisible');
      currentSource = xo;
      amplitude.setInput(currentSource);
      $('#xo').addClass('currentMode');
      break;
    case 2: // ratatat mode
      currentSource.stop();
      $('.currentMode').removeClass('currentMode');
      $('.songControls').removeClass('invisible');
      currentSource = ratatat;
      amplitude.setInput(currentSource);
      $('#ratatat').addClass('currentMode');
      break;
  }
}

// user interaction:
// separate buttons with different modes "Ratatat" "Mic"
// if press 'mic' button:
  // toggleInput(0)
  // make 'mic' button appear 'on'
  // change play/stop buttons to nothing?
// if press 'ratatat' button:
  // toggleInput(1)
  // make 'ratatat' button appear 'on'
  // show play/stop buttons
