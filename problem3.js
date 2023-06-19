function falsePosition() {}

const iterations = 4;

function main(x) {
  return x ** 2 - 3 * x - 7;
}

let firstGuess = 2;
let secondGuess = 3;

for (let i = 0; i < iterations; i++) {
  const a = firstGuess;
  const b = secondGuess;
  const fA = f(a);
  const fB = f(a);
  const c = (a * fB - b * fA) / (fB - fA);
  const fC = f(c);
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

// falsePositionMethod(() => x ** 2 + 3 * x - 7, 2, 4, 4)

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
