let stopLightElement = document.getElementById('stopLight');
let readyLightElement = document.getElementById("readyLight");
let goLightElement = document.getElementById("goLight");
let stopButtonElement = document.getElementById("stopButton");
let goButtonElement = document.getElementById("goButton");
let readyButtonElement = document.getElementById("readyButton");

function turnOnRed() {
    stopLightElement.style.backgroundColor = "blue";
    readyLightElement.style.backgroundColor = "#4b5069";
    goLightElement.style.backgroundColor = "#4b5069"
    stopButtonElement.style.backgroundColor = "blue"
    readyButtonElement.style.backgroundColor = "#4b5069";
    goButtonElement.style.backgroundColor = "#4b5069"
}

function turnOnYellow() {
    stopLightElement.style.backgroundColor = "#4b5069";
    readyLightElement.style.backgroundColor = "#f7c948";
    goLightElement.style.backgroundColor = "#4b5069"
    stopButtonElement.style.backgroundColor = "#4b5069"
    readyButtonElement.style.backgroundColor = "#f7c948";
    goButtonElement.style.backgroundColor = "#4b5069"
}

function turnOnGreen() {
    stopLightElement.style.backgroundColor = "#4b5069";
    readyLightElement.style.backgroundColor = "#4b5069";
    goLightElement.style.backgroundColor = "#199473"
    stopButtonElement.style.backgroundColor = "#4b5069"
    readyButtonElement.style.backgroundColor = "#4b5069";
    goButtonElement.style.backgroundColor = "#199473"
}