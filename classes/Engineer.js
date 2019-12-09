const Employee = require("./Employee")

class Engineer extends Employee{
    constructor(name,id,email,github){
        super(name,id,email);
        this.gitHub = github;
    }
    getGitHub(){
        return this.gitHub
    }
    getRole(){
        return "Engineer"
    }
    getHtml(){
        console.log(super.getName());
        console.log(super.getEmail());
    }
}

module.exports = Engineer;
