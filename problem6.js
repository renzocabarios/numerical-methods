function newtonRaphson() {}

const iterations = 5;

function f(x) {
  return 2 * x ** 2 - 3 * x - 4;
}

let x = x0;

for (let i = 0; i < iterations; i++) {
  const x0 = x;
  const fValue = f(x);
  const fPrimeValue = fPrime(x);
  const x = x - fValue / fPrimeValue;
  const cFunc = f(x);

  if (cFunc < 0) {
    x = x0;
  }

  console.log({
    x0,
    fX,
    fPrimeX,
    x,
    cFunc,
  });
  if (cFunc < 0) {
    x = x0;
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
