console.log("My script is working!");

// string value
let firstname = "mathew"
let lastname = "emery"
//Numerical value
let myage = "29"
let myheigth ="5.11"
// Boolean values
let isastudent = "true"
let isaprofessor = "false"
// Display values in console
console.log(firstname);
console.log(lastname);
console.log(myheigth)
console.log(myage);
console.log(isastudent);
console.log(isaprofessor);
// opertation with numbers
let num1 = 10;
let num2 = 2;
addition= num1 + num2;
subtraction= num1 - num2;
mutiplication= num1 * num2;
division= num1/num2;
// console log
console.log("These are the fundimental arithmatic operations for " + num1 +"and" + num2);
console.log("addition of" + num1 + "and" + num2 +"is equal to",addition);

// pi numbers
let a = "solution"
let pi = "3.14";
let r = "3cm"
//console
console.log()
//const
let intergernumber = "1625";
let num3 = 1250;
let num4 = 125;
let num5 = 375;
additon=num4 + num5;

console.log("The value of intergernumber is:" + intergernumber);
console.log(intergernumber - num3);
console.log(num5 + num4);

let aVariable;
aVariable = 20;
let othervariable = 30;
console.log(aVariable, othervariable);
aVariable = 50;
othervariable = 100;
console.log(aVariable,othervariable);
let weekdays = 7;
console.log(weekdays)
weekdays = 10;
console.log(weekdays)


const daysinweek = 7;
let vacationdays = 14;
totaldays=(daysinweek+vacationdays);
console.log(daysinweek + vacationdays);
console.log("one week plus my vacation days is",totaldays + "days in total" );
vacationdays = 21;
totaldays=(daysinweek+vacationdays);
console.log("one week plus my vacation days is",totaldays + "days in total" );

// assignment 1
let char ="mat"
let action = "jumping"
let object = "trapoline"
let place = "my house"
let time ="afternoon"

console.log(char + " was at " + place + " in the " + time)
console.log("we were " + action + " on my " + object)
console.log(char + " was " + action + " too high and jumped out of " + object + " and bumped his head.")



function convertTemperature() {
  let temperatureInput = prompt("Enter the temperature value:");

  let temperature = parseFloat(temperatureInput);

  if (isNaN(temperature)) {
    console.log("Invalid input. Please enter a valid number for the temperature.");
    return; 
  }


  let originalUnit = prompt("Enter the original unit (C for Celsius, F for Fahrenheit):").toUpperCase();

  let convertedTemperature;
  let convertedUnit;

  if (originalUnit === 'C') {

    convertedTemperature = (temperature * 9 / 5) + 32;
    convertedUnit = 'Fahrenheit';
    console.log(`${temperature}°C is equal to ${convertedTemperature.toFixed(2)}°F.`);
  } else if (originalUnit === 'F') {

    convertedTemperature = (temperature - 32) * 5 / 9;
    convertedUnit = 'Celsius';
    console.log(`${temperature}°F is equal to ${convertedTemperature.toFixed(2)}°C.`);
  } else {
    console.log("Invalid unit. Please enter 'C' for Celsius or 'F' for Fahrenheit.");
    return;
  }
}
convertTemperature();



