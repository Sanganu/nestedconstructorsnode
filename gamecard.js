function Gamecard(question, answer) {
        this.question = question;
        this.answer = answer;

      this.checkUserResponse = function (userresponse) {
        if (this.answer === userresponse) {
          return true;
        }
        else {
          return false;
        }
      }
}

module.exports = Gamecard;
