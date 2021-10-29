console.log("hello world");
function setup() {
  createCanvas(1000, 700);
  noLoop();
}

let previousPoints;

function drawPoints(points) {
  // stroke(225, 225, 225);
  colorMode(HSL);
  stroke(random(150, 260), random(40, 100), 53, 1);
  noFill();
  beginShape();
  curveVertex(0, height / 2);
  points.forEach(point => {
    curveVertex(point.x, point.y);
  });
  const lastPoint = points[points.length - 1];
  curveVertex(lastPoint.x, lastPoint.y);
  endShape();
}

function draw() {
  // colorMode(HSL);
  // background(0, 100, 100, 100);
  background("#eae0c8");
  // background("#fffaf0");
  background("#fdf5e6");

  let points = [];
  const numberOfPoints = 10;
  const spaceBetween = width / numberOfPoints;
  points.push({ x: 0, y: height / 2 });
  for (let i = 0; i < 10; i++) {
    points.push({ y: height / 2, x: i * spaceBetween + spaceBetween });
  }

  // drawPoints(points);

  for (let i = 0; i < 75; i++) {
    points = points.map(point => {
      const shouldAdd = Math.random() > 0.5;
      const displaceMentAmount = Math.random() * 20;
      if (shouldAdd) {
        return { x: point.x, y: point.y + displaceMentAmount };
      } else {
        return { x: point.x, y: point.y - displaceMentAmount };
      }
    });

    drawPoints(points);
  }
}
