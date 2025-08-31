console.log("if_statement")
let result=41;

if(result > 40){
    console.log("you passed the exam!")
}

let result1=45
let result2=45
if(result1==result2){
    console.log("the results are the same")
}
if(result > 40){
    console.log("you passed the exam!")
}else{
     console.log("you did not pass the exam!")
}
 let watertemp=102

 if(watertemp>=100){
    console.log("the water is boiling")
 }else{
    console.log("the water is not ready yet")
 }
 function agecalculator(){
    let age = prompt("Enter your age")

    if(age<13){
        console.log("you are a child")
    }else if(age<21){
        console.log("you are a teen")
    }else if(age<54){
        console.log("you are an adult")
    }
 }

 function light(){
    let light = prompt("tell the light what color to change to")

    if(light == green){
        console.log("go!")
    }else if( light == yellow){
        console.log("slow down!")
    }else{
        console.log("stop!")
    }
 }


 function age(){
    let age = prompt("Please enter your age")

    if(age < 12){
        console.log("Your ticket cost is $5")
    }else if(age < 18){
        console.log("Your ticket cost is $8")
    }else{
        console.log("your ticket cost is $10")
    }
 }
 function temp(){
    let temp= prompt("What is the temp outside today in °C?")
    const p = document.getElementById(result)
    p.classList.remove("hot","normal","cold")

    if(temp < 15){
        p.classList.add("cold")
        outfit="I would recommend you wear a jacket";
    }else if(temp < 25){
        p.classList.add("normal")
        outfit="It would be nice with a sweater";
    }else{
        p.classList.add("hot")
        outfit="A t-shirt would work great!";
    }
    
    p.innerHTML= outfit;
 }
 let action = prompt("choose and action: run or jump");

 switch(action){
    case"jump":
        console.log("you jumped")
            break;
    case"run":
        console.log("you are running")
            break;
    default:
        console.log("unknown input")
            break;
 }