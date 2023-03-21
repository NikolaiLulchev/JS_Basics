function solve (input) {
  let [fruit, day, qty, output] = [...input];
  switch (day) {
    case 'Monday':
    case 'Tuesday':
    case 'Wednesday':
    case 'Thursday':
    case 'Friday':
      switch (fruit) {
        case 'banana':
          output = qty * 2.5;
          break;
        case 'apple':
          output = qty * 1.2;
          break;
        case 'orange':
          output = qty * 0.85;
          break;
        case 'grapefruit':
          output = qty * 1.45;
          break;
        case 'kiwi':
          output = qty * 2.70;
          break;
        case 'pineapple':
          output = qty * 5.5;
          break;
        case 'grapes':
          output = qty * 3.85;
          break;
        default:
          output = 'error';
      }
      break;
    case 'Saturday':
    case 'Sunday':
      switch (input[0]) {
        case 'banana':
          output = qty * 2.7;
          break;
        case 'apple':
          output = qty * 1.25;
          break;
        case 'orange':
          output = qty * 0.9;
          break;
        case 'grapefruit':
          output = qty * 1.6;
          break;
        case 'kiwi':
          output = qty * 3;
          break;
        case 'pineapple':
          output = qty * 5.6;
          break;
        case 'grapes':
          output = qty * 4.2;
          break;
        default:
          output = 'error';
      }
      break;
    default:
      output = 'error';
  }

  if (typeof output !== 'number') { console.log(output); } else {
    console.log(output.toFixed(2));
  }
}

solve(['apple', 'Tuesday', '2']);
solve(['orange', 'Sunday', '3']);
solve(['kiwi', 'Monday', '2.5']);
solve(['grapes', 'Saturday', '0.5']);
solve(['tomato', 'Monday', '0.5']);