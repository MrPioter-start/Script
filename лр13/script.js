let calculator = {
  x: 0,
  y: 0,
  read(x, y) {
    this.x = x;
    this.y = y;
  },
  sum() {
    return this.x + this.y;
  },
  mul() {
    return this.x * this.y;
  },
  devis() {
    return (this.x / this.y).toFixed(2);
  },
};

calculator.read(1, 5);
console.log(calculator.sum());
console.log(calculator.mul());
console.log(calculator.devis());

/*let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function () {
    console.log(this.step);
  },
  up: this.step++,
  down: this.step--,
  showStep: this.step,
};
*/
class Ladder {
  constructor() {
    this.step = 0;
  }

  up() {
    this.step++;
    return this;
  }

  down() {
    this.step--;
    return this;
  }

  jump() {
    this.step += 3;
    return this;
  }

  showStep() {
    console.log(this.step);
    return this;
  }
}
const ladder = new Ladder();
ladder.up().up().down().jump().showStep();
