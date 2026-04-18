function fearNotLetter(str) {
  for (let i = 0; i < str.length - 1; i++) {
    const currentCode = str.charCodeAt(i);
    const nextCode = str.charCodeAt(i + 1);
    if (nextCode - currentCode > 1) {
      // missing letter found
      return String.fromCharCode(currentCode + 1);
    }
  }
  // all letters present
  return undefined;
}