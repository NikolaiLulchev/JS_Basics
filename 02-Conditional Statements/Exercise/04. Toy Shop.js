function solve (input) {
  let [excursionPrice, puzzleQty, dollQty, bearQty, minionQty, truckQty] = [...input].map(
    Number)
  let puzzlePrice = 2.60
  let dollPrice = 3
  let bearPrice = 4.10
  let minionPrice = 8.2
  let truckPrice = 2

  let totalSum = puzzlePrice * puzzleQty + dollPrice * dollQty + bearPrice *
    bearQty + minionPrice * minionQty + truckPrice * truckQty


  let totalQty = [...input].map(Number).reduce((a, b) => a + b) -
    excursionPrice

  if (totalQty >= 50) {
    totalSum *= 0.75
  }
  let profit = 0.9 * totalSum

  console.log(profit >= excursionPrice
    ? `Yes! ${(profit - excursionPrice).toFixed(2)} lv left.`
    : `Not enough money! ${(excursionPrice - profit).toFixed(2)} lv needed.`)

}

solve(['40.8', '20', '25', '30', '50', '10'])

solve(['320', '8', '2', '5', '5', '1'])