function Gamecard(){
     this.question = question;
     this.answer = answer;
     this.checkuserresponse = function(userresponse){
       if (this.answer === userresponse){
         return true;
       }
       else{
         return false;
       }
    }
}

module.exports = Gamecard;
