function suplies(input){
  let penPrice = 5.80
  let markerPrice = 7.20
  let detergentPrice = 1.20

  let penPacks = Number(input[0])
  let markerPacks = Number(input[1])
  let detergent = Number(input[2])
  let discount = Number(input[3])/100

  let price = penPacks*penPrice+markerPacks*markerPrice+detergent*detergentPrice
  let finalPrice = price-price*discount

  console.log(finalPrice)
}

suplies(["2",

  "3",

  "4",

  "25"])
suplies(["4",

  "2",

  "5",

  "13"])