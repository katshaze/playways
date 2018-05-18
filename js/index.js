
$(document).ready(function() {
  audio.setup();
  audio.setupSong();
  waveformAnalysis.setup();
  bargraphAnalysis.setup();
  waveform.setup();
  bargraph.setup();
  deepsounds.setup();
  // diagonals.setup();

  // CALL CHOSEN GET DATA FUNCTION ////
  waveformAnalysis.getByteWaveformData();
  bargraphAnalysis.getByteFreqData();

  // CALL CORRESONDING UPDATE DATA FUNCTION
  waveformAnalysis.updateByteWaveform();
  bargraphAnalysis.updateFreqBarGraph();

  // CALL CORRESPONDING VISUAL
  waveform.drawByteWaveform();
  bargraph.drawByteBargraph();
  deepsounds.draw();
  // diagonals.drawLines();
  // diagonals.fill();

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
