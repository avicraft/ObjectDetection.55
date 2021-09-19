objectDetector= "";
img = "";

img1 = "";
img2 = "";
img3 = "";
img4 = "";
img5 = "";
objects = [];
status = "";

function preload(){
  img1 = loadImage('img1');
  img2 = loadImage('img2');
  img3 = loadImage('img3');
  img4 = loadImage('img4');
  img5 = loadImage('img5');
}

function back() {
  window.location = "index.html"
  img = "img1";
}

function continue1() {
  window.location = "page.html"
  img = "img1";
}
function continue2() {
  window.location = "page.html"
  img = "img2";
}
function continue3() {
  window.location = "page.html"
  img = "img3";
}
function continue4() {
  window.location = "page.html"
  img = "img4";
}
function continue5() {
  window.location = "page.html"
  img = "img5";
}

function setup() {
  canvas = createCanvas(640, 420);
  canvas.center();
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
  console.log("Model Loaded!")
  status = true;
  objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
  if (error) {
    console.log(error);
  }
  console.log(results);
  objects = results;
}


function draw() {
  image(img, 0, 0, 640, 420);

      if(status != "")
      {
        for (var i = 0; i < objects.length; i++) {
          document.getElementById("status").innerHTML = "Status : Object Detected";

          fill(255, 0, 0);
          percent = floor(objects[i].confidence * 100);
          text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
          noFill();
          stroke(255, 0, 0);
          rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
      }
}
