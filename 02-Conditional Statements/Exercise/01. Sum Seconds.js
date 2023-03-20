function sumSeconds (input) {

  let totalTime = [...input].map(e => Number(e)).reduce((a, c) => a + c, 0)

  let minutes = Math.floor(totalTime / 60)
  let seconds = totalTime % 60

  console.log(`${minutes}:${seconds.toString().padStart(2,0)}`)
}

sumSeconds([
  '35',

  '45',

  '44'])