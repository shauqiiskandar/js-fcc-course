function findElement(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    if (func(el)) return el;
  }
  return undefined;
}

module.exports = { findElement };


// Yes—findElement returns the first array element for which func(element) evaluates to true (truthy).

// If it finds one, it returns that element immediately.
// If none pass, it returns undefined.