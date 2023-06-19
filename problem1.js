function bisection() {}

const iterations = 5;

function main(x) {
  return x ** 3 - 6 * x - 4;
}

let firstGuess = 2;
let secondGuess = 3;

for (let i = 0; i < iterations; i++) {
  const a = firstGuess;
  const b = secondGuess;
  const aFunc = main(a);
  const bFunc = main(b);
  const c = (a + b) / 2;
  const cFunc = main(c);
  const bMinusA = b - a;

  if (cFunc < 0) {
    firstGuess = c;
  }

  console.log({
    a,
    b,
    aFunc,
    bFunc,
    c,
    cFunc,
    bMinusA,
  });
  if (cFunc < 0) {
    firstGuess = c;
  }
}
// Bisection method

// bisectionMethod(() => x ** 3 - 6 * x - 4, 2, 3, 5)
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
