function solve (input) {
  let [city, sales, output] = [...input];
  if (sales >= 0 && sales <= 500) {
    switch (city) {
      case 'Sofia':
        output = sales * 5 / 100;
        break;
      case 'Plovdiv':
        output = sales * 5.5 / 100;
        break;
      case 'Varna':
        output = sales * 4.5 / 100;
        break;
      default:
        output = 'error';
    }
  } else if (sales > 500 && sales <= 1000) {
    switch (city) {
      case 'Sofia':
        output = sales * 7 / 100;
        break;
      case 'Plovdiv':
        output = sales * 8 / 100;
        break;
      case 'Varna':
        output = sales * 7.5 / 100;
        break;
      default:
        output = 'error';
    }
  } else if (sales > 1000 && sales <= 10000) {
    switch (city) {
      case 'Sofia':
        output = sales * 8 / 100;
        break;
      case 'Plovdiv':
        output = sales * 12 / 100;
        break;
      case 'Varna':
        output = sales * 10 / 100;
        break;
      default:
        output = 'error';
    }
  } else if (sales > 10000) {
    switch (city) {
      case 'Sofia':
        output = sales * 12 / 100;
        break;
      case 'Plovdiv':
        output = sales * 14.5 / 100;
        break;
      case 'Varna':
        output = sales * 13 / 100;
        break;
      default:
        output = 'error';
    }
  } else {output = 'error';}
  if (typeof output !== 'number') { console.log(output); } else {
    console.log(output.toFixed(2));
  }
}

solve(['Sofia', '1500']);
solve(['Plovdiv', '499.99']);
solve(['Varna', '3874.50']);
solve(['Kaspichan', '-50']);