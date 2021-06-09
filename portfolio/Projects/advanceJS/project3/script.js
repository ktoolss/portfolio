// do{
//     var numberOne = Number(window.prompt("Give me a number."));
//     var numberTwo = Number(window.prompt("Give me one more number."));
//     var numberThree = Number(window.prompt("Give me another number."));
//     var sum = (numberOne + numberTwo + numberThree);


//     document.write("The sum of all your favorite numbers is " + sum);
//    }while(sum !== 0 && sum <=0);




   // for (sum = 0; sum<=0; sum++){
   //  var numberOne = Number(window.prompt("Give me a number."));
   //  var numberTwo = Number(window.prompt("Give me one more number."));
   //  var numberThree = Number(window.prompt("Give me another number."));
   //  var sum = (numberOne + numberTwo + numberThree);
   //  document.write("The sum of all your favorite numbers is " + sum);
   // }


   // for loop with array

   var numbers = [];

   for(numbers.length = 0; numbers.length <= 2; sum++){

   var input = Number(window.prompt("Add a number"));

   numbers.push(input);
   console.log(input);
   if(numbers.length == 3){
   var sum = (numbers[0] + numbers[1] + numbers[2]);
   document.write("The sum of all your favorite numbers is " + sum);
   }
}
