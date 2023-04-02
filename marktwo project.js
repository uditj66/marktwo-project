var readlineSync = require("readline-sync");
var useranswer = readlineSync.question("hi! would you like to play DO YOU KNOW ME QUIZ ");
if (useranswer === "yes") {
    console.log("ok!let's play, beware of negative marking");
} else {
    console.log("try it out, later");
    return;
}

score = 0;
function quiz(question, answer) {
    var useranswer = readlineSync.question(question);
    if (useranswer.toUpperCase() === answer.toUpperCase()) {
        console.log("YOU GUESS IT RIGHT!");
        score++;
        console.log("SCORE IS: ", score);
        console.log("----------------");
    }
    else {
        console.log("oh! so sorry,better luck next time");
        score--;
        console.log("SCORE is :", score);
        console.log("----------------");
    }
}


var questions = [{
    question: "where do i live ",
    answer: "delhi",
},
{
    question: "which is my favourite car ",
    answer: "mercedesmaybach"
},
{
    question: "how old i am",
    answer: "22"
},
{
    question: "what i m currently learning ",
    answer: "tanay pratap web dev levelzero"
},
{
    question: "what do you want to become ",
    answer: "contributer to new india"
}]

for (let i = 0; i < questions.length; i++) {
    var currentquestion = questions[i];
    quiz(currentquestion.question, currentquestion.answer);
}
console.log("SCORE SUMMARY");
var highscores = [{ name: "udit jain", score: 5 },
{ name: "shivam pandey", score: 3 }];
for (let i = 0; i < highscores.length; i++) {
    console.log(highscores[i].name);
    console.log(highscores[i].score);
}