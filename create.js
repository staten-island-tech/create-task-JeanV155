let PastGuesses = [];
const answer = Math.floor(Math.random() * 20) + 1; 

function GuessNumber (guess)  {
  
  const pastElement = document.getElementById("PastElements");
  const feedback = document.getElementById("feedback");  

  PastGuesses.push(guess);
   
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

   
    if (pastElement) {
      pastElement.textContent = PastGuesses.join(", ");
    }

    
    if (guess === answer) {
      feedback.textContent = "Correct! right on the money " ;
    } else if (guess > answer) {
      feedback.textContent = "too high";
    } else {
      feedback.textContent = "too low";
    } 

}
     const input = document.getElementById("inputBtn");       
  const guessBtn = document.getElementById("guessBtn");  

guessBtn.addEventListener("click", () => {
    const guess = Number(input.value); 
    GuessNumber(guess)
    




  });
 











