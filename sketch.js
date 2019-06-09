var hcircles = []
var tenscircles = []
var onescircles = []
var oneslightbox = []
var tenslightbox = []
var hlightbox = []
let locations = []
let amp
let d


function setup() {
  smooth()
  createCanvas(screen.width, screen.height)
  amp = width/8
  d = 50
  for (i=0; i<screen.width; i += 1){

    let u = -sin((i*PI)/width) * amp
    locations[i] = {x: i, y: u}

  }
  hsw = screen.width / 3
  hsh = screen.height
  k = 0
  for (i = 0; i < 4; i++) {
    for (j = 0; j < 3; j++) {
      hcircles[k] = new Circles((j * hsw / 3) + 70, (-i * hsh / 5) - 75, 109, 65, 244, 95)
      hlightbox[k] = {
        on: false
      }
      k++
    }
  }
  k = 0
  for (i = 0; i < 3; i++) {
    for (j = 0; j < 2; j++) {
      tenscircles[k] = new Circles((j * hsw / 2.25) + hsw / 4 + hsw, (-i * hsh / 3) - 75, 244, 65, 65, 95)
      tenslightbox[k] = {
        on: false
      }
      k++
    }
  }
  k = 0
  for (i = 0; i < 3; i++) {
    for (j = 0; j < 3; j++) {
      onescircles[k] = new Circles((j * hsw / 3) + 70 + (2 * hsw), (-i * hsh / 3.29) - 75, 66, 134, 244, 95)
      oneslightbox[k] = {
        on: false
      }
      k++
    }
  }
  tenscircles[4].x = hsw + hsw / 2.1
  tenscircles[4].y = -75 - hsh / 6

}

function draw() {


  smooth()
  translate(0, screen.height)
  var dt = new Date();
  var secs = dt.getSeconds() + (60 * dt.getMinutes()) + (60 * 60 * dt.getHours());
  let g = map(secs, 0, 86400, 0, width)
  let p = sin((secs*PI)/86400)
  let q = -sin((g*PI)/width) * amp
  h = hour()
  m = minute()
  s = second()
  om = m % 10
  tm = (m - om) / 10
  if (h == 0) {
    h = 12
  }
  if (h > 12) {
    h = h % 12
  }
  //let g = map(h, 0, 12, 0, 255*2)
  background(p * 255)
  /*line(hsw, 0, hsw, -hsh)
  line(2 * hsw, 0, 2 * hsw, -hsh)*/
  function check() {
    if (s % 2 == 0) {
      return true
    } else {
      return false
    }
  }
  //hours
  for (i = 0; i < h; i++) {
    hlightbox[i].on = true
    for (j = 0; j < 12; j++)
      if (hlightbox[j].on) {
        hcircles[j].drawCircles()
        hlightbox[j].on = false
      }
  }
  //tens
  for (i = 0; i < tm; i++) {
    tenslightbox[i].on = true
    for (j = 0; j < 6; j++)
      if (tenslightbox[j].on) {
        tenscircles[j].drawCircles()
        tenslightbox[j].on = false
      }
  }
  //ones
  for (i = 0; i < om; i++) {
    oneslightbox[i].on = true
    if (om < 9) {
      oneslightbox[om].on = check()
    }
    for (j = 0; j < 9; j++) {
      if (oneslightbox[j].on) {
        onescircles[j].drawCircles()
        oneslightbox[j].on = false
      }
    }
  }
  if (om == 0) {
    oneslightbox[om].on = check()
    if (oneslightbox[om].on) {
      onescircles[om].drawCircles()
      oneslightbox[om].on = false
    }
  }
  if (tm !== 5 && om == 9) {
    tenslightbox[tm].on = check()
    if (tenslightbox[tm].on) {
      tenscircles[tm].drawCircles()
      tenslightbox[tm].on = false
    }
  }
  if (m == 59 && h !== 12) {
    hlightbox[h].on = check()
    if (hlightbox[h].on) {
      hcircles[h].drawCircles()
      hlightbox[h].on = false
    }
  }
  translate(0,-screen.height)
  translate(0,amp+(d/2)+5)
  beginShape()
  noFill()
  stroke(255-(p*255))
  strokeWeight(5)
  for (i=0; i < width; i += 1){
  vertex(locations[i].x, locations[i].y)
  }
  endShape()
  push()
  noStroke()
  fill('yellow')
  //translate(g,q)
  let sun = new Circles(g, q, 253, 184, 19, d)
  sun.drawCircles()
  pop()
}
