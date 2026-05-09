function bounceBounce(arr) {
    
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            result.push(arr[i]);
        }
    }
    return result;
}

//function takes in an array and returns a new array with only the truthy values
function bouncer(arr) {
    return arr.filter(Boolean);
}

//without using filter method
function bouncer(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            result.push(arr[i]);
        }
    }
    return result;
}