let clicks = 0;
let score = 0;
let highscore = 0;

function CirculateofClicks() {
  clicks = clicks + 1;
  PointsPower.innerHTML = clicks;
  if (point1_power > 0) {
    clicks = clicks + point1_power + 2;
  }

  if (point2_power > 0) {
    clicks = clicks + point2_power + 10;
  }

  if (point3_power > 0) {
    clicks = clicks + point3_power + 100;
  }

  if (point4_power > 0) {
    clicks = clicks + point4_power + 1000;
  }

  score = clicks;
  if (score > highscore) {
    highscore = score;
  }
}

function update() {
  clicks = 0;
  PointsPower.innerHTML = clicks;
  ResultOfPower.innerHTML = highscore;
}
