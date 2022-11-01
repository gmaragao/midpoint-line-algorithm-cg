/**
 *
 * @param {Object} givenStart.x -- start point in x
 * @param {Object} givenStart.y -- start point in y
 * @param {Object} givenEnd.x -- end point in x
 * @param {Object} givenEnd.y -- end point in y
 *
 * @retuns {Array} resultArray containing all the selected points including
 * given first and last
 */
function lineMP(givenStart, givenEnd) {
  const dx = givenEnd.x - givenStart.x;
  const dy = givenEnd.y - givenStart.y;

  const xStart = givenStart.x;
  const yStart = givenStart.y;
  const xEnd = givenEnd.x;
  const yEnd = givenEnd.y;

  const absDx = Math.abs(dx);
  const absDy = Math.abs(dy);

  if (absDy > absDx) {
    if (yEnd > yStart) {
      return testX(xStart, yStart, xEnd, yEnd);
    } else {
      // Invert to test from the end to the beginning
      return testX(xEnd, yEnd, xStart, yStart);
    }
  } else {
    if (xEnd > xStart) {
      return testY(xStart, yStart, xEnd, yEnd);
    } else {
      // Invert to test from the end to the beginning
      return testY(xEnd, yEnd, xStart, yStart);
    }
  }
}

// X will be incremented while Y will be tested
function testY(x0, y0, x1, y1) {
  let dx = x1 - x0;
  let dy = y1 - y0;
  const resultArray = [];

  let xCurrent = x0;
  let yCurrent = y0;

  // Start with positive --> Y will be incremented
  let yIncrementer = 1;

  // Decrement y and invert
  if (dy < 0) {
    yIncrementer = -1;
    // Invert dy to change selector formula below inside loop
    dy = -dy;
  }

  // Starting D
  let d = 2 * dy - dx;

  while (xCurrent <= x1) {
    const resultObject = {
      x: xCurrent,
      y: yCurrent,
    };
    resultArray.push(resultObject);

    if (d > 0) {
      // Increment Y --> NE/SE
      yCurrent += yIncrementer;
      d = d + 2 * (dy - dx);
    } else {
      // Keep same Y --> N/S
      d = d + 2 * dy;
    }

    // Iterate X Current -> Move to next test
    xCurrent++;
  }

  return resultArray;
}

function testX(x0, y0, x1, y1) {
  let dx = x1 - x0;
  let dy = y1 - y0;
  const resultArray = [];

  let xCurrent = x0;
  let yCurrent = y0;

  // Start with positive --> X will be incremented
  let xIncrementer = 1;

  // Decrement x and invert
  if (dx < 0) {
    xIncrementer = -1;
    dx = -dx;
  }

  // Starting D
  let d = 2 * dx - dy;

  while (yCurrent <= y1) {
    const resultObject = {
      x: xCurrent,
      y: yCurrent,
    };
    resultArray.push(resultObject);

    if (d > 0) {
      xCurrent += xIncrementer;
      d = d + 2 * dx - 2 * dy;
    } else {
      d = d + 2 * dx;
    }

    // Iterate Y Current -> Move to next test
    yCurrent++;
  }

  return resultArray;
}
export default lineMP;
