import P5, { Color, Vector } from 'p5';

export default class Circle {
  p5: P5;

  position: Vector;

  size: number;

  color: Color;

  constructor(p5: P5, position: Vector, size: number, color: Color) {
    this.p5 = p5;
    this.position = position;
    this.size = size;
    this.color = color;
  }

  draw() {
    const { p5 } = this; // just for convenience

    p5.push();

    p5.translate(this.position);
    p5.noStroke();
    p5.fill(this.color);
    p5.ellipse(0, 0, this.size);

    p5.pop();
  }
}
