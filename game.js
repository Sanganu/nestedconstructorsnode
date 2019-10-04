// import { dirname } from "path";

var Gamecard = require("./gamecard.js");


function Game(quiz) {
    this.quiz = [];
    this.allquestion = [];

    for (let i = 0; i < quiz.length; i++) {
        const gamecrd = new Gamecard(quiz[i].question, quiz[i].answer);
        allquestion.push(gamecrd);
    }
    console.log("Allquestion",allquestion);
    // this.quiz = quiz;
    this.score = 0;
    this.currentquestion = 0;
    
    this.checkScore = () => {

        for (let i = 0; i < allquestion.length; i++) {
            if (this.quiz[i].checkUserResponse) {
                this.score++;
            }
        }
        console.log("Game Score: ", this.score);
    }
     
     this.startQuiz = () => {
        let i =0;
      
    }
    
};
//export default Game;
module.exports = Game;

