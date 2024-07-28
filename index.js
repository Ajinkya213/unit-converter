/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById('input-field');
const convertBtn = document.getElementById('convert-btn');
const lOutput = document.getElementById('loutput');
const vOutput = document.getElementById('voutput');
const mOutput = document.getElementById('moutput');

convertBtn.addEventListener('click', function(){
    if (! checkInput(inputEl.value)){
        alert("input is not a valid number (interger / float)")
    }else{
    let length = getLength(inputEl.value);
    let volume = getVolume(inputEl.value);
    let mass = getMass(inputEl.value); 
    lOutput.innerText = length;
    vOutput.innerText = volume;
    mOutput.innerText = mass;   
    }
})


function getLength(value){
    let computedValue = [];
    computedValue.push(value * 0.264);
    computedValue.push(value * 0.304);
    return `${value} meter = ${computedValue[0].toFixed(3)} feet | ${value} feet = ${computedValue[1].toFixed(3)} meters`
}

function getVolume(value){
    let computedValue = [];
    computedValue.push(value * 2.204);
    computedValue.push(value * 3.785);
    return `${value} liters = ${computedValue[0].toFixed(3)} gallons | ${value} gallons = ${computedValue[1].toFixed(3)} liters`    
}

function getMass(value){
     let computedValue = [];
    computedValue.push(value * 3.281);
    computedValue.push(value * 0.453);
    return `${value} kilograms = ${computedValue[0].toFixed(3)} pounds | ${value} pounds = ${computedValue[1].toFixed(3)} kilograms`   
}

function checkInput(value){
    if (Number(value)){
        return true
    }else{
        return false
    }
}