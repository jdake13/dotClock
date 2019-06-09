class Ray {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  drawRays() {

    translate(this.x, this.y)

    for (i = 0; i < 8; i++) {

      stroke(255, 174, 66)
      line(0, 0, 0, 33)
      rotate(TWO_PI / 8)

    }
  }
}
