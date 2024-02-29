function triangleTriangleCollision(triangle1, triangle2) {
    for (let i = 0; i < 3; i++) {
        if (isPointInsideTriangle(triangle1[i], triangle2) || isPointInsideTriangle(triangle2[i], triangle1)) {
            return true;
        }
    }

    return false;
}

function rectangleTriangleCollision(rectangle, triangle) {
    for (let i = 0; i < 3; i++) {
        if (isPointInsideRectangle(triangle[i], rectangle) || isPointOnLineSegment(triangle[i], rectangle[0], rectangle[1]) ||
            isPointOnLineSegment(triangle[i], rectangle[1], rectangle[2]) || isPointOnLineSegment(triangle[i], rectangle[2], rectangle[0])) {
            return true;
        }
    }

    return false;
}

function circleRectangleCollision(circle, rectangle) {
    for (let i = 0; i < 4; i++) {
        const start = rectangle[i];
        const end = rectangle[(i + 1) % 4];

        if (isPointOnLineSegment(circle.position, start, end) && distance(circle.position, start) <= circle.radius) {
            return true;
        }
    }

    return false;
}

function isPointInsideTriangle(point, triangle) {
    const b1 = sign(point, triangle[0], triangle[1]) < 0.0;
    const b2 = sign(point, triangle[1], triangle[2]) < 0.0;
    const b3 = sign(point, triangle[2], triangle[0]) < 0.0;

    return ((b1 === b2) && (b2 === b3));
}

function isPointInsideRectangle(point, rectangle) {
    const angleSum = rectangle.reduce((sum, vertex, index, array) => {
        const nextVertex = array[(index + 1) % array.length];
        return sum + Math.atan2(nextVertex.y - vertex.y, nextVertex.x - vertex.x);
    }, 0);

    return Math.abs(angleSum) > Math.PI;
}

function sign(p1, p2, p3) {
    return (p1.x - p3.x) * (p2.y - p3.y) - (p2.x - p3.x) * (p1.y - p3.y);
}

function distance(point1, point2) {
    const dx = point2.x - point1.x;
    const dy = point2.y - point1.y;
    return Math.sqrt(dx * dx + dy * dy);
}
function circleCircleCollision (circle1, circle2) {
    const xDistance = circle2.position.x - circle1.position.x;
    const yDistance = circle2.position.y - circle1.position.y;
    const distance = Math.sqrt(xDistance*xDistance+yDistance*yDistance)

    if (circle1.radius + circle2.radius >= distance) {
        return true;
    }
    return false;
}
function circleTriangleCollision(circle, triangle) {
    for (let i = 0; i < 3; i++) {
      let start = triangle[i]
      let end = triangle[(i + 1) % 3]
  
      let dx = end.x - start.x
      let dy = end.y - start.y
      let length = Math.sqrt(dx * dx + dy * dy)
  
      let dot =
        ((circle.position.x - start.x) * dx +
          (circle.position.y - start.y) * dy) /
        Math.pow(length, 2)
  
      let closestX = start.x + dot * dx
      let closestY = start.y + dot * dy
  
      if (!isPointOnLineSegment(closestX, closestY, start, end)) {
        closestX = closestX < start.x ? start.x : end.x
        closestY = closestY < start.y ? start.y : end.y
      }
  
      dx = closestX - circle.position.x
      dy = closestY - circle.position.y
  
      let distance = Math.sqrt(dx * dx + dy * dy)
  
      if (distance <= circle.radius) {
        return true
      }
    }
    return false
  }
  function isPointOnLineSegment(x, y, start, end) {
    return (
      x >= Math.min(start.x, end.x) &&
      x <= Math.max(start.x, end.x) &&
      y >= Math.min(start.y, end.y) &&
      y <= Math.max(start.y, end.y)
    );
  }