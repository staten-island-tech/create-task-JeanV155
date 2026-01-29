let PastGuessesArray = [];

const GuessNumber = () => {
  const n = Math.floor(Math.random() * 20) + 1;
  let guess;

while(n !== answer) {
    n = number(prompt("guess a number any number"));

    PastGuesses.push(n)

    if (guess > n) {
        console.log("answer to low");
 } else if (guess < n)
    console.log("answer to low ");
    else {
        console.log("just right boyo");
        



    }


}
}