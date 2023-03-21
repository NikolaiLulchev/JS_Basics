function solve (input) {
  let [hour, day] = [...input];

  if (hour >= 10 && hour <= 18) {
    switch (day) {
      case 'Monday':
      case 'Tuesday':
      case 'Wednesday':
      case 'Thursday':
      case 'Saturday':
      case 'Friday':
        console.log('open');
        break;
      default:
        console.log('closed');
    }
  } else console.log('closed');
}