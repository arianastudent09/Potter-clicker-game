let point1_power = 0;
let point2_power = 0;
let point3_power = 0;
let point4_power = 0;

function CirculateofPoints() {
    let newPoint1 = document.getElementById("extra-1");
    let newPoint2 = document.getElementById("extra-2");
    let newPoint3 = document.getElementById("extra-3");
    let newPoint4 = document.getElementById("extra-4");
}

function getPoint1() {
    PointsPower.innerHTML = clicks + 10;
    clicks = clicks + 10;
    point1_power = point1_power + 1;
    CirculateofPoints();
}

function getPoint2() {
    PointsPower.innerHTML = clicks + 100;
    clicks = clicks + 100;
    point2_power = point2_power + 1;
    CirculateofPoints();
}

function getPoint3() {
    PointsPower.innerHTML = clicks + 1000;
    clicks = clicks + 1000;
    point3_power = point3_power + 1;
    CirculateofPoints();
}

function getPoint4() {
    PointsPower.innerHTML = clicks + 10000;
    clicks = clicks + 10000;
    point4_power = point4_power + 1;
    CirculateofPoints();
}