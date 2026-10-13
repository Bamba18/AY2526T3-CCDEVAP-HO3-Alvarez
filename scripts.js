let num1, num2, operator, correctAnswer;
let score = 0;

const operators = ["-", "+", "*"];

function generateQuestion()
{
    num1 = Math.round(Math.random() * 10);
    num2 = Math.round(Math.random() * 10);
    operator = randomOperator()
    document.getElementById("question").innerHTML = num1 + " " + operator + " " + num2;

    correctAnswer = calculate (num1, num2, operator);
    console.log ("This is the Correct answer:" + correctAnswer);


}

function randomOperator()
{

    let randomValue = Math.floor (Math.random() * 3);
    console.log(randomValue);
    let chosenOperator = operators[randomValue]

    return chosenOperator;
}

function calculate (val1, val2, oper)
{
    console.log("Value 1: " + val1)
    console.log("Operator: " + oper)
    console.log("Value 2: " + val2)
    let result = 0;

    switch (oper)
    {
        case '+':
            result = val1 + val2;
            break;
        case '-':
            result = val1 - val2;
            break;
        case '*':
            result = val1 * val2;
            break;

        break;
    }
    return result;
}

function checkAnswer()
{   
    let playerAnswer = Number(document.getElementById("answer").value);
    let previousAnswer = correctAnswer;

    // change question right away
    generateQuestion();
    document.getElementById("answer").value = "";

    if (validateAnswer(playerAnswer, previousAnswer) == true)
    {
        console.log("Answer is correct");
        score++;
        document.getElementById("score").innerHTML = score;
        document.getElementById("message").innerHTML = "<span style='color: green;'>Correct!</span>";

        if (score >= 5) {
            // Show victory screen
            document.getElementById("div-questions").style.display = "none";
            document.getElementById("div-success").style.display = "block";
        }
    }
    else
    {   
        console.log("Answer is incorrect");
        document.getElementById("message").innerHTML = "<span style='color: red;'>Wrong! Correct answer is " + previousAnswer + ".</span>";
    }
}

function validateAnswer(userAnswer, correctAnswer)
{
    let result

    if (userAnswer == correctAnswer) 
    {
    result = true;
    } 
    else 
    {
    result = false;
    }

    return result
}

function playAgain()
{
    score = 0;
    document.getElementById("score").innerHTML = score;
    document.getElementById("message").innerHTML = "";
    document.getElementById("answer").value = "";
    document.getElementById("div-questions").style.display = "block";
    document.getElementById("div-success").style.display = "none";
    generateQuestion();
}
    
    generateQuestion();
    
    





