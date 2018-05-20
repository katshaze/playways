const refreshCanvas = function() {
  clear();
  circles = [];
  mainMax = 200;
  if (currentAccent === 1) {
    currentAccent = 2;
  } else if (currentAccent === 2) {
    currentAccent = 3;
  } else {
    currentAccent = 1;
  }
}
