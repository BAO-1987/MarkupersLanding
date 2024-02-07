// const canvas = document.getElementById("canvas");
// canvas.width = 320;
// canvas.height = 320;
// const ctx = canvas.getContext("2d");

// // inspired by gl-matrix beta 4
// class Vec2 extends Array {

//   constructor(...values) {
//     switch (values.length) {
//       case 2: {
//         const v = values[0];
//         super(v, values[1]);
//         break;
//       }
//       case 1: {
//         const v = values[0];
//         super(v, v);
//         break;
//       }
//       default: {
//         super(2);
//         break;
//       }

//     }
//   }

//   get x() {
//     return this[0];
//   }
//   set x(value) {
//     this[0] = value;
//   }

//   get y() {
//     return this[1];
//   }
//   set y(value) {
//     this[1] = value;
//   }

//   add(b) {
//     this[0] += b[0];
//     this[1] += b[1];
//   }

//   distance(b) {
//     return Vec2.distance(this, b);
//   }

//   static distance(a, b) {
//     return Math.hypot(b[0] - a[0], b[1] - a[1]);
//   }
// }

// class Particle {

//   constructor() {
//     this.speed = new Vec2(Math.random(), Math.random());
//     this.position = new Vec2(Math.random() * window.innerWidth, Math.random() * window.innerHeight);
//     this.radius = Math.random() * 4 + 1;
//   }

//   update() {
//     if (this.position.x > window.innerWidth || this.position.x < 0) {
//       this.speed.x *= -1;
//     }
//     if (this.position.y > window.innerHeight || this.position.y < 0) {
//       this.speed.y *= -1;
//     }
//     this.position.add(this.speed);
//   }
// }

// const particles = [];

// for (let i = 0; i < 100; i++) {
//   particles.push(new Particle());
// }

// const update = () => {
//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight;
//   const MAX_DISTANCE = (window.innerWidth + window.innerHeight) / 20;

//   for (let i = 0; i < particles.length; i++) {
//     particles[i].update();

//     for (let j = i; j < particles.length; j++) {
//       const distance = particles[i].position.distance(particles[j].position);
//       if (distance < MAX_DISTANCE) {

//         ctx.strokeStyle = `rgba(241, 90, 37, ${1 - distance/MAX_DISTANCE})`;
//         ctx.beginPath();
//         ctx.moveTo(...particles[i].position);
//         ctx.lineTo(...particles[j].position);
//         ctx.stroke();
//       }
//     }

//     ctx.fillStyle = "#f15a25";
//     ctx.beginPath();

//     ctx.arc(
//       ...particles[i].position,
//       particles[i].radius,
//       0, 2 * Math.PI);
//     ctx.fill();
//   }
//   requestAnimationFrame(update);
// }

// update();

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

class Vec2 extends Array {
  constructor(...values) {
    switch (values.length) {
      case 2: {
        const v = values[0];
        super(v, values[1]);
        break;
      }
      case 1: {
        const v = values[0];
        super(v, v);
        break;
      }
      default: {
        super(2);
        break;
      }
    }
  }

  get x() {
    return this[0];
  }
  set x(value) {
    this[0] = value;
  }

  get y() {
    return this[1];
  }
  set y(value) {
    this[1] = value;
  }

  add(b) {
    this[0] += b[0];
    this[1] += b[1];
  }

  distance(b) {
    return Vec2.distance(this, b);
  }

  static distance(a, b) {
    return Math.hypot(b[0] - a[0], b[1] - a[1]);
  }
}

class Particle {
  constructor() {
    this.speed = new Vec2(Math.random(), Math.random());
    this.position = new Vec2(Math.random() * window.innerWidth, Math.random() * window.innerHeight);
    this.radius = Math.random() * 4 + 1;
  }

  update() {
    if (this.position.x > window.innerWidth || this.position.x < 0) {
      this.speed.x *= -1;
    }
    if (this.position.y > window.innerHeight || this.position.y < 0) {
      this.speed.y *= -1;
    }
    this.position.add(this.speed);
  }
}

let particles = [];
const MAX_DISTANCE = (window.innerWidth + window.innerHeight) / 20;

function updateCanvasSize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function createParticles() {
  particles = [];
  for (let i = 0; i < 100; i++) {
    particles.push(new Particle());
  }
}

window.addEventListener('resize', () => {
  updateCanvasSize();
  createParticles();
});

updateCanvasSize();
createParticles();

const update = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < particles.length; i++) {
    particles[i].update();

    for (let j = i; j < particles.length; j++) {
      const distance = particles[i].position.distance(particles[j].position);
      if (distance < MAX_DISTANCE) {
        ctx.strokeStyle = `rgba(241, 90, 37, ${1 - distance / MAX_DISTANCE})`;
        ctx.beginPath();
        ctx.moveTo(particles[i].position.x, particles[i].position.y);
        ctx.lineTo(particles[j].position.x, particles[j].position.y);
        ctx.stroke();
      }
    }

    ctx.fillStyle = "#f15a25";
    ctx.beginPath();
    ctx.arc(
      particles[i].position.x,
      particles[i].position.y,
      particles[i].radius,
      0, 2 * Math.PI);
    ctx.fill();
  }

  requestAnimationFrame(update);
}

update();

