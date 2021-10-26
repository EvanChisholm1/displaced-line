console.log("hello world");
function setup() {
  createCanvas(400, 400);
  noLoop();
}

let previousPoints;

function drawPoints(points) {
  let lastPoint = { x: 0, y: height / 2 };
  points.forEach(point => {
    // circle(point.x, point.y, 10);
    line(lastPoint.x, lastPoint.y, point.x, point.y);
    lastPoint = { x: point.x, y: point.y };
  });
}

function draw() {
  let points = [];
  const numberOfPoints = 10;
  const spaceBetween = width / numberOfPoints;
  for (let i = 0; i < 10; i++) {
    points.push({ y: height / 2, x: i * spaceBetween + spaceBetween });
  }

  drawPoints(points);

  for (let i = 0; i < 100; i++) {
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
