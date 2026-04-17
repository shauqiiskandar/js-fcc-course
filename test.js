//create a getVowelCount function with a parameter called sentence,Your function should return the total number of vowels in a sentence.
function getVowelCount(sentence) {
    let count = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < sentence.length; i++) {
        if (vowels.includes(sentence[i].toLowerCase())) {
            count++;
        }
    }
    return count;
}

//test your getVowelCount function.

//Create a vowelCount variable and assign it the result of calling the getVowelCount function with the argument of "Apples are tasty fruits"
let vowelCount = getVowelCount("Apples are tasty fruits");
//