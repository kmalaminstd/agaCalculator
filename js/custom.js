let input = document.querySelector(".calculator .calculation");

// let year = input.querySelectorAll("input")["0"];
// console.log(year.value);

let btn = input.querySelector(".sub");
// year.addEventListener("focusOut", function(e){
//     console.log(e.target.value);
// })
// btn.addEventListener("click", function(e){
//     console.log(e.year.value);
// })
// let btn = document.querySelector("cal")

btn.addEventListener("click", function(){
    let date = new Date();
    let currentYear = date.getFullYear();
    let currentMonth = date.getMonth();
    let currentDate = date.getDate();

    //let inputLength = input.querySelectorAll("input");
    let birthYear = input.querySelectorAll("input")[0];
    let birthYearValue = birthYear.value;
    let birthMonth = input.querySelectorAll("input")[1];
    let birthMonthValue = birthMonth.value;
    let birthDate = input.querySelectorAll("input")[2];
    let birthDateValue = birthDate.value;
    //console.log(birthYear.value, birthMonth.value, birthDate.value);

    let calYear = currentYear -birthYearValue;
    let calMonth = currentMonth - birthMonthValue;
    let calDate = currentDate - birthDateValue;
    //console.log(calYear);
    let result = document.getElementById("res");
    result.innerHTML = "Your age is " + calYear + " Years " + calMonth + " Months " + calDate + " Days.";

    if(birthYearValue == "" || birthMonthValue == ""){
        birthYearValue = ""
        birthMonthValue = ""
        
    }

   

    if(birthYearValue == "" && birthMonthValue == ""){
        result.innerHTML = "You Must fill Year and Month fields";
    }
    
})

let button = document.querySelector(".cng-back");
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple']

let calCulator = document.getElementById("calculator")

calCulator.style.backgroundColor = "red";

button.addEventListener("click", function(){
    let selColor = parseInt(Math.random() * colors.length);
    calCulator.style.backgroundColor = colors[selColor]

})












