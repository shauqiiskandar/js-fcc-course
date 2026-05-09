//input an array of scores and return the average
function getAverage(scores) {
    let total = 0;
    for (const s of scores) {
        total += s;
    }
    return total / scores.length;
}

console.log(getAverage([100, 90, 80, 70, 60]));

// Your getGrade function should return "A+" if the score is 100.
// If the score is between 90 and 99, it should return "A".
// If the score is between 80 and 89, it should return "B".
// If the score is between 70 and 79, it should return "C".
// If the score is between 60 and 69, it should return "D".
// If the score is less than 60, it should return "F".
function getGrade(score) {
    if (score === 100) {
        return "A+";
    } else if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

// Your hasPassingGrade function should return true if the score is 60 or higher, and false otherwise.
function hasPassingGrade(score) {
    if (score >= 60) {
        return true;
    } else {
        return false;
    }  
}

console.log(hasPassingGrade(100));
console.log(hasPassingGrade(90));
console.log(hasPassingGrade(80));
console.log(hasPassingGrade(70));
console.log(hasPassingGrade(60));
console.log(hasPassingGrade(59));

//Inputs:
// scores: array of class scores
// studentScore: the student’s score
// Output: a single formatted sentence:
// If the student passed:
// "Class average: X. Your grade: Y. You passed the course."
// If the student failed:
// "Class average: X. Your grade: Y. You failed the course.
function studentMsg(scores, studentScore) {
    let average = getAverage(scores);
    let grade = getGrade(studentScore);
    if (hasPassingGrade(studentScore)) {
        return `Class average: ${average}. Your grade: ${grade}. You passed the course.`;
    } else {
        return `Class average: ${average}. Your grade: ${grade}. You failed the course.`;
    }
    
}