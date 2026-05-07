function findElement(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    if (func(el)) return el;
  }
  return undefined;
}

module.exports = { findElement };

