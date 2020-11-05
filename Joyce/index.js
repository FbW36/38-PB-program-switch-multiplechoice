// 1. Color Analyzer
// Create a switch statement that prints a different statement for each color possibility (red, blue, green, yellow).
function colorAnalyzer(color) {
  switch (color) {
    case "red":
      return color + " " + "is Danger";
    case "blue":
      return color + " " + " is Peace";
    case "green":
      return color + " " + " is Nature";
    case "yellow":
      return color + " " + "is Warning";
    default:
      return color + " " + " is Error case";
  }
}
console.log(colorAnalyzer("red"));
console.log(colorAnalyzer("blue"));
console.log(colorAnalyzer("green"));
console.log(colorAnalyzer("yellow"));

// 2. Grading
// Create a switch statement that prints different comments depending on a grade.
let grade = "C";
switch (grade) {
  case "A":
    console.log(grade + " " + "is Excellent");
    break;
  case "B":
    console.log(grade + " " + " is Very good");
    break;
  case "C":
    console.log(grade + " " + "is Good");
    break;
  case "D":
    console.log(grade + " " + " is a Pass");
    break;
  case "F":
    console.log(grade + " " + "is Failed");
    break;
  default:
    console.log("Please enter a grade from A-F");
}

// 3. Fruits
// Create a switch statement that prints different statement for various fruit (e.g. banana, orange, strawberry, apple).
function checkFruits(fruit) {
  switch (fruit) {
    case "banana":
      return "banana is creamy";
    case "orange":
      return "orange is juicy";
    case "strawberry":
      return "strawberry is yummy";
    case "apple":
      return "apple is crunchy";
    default:
      "Please enter a fruit";
  }
}
console.log(checkFruits("banana"));
console.log(checkFruits("orange"));
console.log(checkFruits("strawberry"));
console.log(checkFruits("apple"));

// 4. Percentage Complete.
// If percentageComplete is below 30, print "Still a long way to go".
// If the percentageComplete is between 30 and 50, print "Slowly getting there".
// If percentageComplete is between 51 and 80, print "You can do it!".
// If percentageComplete is between 81 and 99, print "This is the last push!".
// If percentageComplete is 100, print "You're there. Well done!".
function checkPercentage(percentageComplete) {
  if (percentageComplete < 30) {
    return "Still a long way to go";
  } else if (percentageComplete >= 30 && percentageComplete <= 50) {
    return "Slowly getting there";
  } else if (percentageComplete >= 51 && percentageComplete <= 80) {
    return "You can do it!";
  } else if (percentageComplete >= 81 && percentageComplete <= 99) {
    return "This is the last push!";
  } else if ((percentageComplete = 100)) {
    return "You're there. Well done!";
  } else {
    return "The number is not valid";
  }
}
console.log(checkPercentage(36));
console.log(checkPercentage(79));
console.log(checkPercentage(97));

// 5. Differences
// When should you use a switch statement versus an if else statement. Comment your answer in your js file.
//! switch is usually more compact than lots of nested if else and therefore, more readable. While if allows complex expressions in the condition. So for simpele cases, switch is suitable, but not for complicated cases like exercise 4.

//! Differences Between if-else and switch
// Expression inside if statement decide whether to execute the statements inside if block or under else block. On the other hand, expression inside switch statement decide which case to execute.
// If-esle statement checks for equality as well as for logical expression . On the other hand, switch checks only for equality.
// The if statement evaluates integer, character, pointer or floating-point type or boolean type. On the other hand, switch statement evaluates only character or a integer datatype.
// Sequence of execution is like either statement under if block will execute or statements under else block statement will execute. On the other hand the expression in switch statement decide which case to execute and if you do not apply a break statement after each case it will execute till the end of switch statement.
// If expression inside if turn outs to be false, statement inside else block will be executed. If expression inside switch statement turn out to be false then default statements is executed.
// It is difficult to edit if-else statements as it is tedious to trace where the correction is required. On the other hand it is easy to edit switch statements as they are easy to trace.
//! in one word we can say switch acts a little bit faster than if else statement!!!
