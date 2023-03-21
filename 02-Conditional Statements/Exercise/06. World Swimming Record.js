function solve (input) {
  let [record, distance, time] = [...input].map(Number)
  let timeForDistance = distance * time
  let delay = Math.floor(distance / 15) * 12.5

  console.log((timeForDistance + delay)<record
    ? `Yes, he succeeded! The new world record is ${(timeForDistance+delay).toFixed(2)} seconds.`
    : `No, he failed! He was ${(timeForDistance+delay-record).toFixed(2)} seconds slower.`)
}

solve(['10464', '1500', '20'])
solve(['55555.67', '3017', '5.03'])