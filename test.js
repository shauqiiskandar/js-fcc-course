function toObject(value) {
  if (value === null || value === undefined) {
    console.log("1");
    return {};
  }

  if (typeof value === "object") {
    console.log("2");
    return value;
  }
  console.log("3");
  return Object(value);
}

console.log(toObject(null));

console.log(toObject(true));

console.log(toObject([1, 2, 3]));