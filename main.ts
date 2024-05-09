#! /usr/bin/env node
import inquirer from "inquirer";
  
// Define the programming-related questions
const quizQuestions = [
    {
        question: "Which programming language is known for its use in web development?",
        choices: ["Jaava", "Python", "JavaScript", "C++"],
        correctAnswer: "JavaScript"
    },
    {
        question: "What does CSS stand for?",
        choices: ["Cascading Style Sheets", "Creative Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
        correctAnswer: "Cascading Style Sheets"
    },
    {
        question: "Which symbol is used for single-line comments in JavaScript?",
        choices: ["//", "/*", "<!--", "#"],
        correctAnswer: "//"
    },
    {
        question: "What is the output of the following code: console.log(2 + '2')?",
        choices: ["22", "4", "NaN", "Error"],
        correctAnswer: "22"
    },
    {
        question: "Which of the following is a front-end framework for building user interfaces?",
        choices: ["React", "Node.js", "Express", "Django"],
        correctAnswer: "React"
    },
    {
        question: "What is the keyword used to declare variables in JavaScript?",
        choices: ["var", "let", "const", "variable"],
        correctAnswer: "var"
    },
    {
        question: "What function is used to print output in Python?",
        choices: ["print()", "echo()", "printf()", "display()"],
        correctAnswer: "print()"
    },
    {
        question: "Which data structure uses a Last In, First Out (LIFO) approach?",
        choices: ["Queue", "Stack", "Array", "Linked List"],
        correctAnswer: "Stack"
    },
    {
        question: "What does HTML stand for?",
        choices: ["Hyper Text Markup Language", "Highly Typed Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language"],
        correctAnswer: "Hyper Text Markup Language"
    },
    {
        question: "Which programming language is often used for data analysis and machine learning?",
        choices: ["Java", "Python", "C++", "Ruby"],
        correctAnswer: "Python"
    }
];

// Function to start the quiz
async function startQuiz() {
    let score = 0;

    // Iterate over each question}
    for (const questionData of quizQuestions) {
        const  {userAnswer} = await inquirer.prompt({
            type: "list",
            name: "userAnswer",
            message: questionData.question,
            choices: questionData.choices
        });

        // Check if the answer is correct
        if (userAnswer === questionData.correctAnswer) {
            console.log("Correct!");
            score++;
        } else {
            console.log("Incorrect!");
        }
    }

    // Display final score
    console.log(`Your final score is: ${score}/${quizQuestions.length}`);
}

// Start the quiz
startQuiz();
