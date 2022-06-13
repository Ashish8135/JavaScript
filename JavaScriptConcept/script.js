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



let isloggedin = 0; 
// if 0 loggedout if 1 loogedin
if(isloggedin==0){
    document.write("Please Login!")
}
else{
    document.write("Logout")
}

// Ternary Operator
let option = isloggedin == 1 ? "Logout" : "Login";
document.write(option)
alert(option)

// Switch Statement

let input;
input ='y';
if(input===1){
    document.write("Continue. .....")
}
else if(input==='y'){
    document.write("Continue. .....")
}
else if(input==='yes'){
    document.write("Continue. .....")
}
else if(input===0){
    document.write("End. .....")
}
else if(input==='n'){
    document.write("End. .....")
}
else if(input==='no'){
    document.write("End .....")
}
else{
    document.write("Wrong Input .....")
}

// switch statement

switch(input){
    case 1: //if(input===1)
        document.write("Continue...")
        break;
    case "y": //if(input==='y')
        document.write("Continue...")
        break;
    case "yes": //if(input==='yes')
        document.write("Continue...")
        break;
    case 0: //if(input===0)
        document.write("No...")
        break;
    case "n": //if(input==='n')
        document.write("No...")
        break;
    case "no": //if(input==='no')
        document.write("No...")
        break;
    default :
        document.write("Wrong Input .....")
}


// 

switch(input){
    case 1: //if(input===1)
    case "y": //if(input==='y')
    case "yes": //if(input==='yes')
        document.write("Continue...")
        break;
    case 0: //if(input===0)
    case "n": //if(input==='n')
    case "no": //if(input==='no')
        document.write("No...")
        break;
    default :
        document.write("Wrong Input .....")
}

// Looping 
//  let counter = 0;
//  while(counter <=10){
//     document.write("FresherHire");
//     counter++;
//  }

 let counter = 0;
 while(counter <=10){
    counter++;
 }
 document.write("FresherHire");


let count = 1;
let sum = 0;
while(count <=100){
    if(count%2==0){
        sum = sum + count;
    }
    count++;
}
document.write(sum,"  ")


// Do while loop
// atleast one bar print krega
let counting = 12
do {
    document.write("FresherHire Do While Demo");
    counting++;
}
while (counting<=10){
}

// For loop

for(let counted = 0; counted<=10;counted++){
    // document.write("Welcome to FresherHIre");
}
document.write("Welcome to FresherHIre");