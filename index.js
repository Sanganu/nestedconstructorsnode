const Game = require( "./game.js");
var questionAns =[
    {
        question:"question1",
        answer: "true"
    },
    {
        question:"question2",
        answer: "true"
    },
    {
        question:"question3",
        answer: "true"
    },
    {
        question:"question4",
        answer: "true"
    }
]
const myGame = new Game(questionAns);
//myGame.checkUserResponse(true); //Error

myGame.startQuiz();
