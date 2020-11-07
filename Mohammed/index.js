
// 1. Color Analyzer

function colors(c)
{
    switch (c)
    {
        case 1:
            return "red";
            
        case 2:
            return "blue";
        

        case 3:
            return "green";

        case 4:
            return "Yellow";

        default:
            return "Sorry! you are our of colors";
    }
}

console.log(`Ex. No. 1: The color is ${colors(3)}`);

// ========================================================

// 2. Grading

function gradeEvaluation(grade)
{   
    switch (!!grade)
    {
        case grade>90 && grade<=100:

            return "Excellent";

        case (grade > 80 && grade <= 90):
            return "Very Good";

        case (grade > 70 && grade <= 80):
                return "Good";
                
        case (grade > 60 && grade <= 70):
            return "Fair";
        
        case (grade > 50 && grade <= 60):
                return "Almost Passed";

        case grade < 50:
                return "Fail";

        default: 
            return "sorry can not be evaluated";
    }
}

console.log(`Ex. No. 2: Your Grade is ${gradeEvaluation(85)}`);

// ============================================================

// 3. Fruits

function fruitsSelection(fruit)
{
    switch(fruit)
    {
        case 'Banana':
            return `${fruit}`;

        case 'Wattermelone':
            return `${fruit}`;

        case 'Strawberry':
            return fruit;

        default:
            return 'Sorry! that might not be a fruit';
    }
}

console.log(`Ex. No. 3: I like ${fruitsSelection('Banana')}`);

// ==============================================

// 4. Percentage Complete

function checkPercentageComplete(percentageComplete)
{
    switch(!!percentageComplete)
    {
        case percentageComplete < 30 :
            return "Still a long way to go";

        case percentageComplete >= 30 && percentageComplete <= 50 :
            return "Slowly getting there";

        case percentageComplete >= 51 && percentageComplete <= 80 :
            return "You can do it!";

        case percentageComplete >= 81 && percentageComplete <= 99:
            return "This is the last push!";

        case percentageComplete == 100 :
            return "You're there. Well done!";

        default:
            return "Sorry! No evaluation for this input";
    }
}

console.log('Ex. No. 4: ', checkPercentageComplete(100));

// ==================================================

// 5.

/*
Swittch:
-   Checks different values for one variable
-   Easy to write and understand
-   Needs more code to write
-   Selector that selects certain value that matches the switch case 

if-else statement:
- Checks different values for different variables
- More difficult if the condition gets more complex
- needs less code to write
 

In general, depends on the nature of the problem we can select which one to use. If the problem needs 
complex condition to be written with different variables and different values then if-statement is preferred 
in this case otherwise we go for switch
*/