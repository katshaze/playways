// RENDER VISUALISATION ON CANVAS ///////////////////////
const waveform = {
  canvas: null,
  ctx: null,
  setup: function() {
    this.canvas = document.getElementById('waveform');
    this.ctx = this.canvas.getContext('2d');
  },
  drawFloatWaveform: function() {
    requestAnimationFrame(this.drawFloatWaveform.bind(this)); //repeat as quickly as possible
    // this.canvas.width = freqAnalysis.dataArray.length;
    this.canvas.width = freqAnalysis.bufferLength;
    this.canvas.height = 200;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.beginPath();

    let dataArray = freqAnalysis.floatDataArray;

    for (let i = 0; i < dataArray.length; i++) {
      const x = i; // start at left
      const y = ( 0.5 + (dataArray[i] / 2) ) * this.canvas.height;
      if(i == 0) {
          this.ctx.moveTo(x, y); //start here
      } else {
          this.ctx.lineTo(x, y); //move to here
      }
    }
    this.ctx.strokeStyle = '#5661FA';
    this.ctx.lineWidth = 2;
    this.ctx.stroke();
  },
  drawByteWaveform: function() {
    requestAnimationFrame(this.drawByteWaveform.bind(this)); //repeat as quickly as possible
    let dataArray = freqAnalysis.byteWaveformDataArray;

    let sliceWidth = this.canvas.width * 1.0 / dataArray.length;
    let x = 0;

    // this.canvas.width = freqAnalysis.dataArray.length;
    this.canvas.width = freqAnalysis.bufferLength;
    this.canvas.height = 200;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.beginPath();
    let largestSoFar = 0;
    for(let i = 0; i < dataArray.length; i++) {
      if (dataArray[i] > largestSoFar) {
        largestSoFar = dataArray[i];
      };

      let v = dataArray[i] / 128.0;
      let y = v * this.canvas.height/2;

      if(i === 0) {
        this.ctx.moveTo(x, y);
      } else {
        this.ctx.lineTo(x, y);
      }
      x += sliceWidth;
      this.ctx.strokeStyle = `rgb(${largestSoFar},${dataArray[i]},100)`;
    }
    this.ctx.lineWidth = 2;
    this.ctx.stroke();
  }
}

const bargraph = {
  canvas: null,
  ctx: null,
  setup: function() {
    this.canvas = document.getElementById('bargraph');
    this.ctx = this.canvas.getContext('2d');
  },
  drawByteBargraph: function() {
    requestAnimationFrame(this.drawByteBargraph.bind(this));
    let dataArray = freqAnalysis.byteFreqDataArray;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.canvas.width = window.innerWidth;
    let barWidth = (this.canvas.width / freqAnalysis.bufferLength) * 2.5;
    let barHeight;
    let x = 0;

    for(let i = 0; i < dataArray.length; i++) {
      barHeight = dataArray[i]/2;

      this.ctx.fillStyle = `rgb(${barHeight+100},50,50)`;
      this.ctx.fillRect(x,this.canvas.height-barHeight/2,barWidth,barHeight);

      x += barWidth + 1;
    }
  }
}
