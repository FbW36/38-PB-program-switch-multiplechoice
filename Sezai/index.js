//1. color analyzer

function colors(color){
switch (color) {
    case "red":
        return "roses are red"
        break
    case "blue":
        return "the sky is blue"
        break
    case "green":
        return "the grass is green"
        break
    case "yellow":
      return "the sun is yellow"
      break
    default:
      return "Sorry, we are out of " + color + ".";
  }
}
  console.log("red ==> ", colors("red")); //red ==>  roses are red
  console.log("blue ==> ", colors("blue")); //blue ==>  the sky is blue
  console.log("green ==> ", colors("green")); //green ==>  the grass is green
  console.log("yellow ==> ", colors("yellow")); //yellow ==>  the sun is yellow
  console.log("pink color ==> ", colors("pink")); // pink color ==>  Sorry, we are out of pink.

  //2. grading

  function grading(grade){
    switch (grade) {
        case "A":
            return "nice job"
            break
        case "B":
            return "well done"
            break
        case "C":
            return "keep up the good work"
            break
        case "D":
          return "a few mistakes here n there"
          break
        default:
          return "Sorry, try again";
      }
    }

    console.log("A grade ==> ", grading("A")); //A grade ==>  nice job
    console.log("B grade ==> ", grading("B")); //B grade ==>  well done
    console.log("C grade ==> ", grading("C")); //C grade ==>  keep up the good work
    console.log("D grade ==> ", grading("D")); //D grade ==>  a few mistakes here n there
    console.log("E grade ==> ", grading("E")); //E grade ==>  Sorry, try again

//3 Fruits

function fruits(fruit){
    switch(fruit){
        case "banana":
            return "monkeys like bananas"
            break
        case "strawberry":
            return "strawberries are sweet"
            break
        case "apple":
            return "is my favorite technology company"
    }
}

console.log("banana ==> ", fruits("banana")); // banana ==>  monkeys like bananas
console.log("strawberry ==> ", fruits("strawberry")); // strawberry ==>  strawberries are sweet
console.log("apple ==> ", fruits("apple")); // apple ==>  is my favorite technology company


//4 percentage
function percentages(percent){
    switch(true){
        case (percent <30):
            return "Still a long way to go"
            break
        case (percent >30 && percent <=50):
            return "Slowly getting there"
            break
        case (percent >50 && percent <=80):
            return "You can do it!"
            break
        case (percent >80 && percent <=99):
            return "This is the last push!"
            break
        case (percent ==100):
            return "You're there. Well done!"
            break
        default:
            return "Not from this Planet!"
    }
}
console.log("percentages below 30 ==> ", percentages(22)); //percentages below 30 ==>  Still a long way to go
console.log("percentages between 30 and 50 ==> ", percentages(33)); //percentages between 30 and 50 ==>  Slowly getting there
console.log("percentages between 50 and 80 ==> ", percentages(77)) // percentages between 50 and 80 ==>  You can do it!
console.log("percentages between 80 and 99 ==> ", percentages(88)) //percentages between 80 and 99 ==>  This is the last push!
console.log("percentages = 100 ==> ", percentages(100)) // percentages = 100 ==>  You're there. Well done!
console.log("percentages = 101 ==> ", percentages(101)) //percentages = 101 ==>  Not from this Planet

//5 differences switch and if/else

/*
Switch statements are a more efficient way to code when testing multiple conditions.

    This case statement is used to execute various actions for various conditions or variable states
    Use the Switch Case statement to pick a block of code to execute
    The Switch statement uses strict comparisons (===), values must be the same type to match

State switch statement works like this:

    The switch expression is evaluated once
    The value of the expression is compared with the values of each case
    If there is a match, the associated block of code is executed
    A default or catch all case can be defined when the expression does not match a case.
*/





