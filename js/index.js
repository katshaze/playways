
$(document).ready(function() {
  audio.setup();
  audio.setupSong();
  freqAnalysis.setup();
  waveform.setup();
  bargraph.setup();

  // CALL CHOSEN GET DATA FUNCTION ////
  freqAnalysis.getByteFreqData();
  // freqAnalysis.getFloatFreqData();
  freqAnalysis.getByteWaveformData();
  // freqAnalysis.getFloatWaveformData();

  // CALL CORRESONDING UPDATE DATA FUNCTION
  freqAnalysis.updateByteWaveform();
  // freqAnalysis.updateFloatWaveform();
  freqAnalysis.updateFreqBarGraph();

  // CALL CORRESPONDING VISUAL
  waveform.drawByteWaveform();
  // visual.drawFloatWaveform();
  bargraph.drawByteBargraph();

  // USER CONTROLS FOR PLAYING AUDIO /////////////////////
  $('#play-pause').on('click', function() {
    let text = $('#play-pause').text();
    if (text === 'Play') {
      audio.song.play();

      $('#play-pause').text('Pause');
    } else {
      audio.song.pause();
      $('#play-pause').text('Play');
    }
  });
  $('#stop').on('click', function() {
    audio.song.pause();
    audio.song.currentTime = 0;
    $('#play-pause').text('Play');
  })
}); // end of doc ready
