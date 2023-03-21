function solve (input) {
  let [budget, staffCount, clothPrice] = [...input].map(Number)
  let decorPrice = budget * 0.1

  let staffClothsPrice = staffCount * clothPrice

  if (staffCount > 150) {
    staffClothsPrice *= 0.9
  }

  console.log(
    budget < (staffClothsPrice + decorPrice)
      ? `Not enough money!\nWingard needs ${(staffClothsPrice + decorPrice -
        budget
      ).toFixed(2)} leva more.`
      : `Action!\nWingard starts filming with ${(budget - staffClothsPrice -
        decorPrice).toFixed(2)} leva left.`,
  )
}

solve(['20000', '120', '55.5'])
solve(['15437.62', '186', '57.99'])
solve(['9587.88', '222', '55.68'])