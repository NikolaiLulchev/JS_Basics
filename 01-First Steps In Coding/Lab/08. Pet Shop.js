function petShop (input) {
  let dogFoodPrice = 2.50
  let catFoodPrice = 4.00
  let dogFoodQty = Number(input[0])
  let catFoodQty = Number(input[1])

  let sum = dogFoodQty * dogFoodPrice + catFoodQty * catFoodPrice
  console.log(`${sum} lv.`)
}

petShop(['5 ', '4 '])
petShop(['13', '9'])