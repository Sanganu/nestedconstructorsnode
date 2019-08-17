const inquirer = require("inquirer");

function Gamecard(question, answer) {
        this.question = question;
        this.answer = answer;

      this.checkUserResponse = function (userresponse) {
        console.log("User Response");
        if (this.answer === userresponse) {
          return true;
        }
        else {
          return false;
        }
      }
      this.displayQuestion = () => {
        
            console.log("Question: ",this.question);
            inquirer.prompt([
              {
                name:'optionselect',
                type:'checkbox',
                choices:['true','false']
              }
            ])
            .then(function(response){
              console.log(response.optionselect);
              return response.optionselect;
            })
            .catch(function(error){
              console.log("Error in accepting user input",error);
            });
   
    }
}

module.exports = Gamecard;
