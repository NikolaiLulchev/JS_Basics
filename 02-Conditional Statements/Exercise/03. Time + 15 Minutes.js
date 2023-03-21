function addMinutes (input) {
  let [hours, minutes] = [...input].map(e => Number(e))

  minutes += 15

  if (minutes > 59) {
    hours += 1
    minutes = minutes % 60
  }

  if (hours == 24) {
    hours = 0
  }

  console.log(`${hours}:${minutes.toString().padStart(2, 0)}`)
}