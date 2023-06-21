function falsePosition() {}

const iterations = 3;

function main(x) {
  return 2 * x ** 3 + 10 * x - 12;
}

let firstGuess = 1;
let secondGuess = 2;

for (let i = 0; i < iterations; i++) {
  const a = firstGuess;
  const b = secondGuess;
  const fA = main(a);
  const fB = main(b);
  const c = (a * fB - b * fA) / (fB - fA);
  const fC = main(c);
  const bMinusA = b - a;

  if (fC < 0) {
    firstGuess = c;
  }

  console.log({
    a,
    b,
    fA,
    fB,
    c,
    fC,
    bMinusA,
  });
  if (fC < 0) {
    firstGuess = c;
  }
}
// False position method

// falsePositionMethod(() => 2 * x ** 3 + 10 * x - 12, 1, 2, 3)

// function falsePositionMethod(a, b, iterations) {
//   let c;

//   for (let i = 0; i < iterations; i++) {
//     const fA = f(a);
//     const fB = f(b);

//     if (fA === 0 || fB === 0 || (b - a) < 0.0001) {
//       root = c
//       break
//     }

//     if (fA * fC < 0) {
//       b = c;
//     } else {
//       a = c;
//     }
//   }

//   return root.toFixed(4)
// }
