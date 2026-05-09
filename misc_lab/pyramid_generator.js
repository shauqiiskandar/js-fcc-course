function pyramid(character, rows, inverted) {
    for (let i = 0; i < rows; i++) {
        let str = '';
        for (let j = 0; j < rows - i; j++) {
            str += ' ';
        }
        for (let k = 0; k < 2 * i + 1; k++) {
            str += character;
        }
        console.log(str);
    }
}

pyramid('o', 5, false);


//claude answer
function pyramid(character, count, inverted) {
    let result = "\n";  // start with a newline
    
    for (let i = 0; i < count; i++) {
      let spaces;
      let chars;
      
      if (inverted) {
        spaces = " ".repeat(i);
        chars = character.repeat(2 * (count - i) - 1);
      } else {
        spaces = " ".repeat(count - 1 - i);
        chars = character.repeat(2 * i + 1);
      }
      
      result += spaces + chars + "\n";
    }
    
    return result;
  }


//cursor answer
// Option 1: if inside the loop (no ternary, minimal duplication)
function pyramid(character, rows, inverted) {
    let result = "\n";
  
    for (let i = 0; i < rows; i++) {
      let index = i;
      if (inverted) {
        index = rows - 1 - i;
      }
  
      const leadingSpaces = rows - 1 - index;
      const patternCount = 2 * index + 1;
  
      const row = " ".repeat(leadingSpaces) + character.repeat(patternCount);
      result += row + "\n";
    }
  
    return result;
  }

//   Option 2: two outer loops (no ternary, no index variable)
function pyramid(character, rows, inverted) {
    let result = "\n";
  
    if (!inverted) {
      for (let i = 0; i < rows; i++) {
        const leadingSpaces = rows - 1 - i;
        const patternCount = 2 * i + 1;
  
        const row = " ".repeat(leadingSpaces) + character.repeat(patternCount);
        result += row + "\n";
      }
    } else {
      for (let i = rows - 1; i >= 0; i--) {
        const leadingSpaces = rows - 1 - i;
        const patternCount = 2 * i + 1;
  
        const row = " ".repeat(leadingSpaces) + character.repeat(patternCount);
        result += row + "\n";
      }
    }
  
    return result;
  }

//Fewer variables and fewer lines of code

function pyramid(character, rows, inverted) {
    let out = "\n";
  
    for (let i = 0; i < rows; i++) {
      let index = i;
      if (inverted) index = rows - 1 - i;
  
      let str = "";
  
      for (let j = 0; j < rows - 1 - index; j++) str += " ";
      for (let k = 0; k < 2 * index + 1; k++) str += character;
  
      out += str + "\n";
    }
  
    return out;
  }