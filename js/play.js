let analyser;

$(document).ready(function() {

  //CANVAS /////////////////////////////////////////

  //RENDER WAVEFORM ON CANVAS ///////////////////////
  function drawWaveform() {
    requestAnimationFrame(drawWaveform); //repeat as quickly as possible
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = dataArray.length;
    canvas.height = 200;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // // fill canvas background
    // ctx.fillStyle = 'rgb(30,30,30)';
    // ctx.fillRect(0,0, canvas.width, canvas.height);
    ctx.beginPath();

    for (let i = 0; i < dataArray.length; i++) {
      const x = i; // start at left
      const y = ( 0.5 + (dataArray[i] / 2) ) * canvas.height;

      if(i == 0) {
          ctx.moveTo(x, y); //start here
      } else {
          ctx.lineTo(x, y); //move to here
      }
    }
    ctx.strokeStyle = '#5661FA';
    ctx.lineWidth = 2;
    ctx.stroke();
  };

  //ANALYSE AUDIO /////////////////////////////////////
  analyser = audioContext.createAnalyser();
  masterGain.connect(analyser);
  // get frequency information /////////////////////////
  analyser.fftSize = 2048; //this is the default; could be changed. must be power of two.
  let bufferLength = analyser.frequencyBinCount; //half the fft value
  // create an array of relevant type (need Uint8 for .getByteFrequencyData() and .getByteTimeDomainData(), and Float32 for .getFloatFrequencyData() and .getFloatTimeDomainData().)
  // const dataArray = new Uint8Array(bufferLength);
  let dataArray = new Float32Array(bufferLength);

  // call the function to get frequency data
  analyser.getFloatTimeDomainData(dataArray);

  // repeat as much as possible
  function updateWaveform() {
    requestAnimationFrame(updateWaveform);
    analyser.getFloatTimeDomainData(dataArray);
  };

  // USER CONTROLS FOR PLAYING AUDIO /////////////////////
  $('#play-pause').on('click', function() {
    let text = $('#play-pause').text();
    if (text === 'Play') {
      song.play();
      drawWaveform();
      updateWaveform();
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
}); // end of doc ready
