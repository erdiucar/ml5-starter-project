import P5 from 'p5';
import 'p5/lib/addons/p5.dom';
// import "p5/lib/addons/p5.sound";	// Include if needed
import ml5 from 'ml5';
import './style.scss';

// DEMO: A sample class implementation
import Circle from './Circle';

console.log('ml5 version:', ml5.version);

const sketch = (p5Library: P5) => {
  const p5 = p5Library;

  p5.setup = () => {
    const canvas = p5.createCanvas(p5.windowHeight / 2, p5.windowHeight / 2);
    canvas.parent('p5-canvas');
  };

  p5.draw = () => {
    p5.background('white');

    const myCircles: Circle[] = [];
    for (let i = 1; i < 4; i += 1) {
      const width = p5.width / 4;
      const circlePosition = p5.createVector(width * i, p5.height / 2);
      const size = i % 2 !== 0 ? p5.windowHeight / 18 : p5.windowHeight / 12;
      myCircles.push(
        new Circle(p5, circlePosition, size, p5.color(140, 180, 220))
      );
    }

    myCircles.forEach((circle) => circle.draw());
  };
};

new P5(sketch);
