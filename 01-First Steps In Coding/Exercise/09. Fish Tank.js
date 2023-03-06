function fishTank(input){
  let length = Number(input[0])
  let width = Number(input[1])
  let height = Number(input[2])
  let usedSpace = Number(input[3])

  let volumeInL = length*width*height/1000

  console.log(volumeInL - volumeInL*usedSpace/100)
}

fishTank(["85",

  "75",

  "47",

  "17"])
fishTank(["105",

  "77",

  "89",

  "18.5"])