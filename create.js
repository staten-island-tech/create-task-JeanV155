let PastGuesses = [];
  const answer = Math.floor(Math.random() * 20) + 1; 

const GuessNumber = () => {
  const input = document.getElementById("inputBtn")
  const guess = document.getElementById("guessBtn")
  const PastGuesses = document.getElementById("PastGuesses")
  const feedback = document.getElementById("feedback")

 button.addEventListener("click", () => {
  const guess = Number(input.value);
  pastGuesses.push(guess);

 for (let i = 0; i < pastGuesses.length; i++) {
    const g = pastGuesses[i];
    if (g > answer) {
      console.log(`${g} is too high`);
    } else if (g < answer) {
      console.log(`${g} is too low`);
    } else {
      console.log(`${g} is just right!`);
    }
  }

past.textcontext = PastGuesses.join(",")

if (guess ==== answer) ; {
    feedback.textcontext = 'correcto boyo the answer' {
     } else if (guess > answer) {
        feedback.textContent = 'answer to high'
     } else (guess < answer) {
        feedback.textcontext = 'answer to low'
     }


    }





}

