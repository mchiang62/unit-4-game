// Each image button has a random number

// Crystal 1 - random number between 1 - 12 after each game
// Crystal 2 - random number between 1 - 12 after each game
// Crystal 3 - random number between 1 - 12 after each game
// Crystal 4 - random number between 1 - 12 after each game

$(document).ready(function(){

function generateRandomNumber(){
    return Math.floor(Math.random() * (102)) + 19

   }

var randomNum = generateRandomNumber();
   
var crystal1 = Math.floor(Math.random() * (12)) + 1;
var crystal2 = Math.floor(Math.random() * (12)) + 1;
var crystal3 = Math.floor(Math.random() * (12)) + 1;
var crystal4 = Math.floor(Math.random() * (12)) + 1;

var totalScore = 0;


    $("#random-number").html(randomNum);


    $("#crystal-1").on("click", function () {
        totalScore = totalScore + crystal1;
        console.log("total = " + totalScore);
    $("#total-score").html(totalScore);
    countScores ();

});

   $("#crystal-2").on("click", function () {
    totalScore = totalScore + crystal2;
    console.log("total = " + totalScore);
    $("#total-score").html(totalScore);
    countScores ();

});

    $("#crystal-3").on("click", function () {
        totalScore = totalScore + crystal3;
        console.log("total = " + totalScore);
    $("#total-score").html(totalScore);
    countScores ();

});

    $("#crystal-4").on("click", function () {
        totalScore = totalScore + crystal4;
        console.log("total = " + totalScore);
    $("#total-score").html(totalScore);
    countScores ();


});

var winCount = 0;
var lossCount = 0;


$("#wins").html(winCount);
$("#losses").html(lossCount);



function winner () {
    alert("You Win! :)");
    winCount++;
    $("#wins").html(winCount);
    reset();
}


function loser () {
    alert("You Lose! :(");
    lossCount++;
    $("#losses").html(lossCount);
    reset();
}

function reset () {
    randomNum = generateRandomNumber();
    console.log(randomNum);
    $("#random-number").html(randomNum);
    crystal1 = Math.floor(Math.random() * (12)) + 1;
    crystal2 = Math.floor(Math.random() * (12)) + 1;
    crystal3 = Math.floor(Math.random() * (12)) + 1;
    crystal4 = Math.floor(Math.random() * (12)) + 1;
    totalScore = 0;
    $("#total-score").html(totalScore);

}

function countScores () {
    if (totalScore === randomNum) {
        winner();
    }
    else if (totalScore > randomNum) {
        loser();
    }

}
  
});
   



// Each button (crystal) needs random number (math floor?)

// when buttons are pressed, random crystal numbers below will show in "total score". Press these buttons until it adds up to the random number that’s generated.

// needs random # at the start of the game 19 -120 / math.floor

// Match "total score" of the crystal to the random 19-120 number that’s generated
// if the number matches win++, else if lose++

// after a win and loss, reset random number and crystal


// function getRandomIntInclusive(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
//   }

// winner() - this is calling a function

// type of variable and value the same - === signs == or === double equal signs check the value; triple checks everything

 // methods
    // . something is a method (inside the function)
    // in function, returning something means equals to the returned #.