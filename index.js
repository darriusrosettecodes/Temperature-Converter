//When we type a number into the input it will be plugged into an equation, then equation will then be interpolated into a string that will be put on the page using the DOM

const title = document.querySelector('.js-input-title')
let userInput = document.querySelector('.js-user-input')
const result = document.querySelector('.js-result')
const changeUnit = document.querySelector('.js-change-units-btn')

function convertDegrees(){
    if(title.innerHTML === 'Celsius to Fahrenheit (ºC to ºF)'){
        userInput.value = userInput.value * (9/5) + 32
        result.classList.add('display-result')
        result.innerHTML = `${userInput.value} °F`
        userInput.value = ''
    }
    else if(title.innerHTML === 'Fahrenheit to Celsuis (ºF to ºC)' ){
        result.classList.add('display-result')
        userInput.value = (userInput.value - 32) * 5/9
        result.innerHTML = `${userInput.value} °C`
        userInput.value = ''
    }
}

function switchDegrees(){
    result.innerHTML = ''
    if(changeUnit.innerHTML === 'Fahrenheit to Celsius (ºF to ºC)'){
        userInput.setAttribute('placeholder', '°C')
        changeUnit.innerHTML = 'Celsius to Fahrenheit (ºC to ºF)'
        title.innerHTML = 'Fahrenheit to Celsuis (ºF to ºC)'
    }
    else{
        userInput.setAttribute('placeholder', '°F') 
        changeUnit.innerHTML = 'Fahrenheit to Celsius (ºF to ºC)'
        title.innerHTML = 'Celsius to Fahrenheit (ºC to ºF)'
    }
}