console.log("function.js")

function sayHello(){
    console.log("hello cohort 61");

}
sayHello();
function greet(name){
    console.log("hello" + name);

}
greet(" mat");
greet(" eric");

function greet2(fname,lname){
console.log("welcome to the system" + fname +""+ lname);
}
greet2(" Mat","Emery")

function doublenumber(num){
    console.log(num * 2)
}
doublenumber(2)
doublenumber(4)
doublenumber(8)


 function welcome(){
    let name= prompt("enter your name");
    console.log("welcome" + name);
 }

 function add(num1=0,num2=0){
    let total=
    num1 + num2;
    console.log("the total is:"+ total);
 }
 add(2,);
 add(15,3);
 add(3,561);

 function combinenames(name1="unknown", name2="unknown"){
    console.log(`${name1} ${name2}`)
 }
 combinenames("mat", " emery");
 combinenames("mat,");
 combinenames();

// function minutestoseconds(num){
  //  let total=(num * 60);
    //console.log(`${num} minutes converted to seconds is ${total} seconds`);
 //}
  function minutestoseconds (){
    let num = Number(prompt ("enter the mins"));
    let total=(num*60);
    document.getElementById("results").innerHTML+=`
        <li class="conv">${num} minutes converted to seconds is ${total} seconds
        `;
 }
 