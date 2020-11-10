//Switch if
//1. Color Analyzer
//Create a switch statement that prints a different statement for each color possibility(red, blue, green, yellow).

function colorAnalyzer(color) {
  switch (color) {
    case "red":
      return "Color is red like a rose";
    case "blue":
      return "color is blue like the sky";
    case "green":
      return "colour is green like the grass";
    case "yellow":
      return "color is yellow like the sun";
  }
}

console.log(colorAnalyzer("green"));

//2. Grading
//Create a switch statement that prints different comments depending on a grade.

function noteGrade(grade) {
  switch (grade) {
    case 1:
      console.log("awesome mate");
      break;
    case 2:
      console.log("good buddy");
      break;
    case 3:
      console.log("still ok, 2 would be better");
      break;
    case 4:
      console.log("buh, learn next time!");
      break;
    case 5:
      console.log("really? lazy fuck");
      break;
    case 6:
      console.log("not angry....disappointed");
      break;
  }
}

noteGrade(1);

// 3. Fruits
//Create a switch statement that prints different statement for various fruit(e.g.banana, orange, strawberry, apple).

function getFruit(fruit) {
  switch (fruit) {
    case "banana":
      return "monkeys like banana";
    case "orange":
      return "orange juice is good";
    case "strawberry":
      return "strawberries ar fresh in summer";
    case "apple":
      return "an apple a day keeps the doctor away";
  }
}

console.log(getFruit("banana"));

/*4. Percentage Complete.
- If percentageComplete is below 30, print "Still a long way to go".
- If the percentageComplete is between 30 and 50, print "Slowly getting there".
- If percentageComplete is between 51 and 80, print "You can do it!".
- If percentageComplete is between 81 and 99, print "This is the last push!".
- If percentageComplete is 100, print "You're there. Well done!".

*/

function percentageComplete(percentage) {
  switch (true) {
    case percentage <= 30:
      return "Still a long way to go";
    case percentage >= 31 && percentage <= 50:
      return "Slowly getting there";
    case percentage >= 51 && percentage <= 80:
      return "You can do it!";
    case percentage >= 81 && percentage <= 99:
      return "This is the last push";
    case 100:
      return "You're there! Well done!";
  }
}

console.log(percentageComplete(31));

//5. Differences
//When should you use a switch statement versus an if else statement.Comment your answer in your js file.

/**Switch statements are cleaner syntax over a complex or stacked series of if else statements.

Use switch instead of if when:

- we compare multiple conditions of an expression and the expression itself is non-trivial.
- You have multiple values that may require the same code.
- You have some values that will require essentially all of another value's execution, plus only a few statements.


 */
