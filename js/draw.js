// ==================
// GLOBAL VARIABLES RE SKETCH
// ==================
let canvas, width, height, level, mainSize, minorSize, minorMax, smlAxis;
let circles = [];
let lastLevel = 0;
let mainMax = 200;
let currentAccent = 2; //index: 1=red,2=blue/green,3=pink/orange
let trigger = 2.5;

function draw() {
  level = amplitude.getLevel();

  // specs for main central circle
  mainSize = map(level, 0, 1, 0, mainMax);
  fill('rgb(255,200,200)');
  ellipse(width/2, height/2, mainSize, mainSize);

  // specs for smaller circles
  minorSize = map(level, 0,1,0,getMax());
  circles.forEach((circle) => {
    fill(circle.fill);
    ellipse(circle.x, circle.y, minorSize, minorSize);
  });

  // adding a new minor circle
  if (level - lastLevel > trigger * lastLevel) {
    console.log('trigger triggered:', trigger);
    mainMax > smlAxis * 1.1 ? mainMax = mainMax : mainMax = mainMax * 1.1;
    if (circles.length < smlAxis/8) {
      circles.push({x: random(0,width), y: random(0,height), fill: colourSelector(currentAccent)});
    }
  }
  lastLevel = level;

  // lower circle triggering level if song isn't creating many circles:
  if (currentSource != mic) {
    checkTrigger(ratatat);
    checkTrigger(xo);
  };

  // show the currentSource playing
  if (currentAlbum != null) {
    $('#now-playing').text(`Current track:`);
    $('#song-title').text(`${currentSource.file}`);
  }

}; //end of draw function
