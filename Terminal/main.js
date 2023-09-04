/* Command list */

import  commandList  from './commandList.js';
import { aboutMe } from './aboutMe.js';
import { executeCommand, ChangeColor, arrayToText, createPopUp, clearConsole } from './commandExecution.js'
import { validCommand, previousCommand, sendCommand, listCommand} from './commandInput.js'



  

const memory = []



document.getElementById("commandPromt").addEventListener("keydown", function(event) {
    sendCommand(event);
});
