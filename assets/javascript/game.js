// Each image button has random numbers

// Crystal 1 - random number after each game between 1 - 12
// Crystal 2 - random number after each game between 1 - 12
// Crystal 3 - random number after each game between 1 - 12
// Crystal 4 - random number after each game between 1 - 12

// var crystal1;
// var crystal2;
// var crystal3;
// var crystal4;


// var randomNumber = Math.floor(Math.random() * (102)) + 19;
// var crystals = Math.floor(Math.random() * (12)) + 1;

// $("#random-number").text(randomNumber);


function generateRandomNumber(){
    return Math.floor(Math.random() * (102)) + 19

   }

   function generateCrystals(){
    return Math.floor(Math.random() * (12)) + 1
   }


   let randomNum = generateRandomNumber();
   let crystals = generateCrystals();


   $("#random-number").html(randomNum);
   


// function getRandomIntInclusive(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
//   }

// var randomNumber = [];

// for(var i=19; i <121; i++) {
//     randomNumber.push(i);

// }

// var crystals = [];

// for(var c=1; c<13; c++) {
//     crystals.push(c);

// }




// Each button (crystal) needs random number (math floor?)

// when buttons are pressed, random crystal numbers below will show in "total score". Press these buttons until it adds up to the random number that’s generated.


// needs random # at the start of the game and for loop 19 -120 / math.floor

// have to link the random 19-120 number to the "total score" to show 


// Match total score of the crystal to the random number that’s generated
// if the number matches (you win), else (you lose)
// wins ++ / losses++

// if it does not equal, reset random number and crystal
// if it does equal, win++

// Need reset function after a win or lose

