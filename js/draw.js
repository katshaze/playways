let circles = [];
let lastLevel = 0;
let mainMax = 200;
let currentAccent = 3; // 1 = red, 2 = green, 3 = blue;


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
    mainMax > width * 1.1 ? mainMax = mainMax : mainMax = mainMax * 1.1;
    if (circles.length < 100) {
      circles.push({x: random(0,width), y: random(0,height), fill: colourSelector(currentAccent)});
    }
  }
  lastLevel = level;
}; //end of draw function

const colourSelector = function(num) {
  let rand;
  let returnVal = ``;
  switch(num) {
    case 1: // r randomised, g emphasis
      rand = random(160,240);
      returnVal = `rgb(${rand}, 160, 90)`;
      break;
    case 2: // g randomised, b emphasis
      rand = random(100,200);
      returnVal = `rgb(100, ${rand}, 200)`;
      break;
    case 3: // b randomised, r emphasis
      rand = random(100,200);
      returnVal = `rgb(220, 100, ${rand})`;
      break;
  }
  return returnVal
}
