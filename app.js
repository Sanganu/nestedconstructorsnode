const inquirer = require("inquirer");
const fs = require("fs");
const engineer = require("./templates/engineer");
const Engineer = require("./classes/Engineer");
const Manager = require("./classes/Manager");
const Inter = require("./classes/Intern");

let engineers = [];
let interns = [];
//let memberQuestions = []
let userresponse = "";
let team = [];
const questions = [
    {
        type:"input",
        name: "name",
        message:"Enter Employee Name: ",
        validate: answer => {
            if(answer.name != ""){
                return true;
            }
            else {
                return "Please enter Employee name (cannot be blank)"
            }
        },
    },
    {
        type:"input",
        name:"id",
        message: "Enter Employee Id: "
        // validate: answer => {
        //     if ( answer.id.match(/^[1-9]\d*$/)){
        //         return true;
        //      }
        //      else{
        //          return "Please enter a number greater than 0"
        //      }
        // }
    },
    {
        type:"input",
        name:"email",
        message:"Enter Employee Email: "
        // validate: answer => {
        //     if (answer.email.match(/^[a-z].[0-9].[.com]$/)){
        //         return true;
        //     }
        //     else{
        //         return 'Please enter a valid Email ID:'
        //     }
        // }
    }
]

const managerQ = {
    type: "input",
    name:"offNum",
    message: "Enter Manager Office Number: "
    // validate: answer => {
    //     if (answer.offNum.match(/^[1-9]+$/))
    //        return true;
    //     else{
    //         return "Please enter a valid Office number:"
    //     }
    // }
}

const engineerQ = {
    type: "input",
    name: "github",
    message: "Enter Github username: ",
    validate: answer => {
        if (answer.github !== "")
            return true;
        else{
            return "Enter valid Github username"
        }
    }
}

const internQ = {
    type:"input",
    name:"school",
    message:"Enter School Name: ",
    validate: answer => {
        if (answer.school != "")
            return true;
        else {
            return "Please enter valid School Name: "
        }
    }
}

const displayMenu = () =>{
    inquirer.prompt([
        {
            type:"list",
            name:"option",
            message:"Which team member you would like to add",
            choices: ["Engineer","Intern","Exit"]

        }
    ]).then((userresponse) => {
  
        switch(userresponse.option){
            case "Engineer":
               
                 getEngineerDetails();
                  break;
            case "Intern" :
                 getInternDetails();
                  break;
            case "Exit":
                generateTeamHtml();
                 process.exit(0);
                 break;
            
        }
     
    }).catch((error) => {
        console.log("Error in getting choice")
    })
}

function getInternDetails(){
    let memberQuestions = questions;
    memberQuestions.push(internQ);
    console.log(questions);
    inquirer.prompt(memberQuestions)
    .then((memberdata) => {
        const intern = new Intern(memberdata.name,memberdata.id,memberdata.email,memberdata.school)
        team.push(intern)
       
    })
    .catch((error) => {
        console.log("Error in getting Team member details",error)
    })
}

function getManagerDetails(){
    let managerQuestions = questions;
    managerQuestions.push(managerQ);
    inquirer.prompt(managerQuestions)
    .then(response => {
        console.log("User Entry for Manager",questions);
        var teammanger = new Manager(response.name,response.id,response.email,response.offNum)
        team.push(teammanger);
        displayMenu();

    })
    .catch(error => {
        console.log("Error in getting Manager details",error);
    })
}

function getEngineerDetails(){
    console.log("Engineer details",questions)
    let engineerQuestions = questions;
    engineerQuestions.push(engineerQ);
    inquirer.prompt(engineerQuestions)
    .then(memberdata => {
        const engineer = new Engineer(memberdata.name,memberdata.id,memberdata.email,memberdata.github);
        team.push(engineer);
        displayMenu();
    })
    .catch(error => {
        console.log("Error in getting Engineer data",error)
    })
}


function generateTeamHtml(){
   for(let i =0;i<team.length;i++){
       console.log(team[i])
   }
}

//Main Program
console.log("===========================");
console.log("Welcome to Team creation app");
console.log("==============================");
console.log("Enter Manager details for the team");
getManagerDetails();
