function projectCreation (input) {

  let hoursPerProject = 3
  let architectName = input[0]
  let numberOfProjects = Number(input[1])
  let hoursNeeded = numberOfProjects * hoursPerProject

  console.log(
    `The architect ${architectName} will need ${hoursNeeded} hours to complete ${numberOfProjects} project/s.`)
}

projectCreation(['George ', '4 '])
projectCreation(['Sanya ', '9 '])