
let celsius = document.getElementById("Celsius");
let farenheit = document.getElementById("Fahrenheit");
let kelvin = document.getElementById("Kelvin");

let btn = document.querySelector('button');

function roundNumber (number) {
  return Math.round(number *100)/100
}


// Cel to Far and Kel

celsius.addEventListener('input', function(){
  
  let tempCelsius = parseFloat(celsius.value)
  let tempFarenheit = (tempCelsius*(9/5)) + 32;
  let tempKelvin = tempCelsius + 273.15;

  farenheit.value = roundNumber(tempFarenheit)
  kelvin.value = roundNumber(tempKelvin)
})


// Far to Cel and Kel 

farenheit.addEventListener('input', function(){

  let tempFarenheit = parseFloat(farenheit.value)
  let tempCelsius = (tempFarenheit - 32) * (5/9);
  let kTemp = (tempFarenheit -32) * (5/9) + 273.15;

  celsius.value = roundNumber(tempCelsius)
  kelvin.value = roundNumber(tempCelsius)
})

//Kel to Ce and Far

kelvin.addEventListener('input', function(){

  let tempKelvin = parseFloat(kelvin.value)
  let tempCelsius = kTemp - 273.15;
  let tempFarenheit = (tempKelvin - 273.15) * (9/5) + 32;

  celsius.value = roundNumber(tempCelsius)
  farenheit.value = roundNumber(tempFarenheit)
})


btn.addEventListener('click', ()=>{
  celsius.value = ""
  farenheit.value = ""
  kelvin.value = ""
})
 