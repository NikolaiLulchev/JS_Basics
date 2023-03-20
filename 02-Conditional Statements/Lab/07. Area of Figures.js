function area (input) {
  let [figure, sideA, sideB] = [...input]

  let formulas = {
    'square': (sideA) => sideA * sideA,
    'rectangle': (sideA, sideB) => sideA * sideB,
    'circle': (sideA) => sideA * sideA * Math.PI,
    'triangle': (sideA, sideB) => sideA * sideB / 2,
  }

  console.log(formulas[figure](sideA, sideB).toFixed(3))
}

area(['square', '5'])