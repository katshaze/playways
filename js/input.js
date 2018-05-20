// inputMode index:
// 0 = mic, 1 = song
let inputMode;

function toggleInput(mode) {
  inputMode = mode;
  switch (inputMode) {
    case 0: // mic mode
      currentSource.stop();
      $('.currentMode-bg').removeClass('currentMode-bg');
      $('.currentMode-font').removeClass('currentMode-font');
      currentSource = mic;
      currentSource.start();
      amplitude.setInput(currentSource);
      $('.songControls').addClass('invisible');
      $('#mic-div').addClass('currentMode-bg');
      $('#mic').addClass('currentMode-font');
      break;
    case 1: // elliot smith mode
      currentSource.stop();
      $('.currentMode-bg').removeClass('currentMode-bg');
      $('.currentMode-font').removeClass('currentMode-font');
      $('.songControls').removeClass('invisible');
      currentSource = xo;
      amplitude.setInput(currentSource);
      $('#xo-div').addClass('currentMode-bg');
      $('#xo').addClass('currentMode-font');
      break;
    case 2: // ratatat mode
      currentSource.stop();
      $('.currentMode-bg').removeClass('currentMode-bg');
      $('.currentMode-font').removeClass('currentMode-font');
      $('.songControls').removeClass('invisible');
      currentSource = ratatat;
      amplitude.setInput(currentSource);
      $('#ratatat-div').addClass('currentMode-bg');
      $('#ratatat').addClass('currentMode-font');
      break;
  }
}
