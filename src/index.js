// import "@babel/polyfill";
const isHas = [1, 2, 3].includes(2);
const p = new Promise((resolve, reject) => {
  resolve(100);
});

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  getX() {
    return this.x;
  }
}
let cp = new ColorPoint(25, 8);
