function bookList(input){
  let numOfPages = Number(input[0])
  let pagesInHour = Number(input[1])
  let daysToRead = Number(input[2])
  let hourToRead = numOfPages/pagesInHour/daysToRead

  console.log(hourToRead)
}

bookList(["212","20","2"])
bookList(["432","15","4"])