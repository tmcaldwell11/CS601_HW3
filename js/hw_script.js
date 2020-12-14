//1. Welcomes the visitor with an alert
alert("Welcome")

//2. Prompts the visitor for his/her name
var userName = prompt("Please enter your name below:");

//3. Displays the users name with an alert
//a. Such as “Welcome [name]!”
alert("Welcome " + userName +"!");

//4. Asks the visitor to enter two numbers with a prompt
//a. They can enter one number with one prompt and the second
//number with a second prompt, or you can ask them to enter them in
//one prompt, separated by a space or comma.

var num_1 = parseInt(prompt("Please enter a number: "));
var num_2 = parseInt(prompt("Please enter a second number: "));
//5. Uses a function (that you create) to add these two visitor entered numbers
//and adds them together and returns the result to the visitor with an alert.
//Concatenate the result of adding their two numbers together at the end of
//this phrase: “The sum of your two numbers is: [result]“
function sum(){
  return num_1 + num_2;
}

alert("The sum of your two numbers is: " + sum() );

//6. Add conditional logic (if/else):
//a. If the result of adding the two numbers together is greater than 10:
//i. Alert: “That is a big number.”
if (sum() > 10){
  alert("That is a big number.");
}

//b. If the result of adding the two numbers together is less than or
//equal to 10:
//i. Alert: “That is a small number.”
if (sum() <= 10){
  alert("That is a small number.");
}

//7. Add a loop:
//a. Prompt the user and ask if they want to add two numbers again, if
//they do (check for yes/no):
var userResponse = prompt("Would you like to add numbers again? Enter 'Y' for Yes or 'N' for No");
while (userResponse.toUpperCase() != "N"){
  if (userResponse.toUpperCase() == "Y")
  {
    //result with an alert (steps 4-7 repeat)
    var num_1 = parseInt(prompt("Please enter a number: "));
    var num_2 = parseInt(prompt("Please enter a second number: "));
    function sum(){
      return num_1 + num_2;
    }

    alert("The sum of your two numbers is: " + sum() );

    if (sum() > 10){
      alert("That is a big number.");
    }
    if (sum() <= 10){
      alert("That is a small number.");
    }
    var userResponse = prompt("Would you like to add numbers again? Enter 'Y' for Yes or 'N' for No");
  }
  }
  //b. If they don’t want to continue adding numbers:
  //i. Thank the visitor for using the program and stop.
  while (userResponse.toUpperCase() == "N"){
    alert("Thank you for visiting");
    break;

}
