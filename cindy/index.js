// 38-PB-program-switch-multiplechoice
// Switch if...
// 1. Color Analyzer

// Create a switch statement that prints a different statement for each color possibility (red, blue, green, yellow).

function colors(myColor){
    switch(myColor){
  
      case 1: 
      case 2: 
      case 3: return "Sexy red";
      case 4: 
      case 5: return 'Peaceful blue';
      case 6: 
      case 7: 
      case 8: return 'Wild green';
      case 9: 
      case 10: 
      case 11: 
      case 12: return 'Funny yellow';
      default: return " only from 1 - 12 :c";
    }  }
  console.log("choose your color according to your month of birth  => ", colors(13))


  //2. Grading
//Create a switch statement that prints different comments depending on a grade.
function Grades(myGrade){
    switch(myGrade){
  
      case 1: return "You Better work >:v"
      case 2: return "Anything you can do I can do better."
      case 3: return "It Wasn't Enough";
      case 4: return "It Could Happen to You"
      case 5: return 'Half The World Away';
      case 6: return "Stayin' Alive"
      case 7: return "A little messed up "
      case 8: return 'Gimme Gimme Gimme';
      case 9: return "September"
      case 10: return 'First date'
      default: return " There's no more than 10pts :c";
    }  }
  console.log("Take your fedback as a song  => ", Grades(10))

  //3. Fruits
//Create a switch statement that prints different statement for various fruit (e.g. banana, orange, strawberry, apple).
function fruits(myFruit){
    switch(myFruit){
  
      case 1: 
      case 2: 
      case 3: return "banana";
      case 4: 
      case 5: return 'Orange';
      case 6: 
      case 7: 
      case 8: return 'strawberry';
      case 9: 
      case 10: 
      case 11: 
      case 12: return 'apple';
      default: return " only from 1 - 12 :c";
    }  }
  console.log("Here's your fruit according to your month of birth  => ", fruits(7))

// 4. Percentage Complete.
// If percentageComplete is below 30, print "Still a long way to go".
// If the percentageComplete is between 30 and 50, print "Slowly getting there".
// If percentageComplete is between 51 and 80, print "You can do it!".
// If percentageComplete is between 81 and 99, print "This is the last push!".
// If percentageComplete is 100, print "You're there. Well done!".
function percentage(percentage){
switch (true) 
{
    case (percentage >= 1 && percentage <= 30):
        console.log("Still a long way to go");
    break;
    case (percentage >= 31 && percentage <= 50):
        console.log("Slowly getting there");
    break;
    case (percentage >= 51 && percentage <= 80):
        console.log("You can do it!");
    break;
    case (percentage >= 81 && percentage <= 99):
        console.log("This is the last push!");
    break;
    case (percentage >= 100):
        console.log("You're there. Well done!");
    break;
}}
percentage(100)

//5. Differences
//When should you use a switch statement versus an if else statement. Comment your answer in your js file.


//Key Differences Between if-else and switch

// The expression inside if statement decides whether to execute the statements inside if block or under else block. On the other hand, the expression inside a switch statement decides which case to execute.
// You can have multiple if statement for multiple choice of statements. In switch, you only have one expression for the multiple choices.
// If-else statement checks for equality as well as for logical expression. On the other hand, switch checks only for equality.
// The if statement evaluates integer, character, pointer or floating-point type or boolean type. On the other hand, switch statement evaluates only character or an integer datatype.
// Sequence of execution is like either statement under if block will execute or statements under else block statement will execute. On the other hand, the expression in switch statement decide which case to execute and if you do not apply a break statement after each case it will execute till the end of the switch statement.
// If expression inside if turn outs to be false, statement inside else block will be executed. If expression inside switch statement turns out to be false then default statements is executed.
// It is difficult to edit if-else statements as it is tedious to trace where the correction is required. On the other hand, it is easy to edit switch statements as they are easy to trace.
