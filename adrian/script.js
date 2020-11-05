//1
function checkColor(color) {
  switch (color) {
    case "red":
      return `It is ${color}`;
    case "blue":
      return `It is ${color}`;
    case "green":
      return `It is ${color}`;
    case "yellow":
      return `It is ${color}`;

    default:
      return "It is not a color I know";
  }
}
// console.log(checkColor("red"));

//2
function checkGrade(grade) {
  switch (grade) {
    case 2:
      return `You need to study more`;
    case 3:
      return `You barely passed`;
    case "4":
      return `Good work`;
    case 5:
      return `Perfect!`;
    default:
      return "I don't know that grade";
  }
}

//3
function checkFruit(fruit) {
  switch (fruit) {
    case "apple":
      return `I don't like ${fruit}`;
    case "mango":
      return `I like ${fruit}`;
    case "orange":
      return `I like ${fruit}`;
    case banana:
      return `I like ${fruit}`;
    default:
      return "I don't know that fruit";
  }
}

//4
function checkPercentage(per) {
  switch (true) {
    case per < 30:
      console.log("Still a long way to go");
      break;
    case per >= 30 && per <= 50:
      console.log("Slowly getting there");
      break;
    case per >= 51 && per <= 80:
      console.log("You can do it!");
      break;
    case per >= 81 && per <= 99:
      console.log("This is the last push!");
      break;
    case per === 100:
      console.log("You're there. Well done!");
      break;
    default:
      console.log("This is not a percent");
      break;
  }
}
checkPercentage(100);

// I would use a switch statement when I need to check one of many blocks of code.
