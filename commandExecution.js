// commandExecution.js
import  commandList  from './commandList.js';
import { aboutMe } from './aboutMe.js';
import { listCommand } from './commandInput.js';
import { startDisco } from './disco.js';

export function executeCommand(command, string){
    listCommand(command, arrayToText(string));
    const text = arrayToText(string, command);
    switch (command) {
        case "Alert":
            if (string[1] == "" || string[1] == undefined){
                alert("Input a value")
            }else{
                alert(text);
            }
            break;
        case "Help":
            const prettierArray = commandList.map(obj => `${">" + obj.command}: ${obj.description}`).join('<br>');
            listCommand(command, prettierArray);
            break;
        case "Clear":
            clearConsole();
            break;
        case "CreatePopUp":
            createPopUp(text);
            break;
        case "ChangeColor":
            ChangeColor(text);
            break;
        case "Disco":
            startDisco();
            break;
        case "WhoAmI":
            listCommand("aboutme")
            break;
        case "Timer":
            startTimer(text);
            break;
        case "OpenUrl":
            openUrl(text.trim());
            break;
        case "Var":
            localStorage.setItem(command, string);
            break;
        default:
            console.log("?")
            break;
    }
}
export function openUrl(text){
    if (!text.startsWith("http://") && !text.startsWith("https://")) {
    text = "http://" + text;
  }
    window.location.href = text;
}
  
export function ChangeColor(colorText){
    const splitText = colorText.split(' ');
    let target = splitText[1]; 
    let color = splitText[2];
    
    if (target == "Background"){
        document.documentElement.style.setProperty('--main-color', color);
    }
    else if (target == "Text"){
        document.documentElement.style.setProperty('--text-color', color);
    }
}
  
export function arrayToText(string, command) {
    let text = string.map(obj => `${obj}`).join(' ');
    let pattern = new RegExp('\\b' + command + '\\b', 'i');
    let newStr = text.replace(pattern, '');
    return newStr;
}
  
export function createPopUp(string) {
    let popUp = document.createElement("div");
    let parentElement = document.getElementById('popUpContainer');
    popUp.classList.add("popUp", "animation", "slideIn");
    
    popUp.innerHTML = string;
    parentElement.appendChild(popUp);
  
    setTimeout(function() {
      popUp.classList.remove("slideIn"); 
      popUp.classList.add("slideOut"); 
  
      setTimeout(function() {
        parentElement.removeChild(popUp);
      }, 1000);
    }, 5000);
}
  
export function clearConsole(){
    const promptDiv = document.getElementById('Prompt');
    const paragraphs = promptDiv.getElementsByTagName('p');

    for (let i = paragraphs.length - 1; i >= 0; i--) {
    const paragraph = paragraphs[i];
    paragraph.parentNode.removeChild(paragraph);
    }
}

export function startTimer(text) {
    let hours, minutes, seconds = 0;
    let timer = text.split(":");
    hours = timer[0];
    hours = parseInt(hours.split(" ")[1]);
    minutes = parseInt(timer[1]);
    seconds = parseInt(timer[2]);
    console.log(hours, minutes, seconds)
    let totalseconds = hours * 3600 + minutes * 60 + seconds;
    console.log(totalseconds);
    let timerContainer = document.createElement("div");
    let parentElement = document.querySelector(':root')
    timerContainer.classList.add("Timer", "animation", "slideInTimer");
    
    parentElement.appendChild(timerContainer);
  
    function updateTimer() {
      let hoursLeft = Math.floor(totalseconds / 3600).toString().padStart(2, '0');
      let minutesLeft = Math.floor((totalseconds % 3600) / 60).toString().padStart(2, '0');
      let secondsLeft = (totalseconds % 60).toString().padStart(2, '0');
      
      timerContainer.innerHTML = hoursLeft + ":" + minutesLeft + ":" + secondsLeft;
  
      totalseconds--;
      console.log(totalseconds)
      if (totalseconds == -1) {
        clearInterval(countdown);
        timerContainer.innerHTML = "Timer ended"
        setTimeout(function() {
            timerContainer.classList.remove("slideInTimer"); 
            timerContainer.classList.add("slideOutTimer"); 
        
            setTimeout(function() {
              parentElement.removeChild(timerContainer);
            }, 3000);
          }, 5000);
      }
    }
  
    updateTimer();
  
    let countdown = setInterval(updateTimer, 1000);
}
  
  
  
  