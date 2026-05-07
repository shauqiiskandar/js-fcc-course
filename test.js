function drawPyramid(rows) {
    for (let i = 0; i < rows; i++) {
        let str = '';
        
        // Add spaces before 'o's 
        for (let j = 1; j <= rows - i; j++){
            str += ' ';
        }
  
        // Add 'O's to the string
        for (let k = 1; k <= 2*i + 1; k++) {
           str += 'o'; 
        }
        
        console.log(str);
    }
}

drawPyramid(5);
console.log('------------------');
function drawPyramid2(rows) {
    for (let i = 0; i < rows; i++) {
        let str = '';
        // Add spaces before 'x's
        for (let j = 1; j <= rows - i; j++){
            str += ' ';
        }
        // Add 'X's to the string
        for (let k = 1; k <= 2*i + 1; k++) {
           str += 'x'; 
        }
        console.log(str);
    }
}

drawPyramid2(5);