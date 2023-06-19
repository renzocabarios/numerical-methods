function secant() {}

const iterations = 4;

function main(x) {
  return 4 * x ** 2 - 2 * x - 1;
}

let firstGuess = 1;
let secondGuess = 2;

for (let i = 0; i < iterations; i++) {
  const a = firstGuess;
  const b = secondGuess;
  const fX0 = f(x0);
  const fX1 = f(x1);
  const x = x1 - (fX1 * (x1 - x0)) / (fX1 - fX0);
  const fX2 = f(x2);
  const bMinusA = b - a;

  if (fX2 < 0) {
    firstGuess = x;
  }

  console.log({
    a,
    b,
    fX0,
    fX1,
    x,
    fX2,
    bMinusA,
  });
  if (fX2 < 0) {
    firstGuess = x;
  }
}
// Secant method

// function secantMethod(x0, x1, iterations) {
//   let x;

//   for (let i = 0; i < iterations; i++) {
//     const fX0 = f(x0);
//     const fX1 = f(x1);

//     if (fX1 === 0) {
//       // Exact root found
//       return x1.toFixed(4);
//     }

//     x = x1 - (fX1 * (x1 - x0)) / (fX1 - fX0);

//     if (Math.abs(f(x)) < 0.0001) {
//       // Root found within desired tolerance
//       return x.toFixed(4);
//     }

//     x0 = x1;
//     x1 = x;
//   }

//   return x.toFixed(4);
// }

