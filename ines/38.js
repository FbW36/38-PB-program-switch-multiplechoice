//1
function colorAnalyzer(color){
switch (color){
    case 'red':
    return"Red rose";
    case 'blue':
    return"Blue rose";
    case 'green':
    return"Green rose";
    case 'yellow':
    return"yellow rose";
}
}
console.log("1==>",colorAnalyzer('yellow'));

//2
function grading(grade){
    switch(grade){
        case 5:
        return "Very Good"
        case 4:
        return "Good"
        case 3:
        return "Average"
        case 2:
        return "Bad"
        case 1:
        return "Very Bad"
    }
}

console.log("2==>", grading(2));


//3
let fruit = "Strawberry"

switch(fruit){
    case "Banana": 
    console.log("Monkeys love bananas");
    break;
    case "Orange":
    console.log("Oranges have a lot of vitamin C");
    break;
    case "Strawberry":
    console.log("Strawberries are delicious");
    break;
    case "Apples":
    console.log("Apples wake you up");
    break;
}

//4
function percentageComplete(percentage){
    switch(true){
    case percentage<30:
    return "Still a long way to go";
    case percentage>=30 && percentage<=50:
    return "Slowly getting there";
    case percentage>=51 && percentage<=80:
    return "You can do it!";
    case percentage>=81 && percentage<=99:
    return "This is the last push!"
    case percentage === 100:
    return "You're there. Well done!"
    }
}

console.log(percentageComplete(100));

//5
//When there are a lot of if else statements that can be replaced by cases 