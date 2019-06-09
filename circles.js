class Circles {

  constructor(x, y, r, g, b) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.g = g;
    this.b = b;
  }

  drawCircles() {
    noStroke()
    fill(this.r, this.g, this.b)
    circle(this.x, this.y, 95)
  }
}
