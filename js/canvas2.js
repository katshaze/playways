const diagonals = {
  canvas: null,
  ctx: null,
  width: window.innerWidth,
  height: window.innerHeight,
  tileSize: 30,
  setup: function() {
    this.canvas = document.getElementById('diagonals');
    this.ctx = this.canvas.getContext('2d');
    this.canvas.width = this.width;
    this.canvas.height = this.height;
  },
  drawLines: function() {
    let w = this.width;
    let h = this.height;
    this.ctx.clearRect(0, 0, w, h);

    for (let y = 0; y <= (h / this.tileSize); y++) {
      for (let x = 0; x <= (w / this.tileSize); x++) {
        const leftToRight = Math.random() >= .5;
        const xOffset = x * this.tileSize;
        const yOffset = y * this.tileSize;

        this.ctx.beginPath();
        // this.ctx.strokeStyle = `rgb(${Math.floor(255 - (y * 4))}, 150, ${Math.floor(255 - (x * 20))})`;
        this.ctx.strokeStyle = 'rgb(255,220,220)';

        if (leftToRight) {
          // draw  left to right line = \
          this.ctx.moveTo(xOffset, yOffset);
          this.ctx.lineTo(xOffset + this.tileSize, yOffset + this.tileSize);
        } else {
          // draw  right to left line = /
          this.ctx.moveTo(xOffset, yOffset);
          this.ctx.lineTo(xOffset - this.tileSize, yOffset + this.tileSize);
        }
        this.ctx.stroke();
      }
    }
  },
  random: function(min,max) {
    // getting a random integer:
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  fill: function() {
    requestAnimationFrame(this.fill.bind(this));
    let size;
    let dataArray = bargraphAnalysis.byteFreqDataArray;
    let ySeg = this.height/255;
    for (let i = 0; i < dataArray.length; i++) {
      x = this.random(0,this.width);
      y = ySeg * dataArray[i]
      if (dataArray[i] > 200) {
        size = 60;
      } else if (dataArray[i] > 100) {
        size = 30;
      } else {
        size = 15;
      }
      this.ctx.fillStyle = `rgb(${dataArray[i]},50,50)`;
      this.ctx.fillRect(x,y,size,size);
      setTimeout(this.ctx.clearRect(x,y,size,size),1000);
    }
  }
}; //end of diagonals object
