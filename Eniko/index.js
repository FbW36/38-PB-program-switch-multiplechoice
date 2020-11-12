// 1. Color Analyzer
// Create a switch statement that prints a different statement for each color possibility (red, blue, green, yellow).
function colors (color) 
{switch (color) {
    case "red": return "You are a Griffindor";
    break;
    case "yellow": return "You are Hufflepuff";
    break;
    case "green": return "You are Slytherin";
    break;
    case "blue": return "You are Raverclaw";
    default: "put on the sorting hat";
}};
console.log(colors("green"));
// 2. Grading
// Create a switch statement that prints different comments depending on a grade.
function grades (grade) {
    switch(grade) {
        case "A": return "You earned a smiling bear sticker";
        case "B": return "You earned a small, but shiny sticker";
        case "C": return "No sticker for you.";
        case "D": return "Oh oooo";
        case "F": return "Sticker of a sad pandabear";
        default: return "Look at your grade A-F"
    }
}
console.log(grades("B"));
// 3. Fruits
// Create a switch statement that prints different statement for various fruit (e.g. banana, orange, strawberry, apple).
function commentYourFruit (fruit) {
    switch(fruit) {
        case "apple": return "Keeps the doctor away";
        case "pear": return "Local and in season";
        case "peach": return "Peachy";
        case "stawberry": return "Milkshake material";
        default: "your fruit is not on our list, try again";
    }
};
console.log(commentYourFruit("peach"));

// 4. Percentage Complete.
// If percentageComplete is below 30, print "Still a long way to go".
// If the percentageComplete is between 30 and 50, print "Slowly getting there".
// If percentageComplete is between 51 and 80, print "You can do it!".
// If percentageComplete is between 81 and 99, print "This is the last push!".
// If percentageComplete is 100, print "You're there. Well done!".
// 5. Differences
function percent (num) {
    switch(true) {
        case (num < 30): return "Still a long way to go";
        break;
        case (num > 29 && num < 51): return "Slowly getting there";
        break;
        case (num > 49 && num < 81): return "You can do it!";
        break;
        case (num > 80 && num < 100): return "This is the last push";
        break;
        case (num === 100): return "You are there, well done!";
        break;
        default: "Give us a number between 1-100";
    }
}
console.log(percent(54));
// When should you use a switch statement versus an if else statement. Comment your answer in your js file.

//Switch should be used on simple and lineal funcions, when you have a fix ammount of cases which doesn't require complicated logic. 