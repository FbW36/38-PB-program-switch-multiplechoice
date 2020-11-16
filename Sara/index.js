// 1) Create a switch statement that prints a different statement for each color possibility (red, blue, green, yellow) 
const myColorStatment = (myColor) => {
    switch(myColor){
        case 1: return `Orange is a carrot`;
        case 2: return `Green is the grass`;
        case 3: return `Brown is the bear`;
        case 4: return `Purple is the plum`; 
        case 5: return `Blue is the sky`; 
        default: return `Oh RAINBOW...`
    }
};
console.log("myColorStatment ==>", myColorStatment(1));
console.log("myColorStatment ==>", myColorStatment(2)); 
console.log("myColorStatment ==>", myColorStatment(3)); 
console.log("myColorStatment ==>", myColorStatment('yellow'));  

// 2) Create a switch statement that prints different comments depending on a grade.
const printingGrades = (grades) => {
    switch(grades) {
        case 1: return `Great job you are a star!`;
        break; 
        case 2: return `You did ok bud!`;
        break; 
        case 3: return `Try again!`;
        break; 
        default: return `error case`;    
    }
}; 
console.log("printingGrades ==>", printingGrades(1));
console.log("printingGrades ==>", printingGrades(2));
console.log("printingGrades ==>", printingGrades(3));
console.log("printingGrades ==>", printingGrades(4));

// 3) Create a switch statement that prints different statement for various fruit (e.g. banana, orange, strawberry, apple).
const fruitStatement = (fruits) => {
    switch(fruits){
        case 1: return `im an apple 🍏`;
        break; 
        case 2: return `im a banana 🍌`;
        break;
        case 3: return `im a strawberry 🍓`;
        break;
        default: return `I am not a fruit 🐈`;
    }  
}; 
console.log("fruitStatement ==>", fruitStatement(1));
console.log("fruitStatement ==>", fruitStatement(2));
console.log("fruitStatement ==>", fruitStatement(3));   
console.log("fruitStatement ==>", fruitStatement(10));   

// 4) If percentageComplete is below 30, print "Still a long way to go". 
// If the percentageComplete is between 30 and 50, print "Slowly getting there". 
const percentageComplete = (myValue) => {
    switch(true){
        case (myValue < 30): return `"Still a long way to go". Your score ${myValue}.`;
        break;
        case (myValue >= 30 && myValue <= 50): return `"Slowly getting there". Your score ${myValue}.`;
        break;
        case (myValue >= 51 && myValue <= 80): return `"You can do it!". Your score ${myValue}.`;
        break;
        case (myValue >= 81 && myValue <= 99): return `"This is the last push!". Your score ${myValue}.`;
        break;
        case (myValue === 100): return `"You're there. Well done!". Your score ${myValue}.`;
        break; 
        default: return `error... not the correct input`;
    }
}; 
console.log("percentageComplete ==>", percentageComplete(Math.ceil(Math.random() * 100))); 