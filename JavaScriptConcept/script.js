/*
var a;
a = 5;
//THis is a single comment
/*
THis is a multiple value comment 
*/
/*
alert(a);
let x;
x=5;
let y =20;
let z;
z = x + y **y;
console.log(z);
alert(z);
*/
// If condition
/*
let age = 43;
let hasvotercard = 'Yes'
if(age>=18){
    if(hasvotercard=="Yes"){
        alert("You are eligile to vote");
    }
    else{
        alert("Please get your voter id card.")
    }    
}
else if(age>=18 && hasvotercard!='Yes'){
    alert("Please get your voter idcard.")
}
else{
    alert("You are not eligible for vote.")
}
*/



// let isloggedin = 0; 
// // if 0 loggedout if 1 loogedin
// if(isloggedin==0){
//     document.write("Please Login!")
// }
// else{
//     document.write("Logout")
// }

// // Ternary Operator
// let option = isloggedin == 1 ? "Logout" : "Login";
// document.write(option)
// alert(option)

// // Switch Statement

// let input;
// input ='y';
// if(input===1){
//     document.write("Continue. .....")
// }
// else if(input==='y'){
//     document.write("Continue. .....")
// }
// else if(input==='yes'){
//     document.write("Continue. .....")
// }
// else if(input===0){
//     document.write("End. .....")
// }
// else if(input==='n'){
//     document.write("End. .....")
// }
// else if(input==='no'){
//     document.write("End .....")
// }
// else{
//     document.write("Wrong Input .....")
// }

// // switch statement

// switch(input){
//     case 1: //if(input===1)
//         document.write("Continue...")
//         break;
//     case "y": //if(input==='y')
//         document.write("Continue...")
//         break;
//     case "yes": //if(input==='yes')
//         document.write("Continue...")
//         break;
//     case 0: //if(input===0)
//         document.write("No...")
//         break;
//     case "n": //if(input==='n')
//         document.write("No...")
//         break;
//     case "no": //if(input==='no')
//         document.write("No...")
//         break;
//     default :
//         document.write("Wrong Input .....")
// }


// 

// switch(input){
//     case 1: //if(input===1)
//     case "y": //if(input==='y')
//     case "yes": //if(input==='yes')
//         document.write("Continue...")
//         break;
//     case 0: //if(input===0)
//     case "n": //if(input==='n')
//     case "no": //if(input==='no')
//         document.write("No...")
//         break;
//     default :
//         document.write("Wrong Input .....")
// }

// Looping 
//  let counter = 0;
//  while(counter <=10){
//     document.write("FresherHire");
//     counter++;
//  }

//  let counter = 0;
//  while(counter <=10){
//     counter++;
//  }
//  document.write("FresherHire");


// let count = 1;
// let sum = 0;
// while(count <=100){
//     if(count%2==0){
//         sum = sum + count;
//     }
//     count++;
// }
// document.write(sum,"  ")


// Do while loop
// atleast one bar print krega
// let counting = 12
// do {
//     document.write("FresherHire Do While Demo");
//     counting++;
// }
// while (counting<=10){
// }

// For loop

// for(let counted = 0; counted<=10;counted++){
//     document.write("Welcome to FresherHIre",'<br>')
// }
// document.write("Welcome to FresherHIre");

// 
/*
for(let counted = 0; counted<=10;counted++){
    if(counted==5){
        break
    }
    document.write("Welcome to FresherHIre",'<br>');
}
*/

// Nested loop
/*
for(let counted = 0; counted<=10;counted++){
    document.write(counted,'<br>');
    for(let counter2 = 0;counter2<3;counter2++){
        if (counter2==2){
            break;
        }
        document.write("Nested Loop Statement",'<br><br>');
    }
}
*/

// Level loop
/*
outerloop:for(let counted = 0; counted<=10;counted++){
    document.write(counted,'<br>');
    for(let counter2 = 0;counter2<3;counter2++){
        if (counter2==2){
            break outerloop;
        }
        document.write("Nested Loop Statement",'<br><br>');
    }
}*/


// Alert, Prompt and Confirm Statement

// Alert() :- shows a message
// prompt() :- shows a message,input text.It return  the text on OK or not.If cancle button or ESCis clicked,null.
// Confirm() :- shows a message, Confirm or 'OK' or 'Cancle'.It return true  for ok and false for cancle and Esc.


// alert("Welcome to FresherHire!")

// let age = prompt('Enter Your Age : ');
// if(age != null){
//     console.log(`You age is ${age}`);
//     document.write(`You age is ${age}`);
// }
// else{
//     console.log('Age field was blank');
//     document.write('Age field was blank');
// }

// let response = confirm('Are you sure,You want to delete your account ?');
// if(response){
//     document.write('Account Deleted successfully.');
// }
// else{
//     document.write('Not deleted');
// }


// Type Conversion in Javascript

// let type = 5 + null;
// alert(type)
// alert(typeof type)

// let type1 = 5; 
// alert(type1)
// alert(typeof type1)

// let newtype = String(type1)
// alert(typeof newtype)

// String Manupulation


// let str ="Ashish";
// let greet = `${str}`;
// alert(greet)


//

// Array Function and method : splice,length,push,pop,shift,indexof,

// let fruits = ["Banana", "Orange", "Apple"];
// fruits.splice(1,1)

// document.write(fruits);

// Function

// Predefined and custom/user defined function
// for(let i = 1;i<=10;i++){
//     document.write(`5 x ${i} = ${5*i}`);
//     document.write("<br>");
// }

// Function
// function multtable1(){
//     for(let i = 1;i<=10;i++){
//         document.write(`5 x ${i} = ${5*i}`);
//         document.write("<br>");
//     }
//     document.write("<br><br>");
// }

// multtable1()



// function with parameter
// function multtable(num){
//     for(let i = 1;i<=10;i++){
//         document.write(`${num} x ${i} = ${num*i}`);
//         document.write("<br>");
//     }
// }

// multtable(7)

// function add(num1,num2){
//     result = num1 + num2
// }
// document.write("<br><br>");
// add(4,6)
// document.write(result)


// Argument object similar to kwargs and args in python

// function add1(){
//     document.write(arguments.length);
//     document.write(arguments[1]);
// }

// add1(2,3)
// add1(2,3,4)
// add1(4,5,6,7)

// find sum of number

function sum(){
    if(arguments.length==0){
        document.write("No Paramter passed")
    }
    else{
        sum = 0
        for(let i = 0; i < arguments.length;i++){
            sum = sum + arguments[i];
        }
        document.write(sum)
    }
}

// sum(2)
sum(4,7)


//  Returning a value in JavaScript

function add(num1,num2){
    return num1 + num2;
}
result = add(4,6);
document.write(result);

// Anonymous function

// function expression
// let show = function(){
//     document.write("Hello World");
// };
// show();


// Anonymous function
setTimeout(function(){
    document.write("Hello World");
},3000);

// Immediatetly invoke function

(function(){
    document.write("Hello World !");
    alert("Hello World");
})();

// Objects in JavaScript

