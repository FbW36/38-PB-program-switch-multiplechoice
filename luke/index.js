// ! 1. Color Analyzer
// Create a switch statement that prints a different statement for each color possibility (red, blue, green, yellow).
let color = "red";

function colorAnalyzer(color) {
  switch (color.toLowerCase()) {
    case "red":
      return `Roses`;
    case "blue":
      return `Sky`;
    case "green":
      return `Leaf`;
    case "yellow":
      return `Sun`;
    default:
      return `Not the right color`;
  }
}

console.log(colorAnalyzer(color));
color = "blue";
console.log(colorAnalyzer(color));

// ! 2. Grading
// Create a switch statement that prints different comments depending on a grade.
function grading(grade) {
  switch (grade.toLowerCase()) {
    case "a":
      return `Excellent job`;
    case "b":
      return `great job`;
    case "c":
      return `You passed`;
    case "d":
      return `You failed`;
    case "e":
      return "Need a lot of work";
    default:
      return `Not a grade between a - e`;
  }
}

console.log(grading("E"));

// ! 3. Fruits
// Create a switch statement that prints different statement for various fruit(e.g.banana, orange, strawberry, apple).
function nameYourFruit(fruit) {
  switch (fruit.toLowerCase()) {
    case "banana":
      return `I like ${fruit}s`;
    case "orange":
      return `Great for making ${fruit} juice`;
    case "strawberry":
      return `Gotta love a ${fruit}`;
    case "apple":
      return `An ${fruit} a day keeps the doctor away`;
    default:
      return `Not in fruit collection`;
  }
}

console.log(nameYourFruit("banana"));

// ! 4. Percentage Complete.
// * If percentageComplete is below 30, print "Still a long way to go".
// * If the percentageComplete is between 30 and 50, print "Slowly getting there".
// * If percentageComplete is between 51 and 80, print "You can do it!".
// * If percentageComplete is between 81 and 99, print "This is the last push!".
// * If percentageComplete is 100, print "You're there. Well done!".

let percentage;

function changePercentage(num) {
  switch (num >= 0 && num < 30) {
    case true:
      percentage = "Still a long way to go.";
      break;
  }
  switch (num >= 30 && num < 51) {
    case true:
      percentage = "Slowly getting there.";
      break;
  }
  switch (num >= 51 && num < 81) {
    case true:
      percentage = "You can do it!";
      break;
  }
  switch (num >= 81 && num < 100) {
    case true:
      percentage = "This is the last push!";
      break;
  }
  switch (num == 100) {
    case true:
      percentage = `You're there. Well done!`;
      break;
  }
  switch (num > 100 || num < 0) {
    case true:
      percentage = `Not a percantage`;
      break;
  }
}

changePercentage(3);
console.log(percentage);
changePercentage(45);
console.log(percentage);
changePercentage("true");
console.log(percentage);
changePercentage(99);
console.log(percentage);

// ! 5. Differences
// * When should you use a switch statement versus an`if else` statement.Comment your answer in your js file.
// switch statement should be used when code is minimal and case outputs can be one thing, it is a lot less heavy and requires basic functionality
