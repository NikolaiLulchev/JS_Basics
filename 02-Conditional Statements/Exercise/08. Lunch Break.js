function solve (input) {
  let serialName = input[0]
  let serialDuration = Number(input[1])
  let brakeDuration = Number(input[2])

  let timeForLunch = brakeDuration / 8
  let timeForRest = brakeDuration / 4

  console.log(brakeDuration >= (serialDuration + timeForLunch + timeForRest)
    ? `You have enough time to watch ${serialName} and left with ${Math.ceil(
      brakeDuration -
      (serialDuration + timeForLunch + timeForRest))} minutes free time.`
    : `You don't have enough time to watch ${serialName}, you need ${Math.ceil(
      (serialDuration + timeForLunch + timeForRest) -
      brakeDuration)} more minutes.`,
  )
}

solve(['Game of Thrones', '60', '96'])
solve(['Teen Wolf', '48', '60'])