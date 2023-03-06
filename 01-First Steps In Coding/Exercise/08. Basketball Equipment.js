function equipment(input){
  let yearlyTax = Number(input[0])
  let snickersPrice = yearlyTax*0.6
  let suitPrice = snickersPrice*0.8
  let ballPrice = suitPrice*0.25
  let accessoriesPrice = ballPrice*0.2

  let expenses = yearlyTax+snickersPrice+suitPrice+ballPrice+accessoriesPrice

  console.log(expenses)
}

equipment(['365'])
equipment(['550'])