function newtonRaphson() {}

const iterations = 5;

function main(x) {
  return 2 * x ** 2 - 3 * x - 4;
}

let firstGuess = 1;
let secondGuess = 5;

for (let i = 0; i < iterations; i++) {
  const a = firstGuess;
  const b = secondGuess;
  const fX = f(x);
  const fPrimeX = fPrime(x);
  const c = (a + b) / 2;
  const cFunc = main(c);
  const bMinusA = b - a;

  if (cFunc < 0) {
    firstGuess = c;
  }

  console.log({
    a,
    b,
    fX,
    fPrimeX,
    c,
    cFunc,
    bMinusA,
  });
  if (cFunc < 0) {
    firstGuess = c;
  }
}
// Bisection method

// bisectionMethod(() => 2 * x ** 2 - 3 * x - 4, 1, 5, 5)
// function bisectionMethod(fn, a, b, iterations) {
//   let root = null

//   for (let i = 0; i < iterations; i++) {
//     const c = (a + b) / 2
//     const fA = fn(a)
//     const fC = fn(c)

//     if (fC === 0 || (b - a) / 2 < 0.0001) {
//       root = c
//       break
//     }

//     if (fA * fC < 0) {
//       b = c
//     } else {
//       a = c
//     }
//   }

//   return root.toFixed(4)
// }
