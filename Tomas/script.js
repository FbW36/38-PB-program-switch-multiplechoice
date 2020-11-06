let log = console.log;

//Create a switch statement that prints a different statement for each color possibility (red, blue, green, yellow)
function listOfColors(color) {
  switch (color) {
    case "red":
      return `color is ${color}`;
    case "blue":
      return `color is ${color}`;
    case "green":
      return `color is ${color}`;
    case "yellow":
      return `color is ${color}`;
    default:
      `not on the list`;
  }
}
log(listOfColors("blue"));

// Create a switch statement that prints different comments depending on a grade
const commentGrades = (num) => {
  switch (num) {
    case 1:
      log("outstanding");
      break;
    case 2:
      log("commendable");
      break;
    case 3:
      log("good");
      break;
    case 4:
      log("passing");
      break;
    case 5:
      log("failing");
      break;
    default:
      log("No exam done");
  }
};
commentGrades(1);

// Create a switch statement that prints different statement for various fruit (e.g. banana, orange, strawberry, apple)
const identifyingFruit = (fruit) => {
  switch (fruit) {
    case "banana":
      return `yep, it's ${fruit}`;

    case "orange":
      return `yep, it's ${fruit}`;

    case "strawberry":
      return `yep, it's ${fruit}`;

    case "apple":
      return `yep, it's ${fruit}`;
      default:
          return 'Item not on the list'
  }
};
log(identifyingFruit("orange"));

// If percentageComplete is below 30, print "Still a long way to go"
// If the percentageComplete is between 30 and 50, print "Slowly getting there"
// If percentageComplete is between 51 and 80, print "You can do it!"
// If percentageComplete is between 81 and 99, print "This is the last push!"
// If percentageComplete is 100, print "You're there. Well done!"
const evalProgress = (num) => {
  switch (num > 0 && num <= 100) {
    case num > 0 && num < 30:
      log("Still a long way to go");
      break;
    case num >= 30 && num <= 50:
      log("Slowly getting there");
      break;
    case num > 50 && num <= 80:
      log("You can do it!");
      break;
    case num > 80 && num < 100:
      log("This is the last push!");
      break;
    case num > 99:
      log("You're there. Well done!");
      break;
    default:
      log("No effort to comment on");
  }
};
evalProgress();

// When should you use a switch statement versus an if else statement?

//  if/else makes a decisions while a switch statement compares the value of a variable to a list of case values
