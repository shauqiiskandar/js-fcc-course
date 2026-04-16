const questions = [
  {
    category: "Science",
    question: "What is the chemical symbol for water?",
    choices: ["H2O", "CO2", "O2"],
    answer: "H2O"
  },
  {
    category: "Geography",
    question: "What is the capital of France?",
    choices: ["Berlin", "Paris", "Madrid"],
    answer: "Paris"
  },
  {
    category: "Math",
    question: "What is 12 multiplied by 12?",
    choices: ["124", "144", "132"],
    answer: "144"
  },
  {
    category: "History",
    question: "Who was the first president of the United States?",
    choices: ["Abraham Lincoln", "George Washington", "Thomas Jefferson"],
    answer: "George Washington"
  },
  {
    category: "Technology",
    question: "What does CPU stand for?",
    choices: ["Central Processing Unit", "Computer Personal Unit", "Central Program Utility"],
    answer: "Central Processing Unit"
  }
];

function getRandomQuestion(questionsArray) {
  let randomIndex = Math.floor(Math.random() * questionsArray.length);
  return questionsArray[randomIndex];
}

function getRandomComputerChoice(choices) {
  let randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getResults(question, computerChoice) {
  if (computerChoice === question.answer) {
    return "The computer's choice is correct!";
  } else {
    return "The computer's choice is wrong. The correct answer is: " + question.answer;
  }
}