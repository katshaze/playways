let circles = [];
let lastLevel = 0;
let mainMax = 200;
let currentAccent = 3;
let threshold = 2.5;
let minorMax;

function draw() {
  level = amplitude.getLevel();
  mainSize = map(level, 0, 1, 0, mainMax);

  fill('rgb(255,200,200)');
  ellipse(width/2, height/2, mainSize, mainSize);

  minorSize = map(level, 0,1,0,getMax());
  circles.forEach((circle) => {
    fill(circle.fill);
    ellipse(circle.x, circle.y, minorSize, minorSize);
  });

  if (level - lastLevel > threshold * lastLevel) {
    console.log('triggered. threshold:', threshold);
    mainMax > width * 1.1 ? mainMax = mainMax : mainMax = mainMax * 1.1;
    if (circles.length < width/8) {
      circles.push({x: random(0,width), y: random(0,height), fill: colourSelector(currentAccent)});
    }
  }
  lastLevel = level;

  // lower circle triggering level if song isn't creating many circles:
  if (currentSource != mic) {
    for (let i = 0; i < ratatat.length; i++) {
      if (ratatat[i].isPlaying()) {
        if (ratatat[i].currentTime() > 12 && circles.length < 4) {
          threshold = 2;
        };
        if (ratatat[i].currentTime() > 18 && circles.length < 4) {
          threshold = 1.5;
        };
        if (ratatat[i].currentTime() > 25 && circles.length < 4) {
          threshold = 1.25;
        };
      };
    };
    for (let i = 0; i < xo.length; i++) {
      if (xo[i].currentTime() > 12 && circles.length < 4) {
        threshold = 2;
      };
      if (xo[i].currentTime() > 18 && circles.length < 4) {
        threshold = 1.5;
      };
      if (xo[i].currentTime() > 25 && circles.length < 4) {
        threshold = 1.25;
      };
    }
  }; // end of trigger lowering function

  if (currentAlbum != null) {
    if (currentSource.isPlaying()) {
      $('#now-playing').text(`Now playing: ${currentSource.file}`)
    }
  }

}; //end of draw function

const colourSelector = function(num) {
  let rand;
  let returnVal = ``;
  switch(num) {
    case 1: // r randomised, r emphasis
      rand = random(150,250);
      returnVal = `rgb(${rand}, 50, 50)`;
      break;
    case 2: // g randomised, b/g emphasis
      rand = random(100,200);
      returnVal = `rgb(100, ${rand}, 200)`;
      break;
    case 3: // b randomised, pink-orange emphasis
      rand = random(80,180);
      returnVal = `rgb(250, 140, ${rand})`;
      break;
  }
  return returnVal
};

const getMax = function() {
  let max = width/4;
  max > 200 ? max = 200 : max = max;
  return max;
}
