function titleCase(str) {
    return str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

console.log(titleCase("hello world"));
console.log(titleCase("hello world"));

//Using map method
function titleCase(str) {
    var lower = str.toLowerCase();
  
    var words = lower.split(" ");
  
    var titledWords = words.map(function (word) {
      var firstLetter = word.charAt(0).toUpperCase();
      var rest = word.slice(1);
      return firstLetter + rest;
    });
  
    var result = titledWords.join(" ");
    return result;
  }

// no map method
function titleCase(str) {
    var lower = str.toLowerCase();
    var words = lower.split(" ");
  
    var titledWords = [];
    for (var i = 0; i < words.length; i++) {
      var word = words[i];
  
      var firstLetter = word.charAt(0).toUpperCase();
      var rest = word.slice(1);
  
      titledWords.push(firstLetter + rest);
    }
  
    return titledWords.join(" ");
  }