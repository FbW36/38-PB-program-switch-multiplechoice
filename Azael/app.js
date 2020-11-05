// # Switch if...

// #### 1. Color Analyzer
// Create a switch statement that prints a different statement for each color possibility (red, blue, green, yellow).

let color = "blue";
switch (color) {
  case "red":
    console.log(
      "Since red is the color of blood, it has historically been associated with sacrifice"
    );
    break;
  case "blue":
    console.log(
      "It is the color of the ocean and the sky; it often symbolizes serenity"
    );
    break;
  case "green":
    console.log(
      "Green is the color of nature. It symbolizes growth, harmony, freshness, and fertility."
    );
    break;
  case "yellow":
    console.log(
      "Yellow is the most luminous of all the colors of the spectrum. It's the color of happiness, and optimism"
    );
    break;

  default:
    console.log("This color is not cool");
    break;
}

// #### 2. Grading
// Create a switch statement that prints different comments depending on a grade.

let quality = 2;

switch (quality) {
  case 0:
    console.log("The quality is not in your agenda");
    break;
  case 1:
    console.log("The quality need to be improved");
    break;
  case 2:
    console.log("The quality is not enough");
    break;
  case 3:
    console.log("The quality is good");
    break;
  case 4:
    console.log("The quality is very good");
    break;
  case 5:
    console.log("The quality is great");
    break;

  default:
    break;
}

// #### 3. Fruits
// Create a switch statement that prints different statement for various fruit (e.g. banana, orange, strawberry, apple).

let fruit = "kiwi";

switch (fruit) {
  case "banana":
    console.log(
      "Potassium in bananas is good for your heart health and blood pressure"
    );
    break;
  case "orange":
    console.log("Oranges are an excellent source of vitamin C.");
    break;
  case "strawberry":
    console.log("They are among the top 20 fruits in antioxidant capacity");
    break;
  case "apple":
    console.log(
      "Apples are high in polyphenols, which function as antioxidants"
    );
    break;
  case "kiwi":
    console.log("Kiwi  provide an extra boost to our immune system");
    break;

  default:
    console.log("This fruit is not tasty!");
    break;
}

// #### 4. Percentage Complete.
// * If percentageComplete is below 30, print "Still a long way to go".
// * If the percentageComplete is between 30 and 50, print "Slowly getting there".
// * If percentageComplete is between 51 and 80, print "You can do it!".
// * If percentageComplete is between 81 and 99, print "This is the last push!".
// * If percentageComplete is 100, print "You're there. Well done!".

let percentageComplete = 70;

switch (true) {
  case percentageComplete < 30:
    console.log("Still a long way to go");
    break;
  case percentageComplete >= 30 && percentageComplete <= 50:
    console.log("Slowly getting there");
    break;
  case percentageComplete >= 51 && percentageComplete <= 80:
    console.log("You can do it!");
    break;
  case percentageComplete >= 81 && percentageComplete <= 99:
    console.log("This is the last push!");
    break;
  case (percentageComplete = 100):
    console.log("You're there. Well done!");
    break;

  default:
    console.log("Out of the range");
    break;
}

// #### 5. Differences
// * When should you use a switch statement versus an `if else` statement. Comment your answer in your js file.
// A switch statement is usually more efficient than a set of nested ifs. Deciding whether to use if-then-else statements or a switch statement is based on readability and the expression that the statement is testing.

// Check the Testing Expression: An if-then-else statement can test expressions based on ranges of values or conditions, whereas a switch statement tests expressions based only on a single integer, enumerated value, or String object.
// Switch better for Multi way branching: When compiler compiles a switch statement, it will inspect each of the case constants and create a “jump table” that it will use for selecting the path of execution depending on the value of the expression. Therefore, if we need to select among a large group of values, a switch statement will run much faster than the equivalent logic coded using a sequence of if-elses. The compiler can do this because it knows that the case constants are all the same type and simply must be compared for equality with the switch expression, while in case of if expressions, the compiler has no such knowledge.
// if-else better for boolean values: If-else conditional branches are great for variable conditions that result into a boolean, whereas switch statements are great for fixed data values.
// Speed: A switch statement might prove to be faster than ifs provided number of cases are good. If there are only few cases, it might not effect the speed in any case. Prefer switch if the number of cases are more than 5 otherwise, you may use if-else too.
// If a switch contains more than five items, it’s implemented using a lookup table or a hash list. This means that all items get the same access time, compared to a list of if:s where the last item takes much more time to reach as it has to evaluate every previous condition first.
// Clarity in readability: A switch looks much cleaner when you have to combine cases. Ifs  are quite vulnerable to errors too. Missing an else statement can land you up in havoc. Adding/removing labels is also easier with a switch and makes your code significantly easier to change and maintain.
