function largestOfAll(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const sub = arr[i];
    let largest = sub[0];

    for (let j = 1; j < sub.length; j++) {
      if (sub[j] > largest) largest = sub[j];
    }

    result.push(largest);
  }

  return result;
}

module.exports = { largestOfAll };

