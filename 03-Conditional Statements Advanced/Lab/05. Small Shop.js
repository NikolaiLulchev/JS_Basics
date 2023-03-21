function solve (input) {
  let [product, city, qty] = [...input];
  switch (product) {
    case 'coffee':
      switch (city) {
        case 'Sofia':
          console.log(qty * 0.5);
          break;
        case 'Plovdiv':
          console.log(qty * 0.4);
          break;
        case 'Varna':
          console.log(qty * 0.45);
          break;
      }
      break;
    case 'water':
      switch (city) {
        case 'Sofia':
          console.log(qty * 0.8);
          break;
        case 'Plovdiv':
          console.log(qty * 0.7);
          break;
        case 'Varna':
          console.log(qty * 0.7);
          break;
      }
      break;
    case 'beer':
      switch (city) {
        case 'Sofia':
          console.log(qty * 1.2);
          break;
        case 'Plovdiv':
          console.log(qty * 1.15);
          break;
        case 'Varna':
          console.log(qty * 1.1);
          break;
      }
      break;
    case 'sweets':
      switch (city) {
        case 'Sofia':
          console.log(qty * 1.45);
          break;
        case 'Plovdiv':
          console.log(qty * 1.3);
          break;
        case 'Varna':
          console.log(qty * 1.35);
          break;
      }
      break;
    case 'peanuts':
      switch (city) {
        case 'Sofia':
          console.log(qty * 1.6);
          break;
        case 'Plovdiv':
          console.log(qty * 1.5);
          break;
        case 'Varna':
          console.log(qty * 1.55);
          break;
      }
      break;
  }
}

solve(['coffee', 'Varna', '2']);
solve(['peanuts', 'Plovdiv', '1']);
solve(['beer', 'Sofia', '2']);
solve(['water', 'Plovdiv', '2']);
solve(['sweets', 'Sofia', '2.23']);