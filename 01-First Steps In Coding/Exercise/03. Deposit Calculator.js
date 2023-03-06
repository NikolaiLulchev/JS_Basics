function depositCalculator(input){
  let deposit = Number(input[0])
  let term = Number(input[1])
  let interest = Number(input[2])

  let sum = deposit + term * ((deposit*interest/100)/12)

  console.log(sum)
}

depositCalculator(["200",  "3",  "5.7"])
depositCalculator(["2350",  "6",  "7"])