function solve (input) {
  let [age, gender] = [...input];

  if (gender == 'f') {
    if (age >= 16) {
      console.log('Ms.');
    } else {
      console.log('Miss');
    }
  } else {
    if (age >= 16) {
      console.log('Mr.');
    } else {
      console.log('Master');
    }
  }
}