function setup(){
  var canvas = createCanvas(windowWidth, windowHeight, P2D);
  canvas.parent("drawingCanvas");
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  background(255);
  document.body.style.backgroundColor = "white";
}

// INTERACTIVE GRADIENT BACKGROUND
function draw(){
  for ( var x = 0; x < width; x += 5){
    for (var y = 0 ; y < height; y += 5){
      // r = map(100, y, width, 166, 22);
      // g = map(100, 0, height, 209, 62); 
      // b = map(255, mouseY, mouseX, 190, 203); 
      // r = map(x, 0, width, 255, 0); 
      // g = map(mouseY, 300, height, 255, 0); 
      // b = map(y, 0, width, 0, 255);
      r = map(x, 0, width - mouseX, 255, 0); 
      g = map(mouseX, 300, height + mouseX, 150, 0); 
      b = map(y, 0, height, 0, 255);
      fill(r, g, b);
      noStroke(); 
      rect(x, y, 5, 5);
    }
  }
}