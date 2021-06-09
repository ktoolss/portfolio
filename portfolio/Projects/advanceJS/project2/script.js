var name = window.prompt("Tell me your name ");

var numberOne = Number(window.prompt("Give me a number "));

var numberTwo = Number(window.prompt("Give me another number "));

function message() {
    document.write("You are going to have a wondeerful day " + name + " ");
}

message();

function calculator() {
    document.write("By the way, the sum of your numbers is " 
    + (numberOne + numberTwo));
}

calculator();