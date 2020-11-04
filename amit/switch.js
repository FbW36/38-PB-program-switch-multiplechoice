// Color Analyzer
let color = "red";
switch (color) {
  case "red":
    console.log("I like red");
    break;
  case "blue":
    console.log(`i don't like blue`);
    break;
  default:
    console.log("Please pick a color");
}

// 2. Grading
for (i = 1; i <= 4; i++) {
  switch (i) {
    case 1:
      console.log(i + " is " + " excellent ");
      break;
    case 2:
      console.log(i + " is " + " very good");
      break;
    case 3:
      console.log(i + " is " + " good");
      break;
    default:
      console.log(i + " is " + " not bad");
  }
}
// 3. Fruits
const myFruits = (fruits) => {
  switch (fruits) {
    case "banana":
      return `${fruits} is healthy`;
    case "orange":
      return `${fruits} is full of vitamin c`;
    case "strawberry":
      return `${fruits} is my favourate`;
    default:
      return `${fruits} not a fruit`;
  }
};
console.log(myFruits("banana"));
console.log(myFruits("orange"));
console.log(myFruits("strawberry"));
console.log(myFruits("potato"));

// 4 Percentage Complete.
let number = 40;

switch (true) {
  case number < 30:
    console.log("Still a long way to go");
    break;
  case number <= 50 && number >= 30:
    console.log("Slowly getting there");
    break;
  case number <= 51 && number >= 80:
    console.log("You can do it!");
    break;
  case number <= 81 && number >= 99:
    console.log("This is the last push!");
    break;
  case number === 100:
    console.log("You're there. Well done!");
    break;
  default:
    console.log("find no number");
}
