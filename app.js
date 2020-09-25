// import functions and grab DOM elements
import {sum} from './mathUtils.js'

const addInput1 = document.getElementById('add-input-one')
const addInput2 = document.getElementById('add-input-two')
const addButton = document.getElementById('add-button')
const addResult = document.getElementById('add-result')

addButton.addEventListener('click', sum)

const subtractInput1 = document.getElementById('subtract-input-one')
const subtractInput2 = document.getElementById('subtract-input-two')
const subtractButton = document.getElementById('subtract-button')
const subtractResult = document.getElementById('subtract-result')

subtractButton.addEventListener('click', () => {
    const value1 = subtractInput1.value;
    const value2 = subtractInput2.value;

 

    const difference = value1AsNumber - value2AsNumber;

    subtractResult.textContent = difference;
})

const multiplyInput1 = document.getElementById('multiply-input-one')
const multiplyInput2 = document.getElementById('multiply-input-two')
const multiplyButton = document.getElementById('multiply-button')
const multiplyResult = document.getElementById('multiply-result')

multiplyButton.addEventListener('click', () => {
    const value1 = multiplyInput1.value;
    const value2 = multiplyInput2.value;
    
    console.log(value1, value2);

    const value1AsNumber =Number(value1);
    const value2AsNumber = Number(value2);

    console.log(typeof value1AsNumber, typeof value2AsNumber)

    const product = value1AsNumber * value2AsNumber;

    console.log(product);

    multiplyResult.textContent = product;
})


/* const userInput = document.getElementById('input');
console.log(userInput);
const buttonInput = document.getElementById('buttonInput');
//get element by id is linking the JS to HTML
const button = document.getElementById('submitName');
button.addEventListener('click', () => {
    // post-click logic goes here! 
    //The console log is printing the input's string value to the h1 where name goes!
    console.log(userInput.value)
buttonInput.textContent = userInput.value
*/