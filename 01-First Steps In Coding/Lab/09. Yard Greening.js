function yardGreening (input) {
  let pricePerSqM = 7.61
  let discountPercent = 0.18

  let yardSqM = Number(input[0])

  let price = yardSqM * pricePerSqM
  let discount = price * discountPercent

  let finalPrice = price - discount

  console.log(`The final price is: ${finalPrice} lv.`)
  console.log(`The discount is: ${discount} lv.`)
}

yardGreening(['550'])
yardGreening(['150'])
