// RENDER VISUALISATIONS ON CANVAS ///////////////////////
const waveform = {
  canvas: null,
  ctx: null,
  setup: function() {
    this.canvas = document.getElementById('waveform');
    this.ctx = this.canvas.getContext('2d');
  },
  drawByteWaveform: function() {
    requestAnimationFrame(this.drawByteWaveform.bind(this)); //repeat as quickly as possible
    let dataArray = waveformAnalysis.byteWaveformDataArray;

    let sliceWidth = this.canvas.width * 1.0 / dataArray.length;
    let x = 0;
    this.canvas.width = waveformAnalysis.bufferLength;
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
}; //end of waveform object

const bargraph = {
  canvas: null,
  ctx: null,
  setup: function() {
    this.canvas = document.getElementById('bargraph');
    this.ctx = this.canvas.getContext('2d');
  },
  drawByteBargraph: function() {
    requestAnimationFrame(this.drawByteBargraph.bind(this));
    let dataArray = bargraphAnalysis.byteFreqDataArray;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.canvas.width = window.innerWidth;
    let barWidth = (this.canvas.width / bargraphAnalysis.bufferLength) * 2.5;
    let barHeight;
    let x = 0;

    for(let i = 0; i < dataArray.length; i++) {
      barHeight = dataArray[i];

      this.ctx.fillStyle = `rgb(${barHeight+100},50,50)`;
      this.ctx.fillRect(x,this.canvas.height-barHeight/2,barWidth,barHeight);

      x += barWidth + 1;
    }
  }
}; //end of bargraph object

const deepsounds = {
  canvas: null,
  ctx: null,
  width: 255,
  height: 255,
  setup: function() {
    this.canvas = document.getElementById('deepsounds');
    this.ctx = this.canvas.getContext('2d');
    this.canvas.width = this.width;
    this.canvas.height = this.height;
  },
  draw: function() {
    requestAnimationFrame(this.draw.bind(this));
    let dataArray = bargraphAnalysis.byteFreqDataArray;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    let tileSize = (dataArray[0] + dataArray[1] + dataArray[2] + dataArray[3]) / 8;
    this.ctx.beginPath();
    this.ctx.fillStyle = `rgb(${dataArray[0]}, 50, 60)`;
    this.ctx.fillRect(this.canvas.width/2 - tileSize/2, this.canvas.height/2 - tileSize/2, tileSize, tileSize);
  }
}
