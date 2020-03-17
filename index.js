//Dependencies 
const { prompt } = require("inquirer");
const logo = require("asciiart-logo");
const db = require("./db");
const cTable = require("console.table");

//Main Function 

init();

// Display logo text, load main prompts
function init() {
  const logoText = logo({ name: "Employee Manager" }).render();

  console.log(logoText);

}