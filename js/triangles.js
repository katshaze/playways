
function draw() {
  spectrum = fft.analyze();
  for (let i = 1; i < spectrum.length; i++) {
    // width = random(100,windowWidth);
    width = windowWidth;
    hSeg = windowHeight/255;
    height = spectrum[i] * 2;
    line(0,0,width,height);
    line(0,0,width/3,height);
    line(width,height,width/3,height);
    stroke(`rgba(100,${height},200,0.25)`);
  }
};
