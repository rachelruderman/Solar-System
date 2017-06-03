//this exercise was created on KhanAcademy.org and can be viewed here: https://www.khanacademy.org/computer-programming/solar-system/6691537446043648
var t = 36; //radius
var θ = 0; //angle
var s = 10; //size
var x = 0; //circular X
var y = 0; //circular Y
var a = 0; //elliptical X
var b = 0; //elliptical Y

//constructor function to create objects in solar system
var SolarSystem = function(drawX, drawY, siZ) {
    this.drawX = drawX;
    this.drawY = drawY;
    this.siZ = siZ;
    x = t*cos(θ);
    y = t*sin(θ);
    a = (t+30)*cos(θ*4) + 200;
    b = (t+72)*sin(θ*4) + 200;
};

draw = function() {
    var stars = new SolarSystem(random (1, 400), random (1, 400), s/4);
    var sun = new SolarSystem (200, 200, s*2);
    var planet1 = new SolarSystem(x + 200, y + 200, s);
    var planet2ring = new SolarSystem(a, b, s*2.5);
    var planet2 = new SolarSystem(a, b, s*1.7);
    var planet3 = new SolarSystem(x*5 + 200, y*5 + 200, s*3);
    var moon = new SolarSystem(x*5 + 183, y*5 + 186, s/2);
    var drawSolarSystem = function(solarSystem) {
        ellipse(solarSystem.drawX, solarSystem.drawY, solarSystem.siZ, solarSystem.siZ);};

    background(0, 0, 0);
    noStroke();

    fill(255, 255, 255);
    drawSolarSystem(stars);
    fill(91, 0, 196);
    drawSolarSystem(planet1);
    fill(222, 139, 113);
    drawSolarSystem(planet2ring);
    fill(66, 245, 179);
    drawSolarSystem(planet3);
    fill(153, 139, 153);
    drawSolarSystem(moon);
    stroke(235, 169, 54);
    strokeWeight(2);
    fill(242, 255, 66);
    drawSolarSystem(sun);
    stroke(0, 0, 0);
    strokeWeight(4);
    fill(124, 80, 133);
    drawSolarSystem(planet2);

    θ += 0.9;
};
