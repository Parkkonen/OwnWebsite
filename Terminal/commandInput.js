// commandInput.js

import { memory } from './memory.js';
import { commandList } from './commandList.js';
import { executeCommand } from './commandExecution.js';
import { aboutMe } from './aboutMe.js';

/*Returns if command is valid, true of false. */
export function validCommand(text) {
    if (memory[0] !== text) {
        memory.unshift(text);
    }      

    let commandExists = false;

    for (let i = 0; i < commandList.length; i++) {
        let splitString = text.split(' ');
        if (splitString[0] === commandList[i].command) {
            console.log(commandList[i].command);
            executeCommand(commandList[i].command, splitString);
            commandExists = true;
            break;
        }
    }

    if (!commandExists) {
        const errorMessage = `${text} is not recognized as an internal or external command. Write "Help" to see a list of all commands`;
        listCommand("Invalid Command", errorMessage);
    }

    return commandExists;
}

let currentPrompt = -1;
export async function previousCommand() {
    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowUp') {
            if (currentPrompt < memory.length -1){
                currentPrompt++;
                console.log(currentPrompt)
                document.getElementById("commandPromt").value = memory[currentPrompt];
                console.log(memory[currentPrompt]);
            }
        }
        if (event.key === 'ArrowDown') {
            if (currentPrompt > 0){
                currentPrompt--;
                console.log(currentPrompt)
                document.getElementById("commandPromt").value = memory[currentPrompt];
                console.log(memory[currentPrompt]);
            }
        }
    })
}
previousCommand();

export function sendCommand(event){
    if (event.key === "Enter" && displayLettersRunning == false) {
        currentPrompt = -1;
        let text = document.getElementById("commandPromt");
        let textValue = text.value;
        console.log(textValue);
        console.log(validCommand(textValue));
        document.getElementById("commandPromt").value = "";
    }
}
let displayLettersRunning = false;


export function listCommand(command, string){
    if (string == undefined){ 
        string = "";        /* if string is empty make sure it doesn't show up as "undefined" */
    }
    if (command == "aboutme"){
        const newElement = document.createElement("p");

        newElement.id = "aboutMeParagraph";

        let Container = document.getElementById("Container");
        Container.appendChild(newElement);
        function delay(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
          /* Create a "typing" animation for WhoAmI command */
          async function displayLetters() {
            if (!displayLettersRunning){
                displayLettersRunning = true;
                let aboutMeString = "";
                for (let i = 0; i < aboutMe.length; i++) {
                  for (let y = 0; y < aboutMe[i].length; y++) {
                    aboutMeString += aboutMe[i][y];
                    document.getElementById("aboutMeParagraph").innerHTML = aboutMeString;
                    await delay(25);
                  }
                  aboutMeString += "<br>"
                  Container.scrollTop = Container.scrollHeight;
            }
            }
            displayLettersRunning = false;
          }
          
          displayLetters();
          
        
    }else{
        let commandHistoryBlock = document.createElement("p");
        commandHistoryBlock.innerHTML = string;
    
        let parentElement = document.getElementById("Container");
        parentElement.appendChild(commandHistoryBlock);
        parentElement.scrollTop = parentElement.scrollHeight;
    }
}
