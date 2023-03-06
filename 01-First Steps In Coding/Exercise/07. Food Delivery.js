function foodDelivery(input){
  let chickenMealPrice = 10.35
  let fishMealPrice = 12.4
  let veganMealPrice = 8.15
  let deliveryPrice = 2.5

  let chickenMeals =Number(input[0])
  let fishMeals =Number(input[1])
  let veganMeals =Number(input[2])

  let subTotal = chickenMeals*chickenMealPrice+fishMeals*fishMealPrice+veganMeals*veganMealPrice
  let desert = subTotal*0.2

  let total = subTotal+desert+deliveryPrice

  console.log(total)
}

foodDelivery(['2','4','3'])
foodDelivery(['9','2','6'])