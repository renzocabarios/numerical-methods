function bisection() {}

const iterations = 4;

function main(x) {
  return x ** 4 - x - 10;
}

let firstGuess = 1;
let secondGuess = 2;

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

// bisectionMethod(() => x ** 4 - x - 10, 1, 2, 4)
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
