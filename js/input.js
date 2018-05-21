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
      currentAlbum = null;
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
      currentSource = xo[0];
      currentAlbum = 'xo';
      for (let i = 0; i < xo.length; i++) {
        amplitude.setInput(xo[i]);
      }
      $('#xo-div').addClass('currentMode-bg');
      $('#xo').addClass('currentMode-font');
      // switch to next track in XO array
      getNextTrack(xo);
      break;

    case 2: // ratatat mode
      currentSource.stop();
      $('.currentMode-bg').removeClass('currentMode-bg');
      $('.currentMode-font').removeClass('currentMode-font');
      $('.songControls').removeClass('invisible');
      currentSource = ratatat[0];
      currentAlbum = 'ratatat';
      for (let i = 0; i < ratatat.length; i++) {
        amplitude.setInput(ratatat[i]);
      }

      $('#ratatat-div').addClass('currentMode-bg');
      $('#ratatat').addClass('currentMode-font');

      // switch to next track in ratatat array
      getNextTrack(ratatat);
      break;
  }
};

const getNextTrack = function(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === currentSource) {
      if (i === array.length - 1) {
        return;
      } else {
        currentSource.onended(function() {
          if (currentSource.isPaused() === false && lastPressed != 'stop') {
            currentSource = array[i + 1];
            currentSource.play();
            getNextTrack(array);
          }
        });
      }
    }
  }
};
