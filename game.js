var Gamecard = require("./gamecard.js");

function Game(quiz) {
    this.quiz = [];
    var allquestion = [];
    for (let i = 0; i < quiz.length; i++) {
        const gamecrd = new Gamecard(quiz[i].question, quiz[i].answer);
        allquestion.push(gamecrd);
    }
    this.quiz = quiz;
    this.score = 0;

    this.checkScore = () => {

        for (let i = 0; i < quiz.length; i++) {
            if (this.quiz[i].checkUserResponse) {
                this.score++;
            }
        }
        console.log("Game Score: ", this.score);
    }
};
//export default Game;
module.exports = Game;

