// RENDER WAVEFORM ON CANVAS ///////////////////////
const visual = {
  canvas: null,
  ctx: null,
  setup: function() {
    this.canvas = document.getElementById('myCanvas');
    this.ctx = this.canvas.getContext('2d');
  },
  // dataArray: freqAnalysis.dataArray,
  drawWaveform: function() {
    requestAnimationFrame(this.drawWaveform.bind(this)); //repeat as quickly as possible
    this.canvas.width = freqAnalysis.dataArray.length;
    this.canvas.height = 200;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.beginPath();

    for (let i = 0; i < freqAnalysis.dataArray.length; i++) {
      const x = i; // start at left
      const y = ( 0.5 + (freqAnalysis.dataArray[i] / 2) ) * this.canvas.height;
      if(i == 0) {
          this.ctx.moveTo(x, y); //start here
      } else {
          this.ctx.lineTo(x, y); //move to here
      }
    }
    this.ctx.strokeStyle = '#5661FA';
    this.ctx.lineWidth = 2;
    this.ctx.stroke();
  }
}
