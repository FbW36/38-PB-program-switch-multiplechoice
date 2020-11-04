// 1
function pickAColor(color) {
  switch (color) {
    case "red":
      return "Picked color is red";
    case "blue":
      return "Picked color is blue";
    case "green":
      return "Picked color is green";
    case "yellow":
      return "Picked color is yellow";
    default:
      return "Wrong choice, try again!";
  }
}
console.log(pickAColor("blue"));
console.log(pickAColor("red"));
console.log(pickAColor("yellow"));
console.log(pickAColor("magenta"));

// 2
function commentGenerator(grade) {
  switch (grade) {
    case 1:
      return "1. Excelent!";
    case 2:
      return "2. Not bad!";
    case 3:
      return "3. Good effort, must work harder!";
    case 4:
      return "4. Room for improvement";
    case 5:
      return "5. Below expectations";
    case 6:
      return "6. Far behind";
    default:
      return "Invalid option, try again";
  }
}
console.log(
  "Your grade is ==>",
  commentGenerator(Math.floor(Math.random() * 7))
);

// 3
function ChooseFruit(fruit) {
  switch (fruit) {
    case 1:
      return "Bananas: Monkeys love it!";
    case 2:
      return "Oranges: They are excelent for juices";
    case 3:
      return "Strawberry: With Chantilly over them";
    case 4:
      return "Apples: one apple a day...";
    default:
      return "not a valid option";
  }
}
console.log(ChooseFruit(Math.floor(Math.random() * 4)));

// 4
function percentage(value) {
  switch (true) {
    case value <= 30:
      return "Still a long way to go";
    case value <= 50:
      return "Slowly getting there";
    case value <= 50:
      return "You can do it!";
    case value <= 99:
      return "This is the last push!";
    default:
      return "You're there. Well done!";
  }
}
let value = Math.floor(Math.random() * 101);
console.log("grade is:", value, percentage(value));

// 5
// we should use SWITCH statements instead of IF statements
// when we have many options to be chosen and each of them
// lead to a different solution
