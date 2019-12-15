const inquirer = require("inquirer");
const fs = require("fs");
const engineer = require("./templates/engineer");
const Engineer = require("./classes/Engineer");
const Manager = require("./classes/Manager");
const Intern = require("./classes/Intern");
const genManager = require("./templates/manager");
const genEngineer = require("./templates/engineer");
const genIntern = require("./templates/intern");

let engineers = [];
let interns = [];
let userresponse = "";
let team = [];
const questions = [
    {
        type:"input",
        name: "name",
        message:"Enter Employee Name: "
        // validate: answer => {
        //     if(answer.name != ""){
        //         return true;
        //     }
        //     else {
        //         return "Please enter Employee name (cannot be blank)"
        //     }
        // },
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
    // validate: answer => {
    //     if (answer.github !== "")
    //         return true;
    //     else{
    //         return "Enter valid Github username"
    //     }
    // }
}

const internQ = {
    type:"input",
    name:"school",
    message:"Enter School Name: ",
    // validate: answer => {
    //     if (answer.school != "")
    //         return true;
    //     else {
    //         return "Please enter valid School Name: "
    //     }
    // }
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
    let memberQuestions = [...questions,internQ];
  //  memberQuestions.push(internQ);
    //console.log(questions);
    inquirer.prompt(memberQuestions)
    .then((memberdata) => {
        const intern = new Intern(memberdata.name,memberdata.id,memberdata.email,memberdata.school)
       // team.push(intern);
       let data = {
           name: intern.getName(),
           id:intern.getId(),
           email:intern.getEmail(),
           school:intern.getSchool()
       }
       return genIntern(data)
       
    })
    .then(html => {
        fs.appendFile("./templates/teamhtml.html",html,function(err,result){
            if (err){
                console.log("Error in ",err)
            }
            else{
                console.log("REsult",result);
                displayMenu();
            }
        })
    })
    .catch((error) => {
        console.log("Error in getting Team member details",error)
    })
}

function getManagerDetails(){
    let managerQuestions = [...questions,managerQ];
   // managerQuestions.push(managerQ);
    // console.log("User Entry for Manager",questions);
    // console.log("Manager",managerQuestions)
    inquirer.prompt(managerQuestions)
    .then(response => {
        let teammanager = new Manager(response.name,response.id,response.email,response.offNum)
        let data = {
            email: teammanager.getEmail(),
            role: teammanager.getRole(),
            name:teammanager.getName(),
            id: teammanager.getId(),
            office: teammanager.getOfficeNumber()

        }
        return genManager(data);
       // team.push(teammanger);
    })
    .then(html =>{
        console.log("The Manager",html)
        fs.writeFile("./templates/teamhtml.html",html,function(err,result){
            if(err){
                console.log("Error",err)
            }
            else{
                console.log("Manager html written",result)
                displayMenu();
            }
        })
    
        
    })
    .catch(error => {
        console.log("Error in getting Manager details",error);
    })
}

function getEngineerDetails(){
 //   console.log("Engineer details",questions)
    let engineerQuestions = [...questions,engineerQ];
   // engineerQuestions.push(engineerQ);
    inquirer.prompt(engineerQuestions)
    .then(memberdata => {
        const engineer = new Engineer(memberdata.name,memberdata.id,memberdata.email,memberdata.github);
        let data = {
            name: engineer.getName(),
            id:engineer.getId(),
            email:engineer.getEmail(),
            github:engineer.getGitHub()
        }
       // team.push(engineer);
        return genEngineer(data)
    })
    .then(html =>{
        fs.appendFile("./templates/teamhtml.html",html,function(err,result){
            if (err) {
                console.log('Error in writing to the file',err)
            }
            else{
                console.log("REsult",result);
                displayMenu();
            }
        });
    })
    .catch(error => {
        console.log("Error in getting Engineer data",error)
    })
}



function generateTeamHtml(){
    console.log("generate html")
    let template = fs.readFileSync("./templates/basictemplate.html","utf8");
    let teamGenHtml = fs.readFileSync("./templates/teamhtml.html","utf8");
    console.log("Read",teamGenHtml);
    console.log("Read",template)
    const pattern = new RegExp("{{ "+"teamdetails"+" }}");
    let output = template.replace(pattern,teamGenHtml)
    fs.writeFileSync("index.html",output)
}
//Main Program
console.log("==============================================");
console.log("           Welcome to Team creation app");
console.log("===============================================");
console.log("Enter Manager details for the team");
getManagerDetails();
