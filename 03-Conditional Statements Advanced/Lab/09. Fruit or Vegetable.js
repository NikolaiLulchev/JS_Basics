function solve (input) {
  let map = {
    'fruit': ['banana', 'apple', 'kiwi', 'cherry', 'lemon', 'grapes'],
    'vegetable': ['tomato', 'cucumber', 'pepper', 'carrot']
  };
  let found = 'unknown';
  for (const [key, array] of Object.entries(map)) {
    for (const e of array) {
      if (e === input[0]) {
        found = key;
        break;
      }
    }
  }
  console.log(found);
}

solve(['banana']);
solve(['apple']);
solve(['tomato']);
solve(['water']);