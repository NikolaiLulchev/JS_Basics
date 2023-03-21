function solve (input) {
  let isValid = input[0] == 0 || (input[0] >= 100 && input[0] <= 200);
  !isValid ? console.log('invalid') : void[0];
}

solve(['0'])
