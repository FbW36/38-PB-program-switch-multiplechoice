// # 38-PB-program-switch-multiplechoice

// # Switch if...

// #### 1. Color Analyzer
// Create a switch statement that prints a different statement for each color possibility (red, blue, green, yellow).
let color = "red";
function colorAnalyze(color) {
  switch (color) {
    case "red":
      return ` ${color} `;
    case "blue":
      return ` ${color}`;
    case "green":
      return ` ${color}`;
    case "yellow":
      return ` ${color}`;
    default:
      return "we do not know ${color} color";
  }
}
console.log(colorAnalyze(color));
console.log(colorAnalyze("yellow"));
color = "blue";
console.log(colorAnalyze(color));

// #### 2. Grading
// Create a switch statement that prints different comments depending on a grade.
let grade = 5;
function gradeAnalyze(grade) {
  switch (grade) {
    case 5:
      return ` ${grade}! You are the best `;
    case 4:
      return ` ${grade}! Almost there`;
    case 3:
      return ` ${grade}! You are avarage`;
    case 2:
      return ` ${grade}! you need work on it`;
    case 1:
      return ` ${grade}! you need to work hard`;

    default:
      return "that looks not a grade";
  }
}

console.log(gradeAnalyze(grade));

// #### 3. Fruits
// Create a switch statement that prints different statement for various fruit (e.g. banana, orange, strawberry, apple).
let fruits = "banana";
function fruitAnalyze(fruits) {
  switch (fruits) {
    case "banana":
      return ` ${fruits} is yellow `;
    case "orange":
      return ` ${fruits} is orange`;
    case "strawberry":
      return ` ${fruits} is red`;
    case "apple":
      return ` ${fruits} is red`;
    default:
      return "we do not know ${fruits} ";
  }
}

console.log(fruitAnalyze(fruits));

// #### 4. Percentage Complete.
// * If percentageComplete is below 30, print "Still a long way to go".
// * If the percentageComplete is between 30 and 50, print "Slowly getting there".
// * If percentageComplete is between 51 and 80, print "You can do it!".
// * If percentageComplete is between 81 and 99, print "This is the last push!".
// * If percentageComplete is 100, print "You're there. Well done!".

function percentageAnalyze(percentage) {
  switch (true) {
    case percentage < 30:
      return ` Still a long way to go`;
    case percentage >= 30 && percentage <= 50:
      return `Slowly getting there`;
    case percentage > 50 && percentage < 81:
      return ` You can do it!`;
    case percentage >= 81 && percentage <= 99:
      return ` This is the last push!`;
    case percentage === 100:
      return ` You're there. Well done!`;
    default:
      return "we do not know  ";
  }
}

console.log(percentageAnalyze(100));

// #### 5. Differences
// * When should you use a switch statement versus an `if else` statement. Comment your answer in your js file.
//  I usw switch statement when we have multipul CSSNamespaceRule. more simple clean code.
