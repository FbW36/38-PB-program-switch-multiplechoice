//1. Color Analyzer

function colorAnalyzer(color) {
  switch (color) {
    case "red":
      return `This color is ${color}`;
    case "blue":
      return `This color is ${color}`;
    case "green":
      return `This color is ${color}`;
    case "yellow":
      return `This color is ${color}`;

    default:
      return `This is Not the color we are looking for`;
  }
}
console.log(colorAnalyzer("red")); //This color is red
console.log(colorAnalyzer("yellow")); //This color is yellow
console.log(colorAnalyzer("green")); //This color is green
console.log(colorAnalyzer("blue")); //This color is blue

//2. Grading

function grading(grade) {
  switch (grade) {
    case 1:
      return `You are in grade ${grade}`;
    case 2:
      return `You are in grade ${grade}`;
    case 3:
      return `You are in grade ${grade}`;
    case 4:
      return `You are in grade ${grade}`;

    default:
      return `You are not in any grade.`;
  }
}
console.log(grading(2)); //You are in grade 2
console.log(grading(6)); //You are not in any grade.

// 3. Fruits

function fruits(name) {
  switch (name) {
    case "banana":
      return `${name} is in our fruit range`;
    case "orange":
      return `${name} is in our fruit range`;
    case "strawberry":
      return `${name} is in our fruit range`;
    case "apple":
      return `${name} is in our fruit range`;
    default:
      return `${name} Is not a fruit we are looking for!`;
  }
}
console.log(fruits("orange")); //orange is in our fruit range
console.log(fruits("mango")); //mango Is not a fruit we are looking for!

//4. Percentage Complete

function percentage(number) {
  switch (true) {
    case number >= 30 && number <= 50:
      return `Slowly getting there`;
    case number > 50 && number <= 80:
      return `You can do it!`;
    case number > 80 && number <= 99:
      return `This is the last push!`;
    case (number = 100):
      return `You're there. Well done!`;

    default:
      return `Still a long way to go`;
  }
}
console.log(percentage(55)); //You can do it!
console.log(percentage(95)); //This is the last push!
console.log(percentage(25)); //Still a long way to go

//! 5. Differences

/* We should use switch statement when we have lots of else if involve in a function or any coding block, to make it looks clen and more understandable to the developer.  */
