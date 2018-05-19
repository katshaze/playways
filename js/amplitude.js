let circles = [];
let lastLevel = 0;
let mainMax = 200;
function draw() {
  level = amplitude.getLevel();
  mainSize = map(level, 0, 1, 0, mainMax);

  fill('rgb(255,200,200)');
  ellipse(width/2, height/2, mainSize, mainSize);

  size2 = map(level, 0,1,0,width/3);
  circles.forEach((circle) => {
    fill(circle.fill);
    ellipse(circle.x, circle.y, size2, size2);
  });

  if (level - lastLevel > 2.5*lastLevel) {
    circles.push({x: random(0,width),y: random(0,height),fill: `rgb(100,${random(100,200)},200)`});
    mainMax > width ? mainMax = mainMax : mainMax = mainMax * 1.1;

  }
  lastLevel = level;

  // if (circles.length === 10) {
  //   // circles = circles.slice(circles.length - 10, 10)
  //   mainMax = mainMax * 0.9;
  // }
};

// {x: width/2, y: height/2, fill: `rgb(100,${random(100,200)},200)`}
