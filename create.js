let PastGuesses = []; // array to store past guesses
const answer = Math.floor(Math.random() * 20) + 1; // random answer

const GuessNumber = () => {
  const input = document.getElementById("inputBtn");       // input field
  const guessBtn = document.getElementById("guessBtn");    // guess button
  const pastElement = document.getElementById("PastElements"); // element to show past guesses
  const feedback = document.getElementById("feedback");   // element to show feedback

  guessBtn.addEventListener("click", () => {
    const guess = Number(input.value); 
    // save guess
    PastGuesses.push(guess);

    // log all past guesses (optional)
    for (let i = 0; i < PastGuesses.length; i++) {
      const g = PastGuesses[i];
      if (g > answer) {
        console.log(`${g} is too high`);
      } else if (g < answer) {
        console.log(`${g} is too low`);
      } else {
        console.log(`${g} is just right!`);
      }
    }

    // update past guesses in UI
    if (pastElement) {
      pastElement.textContent = PastGuesses.join(", ");
    }

    
    if (guess === answer) {
      feedback.textContent = "Correct! The answer is " + answer;
    } else if (guess > answer) {
      feedback.textContent = "Answer too high";
    } else {
      feedback.textContent = "Answer too low";
    }
  });
};


GuessNumber();







