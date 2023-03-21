function solve (input) {
  let [budget, gpuCount, cpuCount, ramCount] = [...input].map(Number)

  let gpuPrice = 250
  let cpuPrice = 0.35 * gpuPrice * gpuCount
  let ramPrice = 0.1 * gpuPrice * gpuCount

  let total = gpuCount * gpuPrice + cpuCount * cpuPrice + ramCount * ramPrice
  if (gpuCount>cpuCount){total *=0.85}


  console.log(budget >= total
    ? `You have ${(budget - total).toFixed(2)} leva left!`
    : `Not enough money! You need ${(total - budget).toFixed(2)} leva more!`)
}

solve(['900', '2', '1', '3'])
solve(['920.45', '3', '1', '1'])