function repainting(input){
  let nylonQty = Number(input[0])+2
  let paintQty = Number(input[1])*1.1
  let solverQty = Number(input[2])
  let hours = Number(input[3])

  let nylonPrice = 1.5
  let paintPrice = 14.5
  let solverPrice = 5
  let bagPrice = 0.4

  let price = nylonQty*nylonPrice+paintQty*paintPrice+solverQty*solverPrice+bagPrice
  let laborPrice = hours * price*0.3

  console.log(price+laborPrice)
}

repainting(["10","11","4","8"])
repainting(["5","10","10","1"])