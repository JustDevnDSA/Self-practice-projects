let previousRolls = [];
const rollSound = new Audio("rolldice.mp3"); // Initialize the audio

// Preload the audio file
rollSound.preload = "auto";

// Preload dice images
const diceImages = [];
for (let i = 1; i <= 6; i++) {
  diceImages[i] = new Image();
  diceImages[i].src = `dice${i}.jpg`;
}

document.getElementById("rollButton").addEventListener("click", function () {
  var dice = document.getElementById("dice");
  var diceImage = document.getElementById("diceImage");

  // Play the roll sound immediately
  playSound();

  // Start the rolling animation
  dice.classList.add("rolling");

  setTimeout(function () {
    let randomNumber;
    do {
      randomNumber = Math.floor(Math.random() * 6) + 1;
    } while (previousRolls.length >= 2 && randomNumber === previousRolls[0] && randomNumber === previousRolls[1]);

    // Update the previous rolls array
    previousRolls.push(randomNumber);
    if (previousRolls.length > 2) {
      previousRolls.shift();
    }

    // Set the image source based on the random number
    diceImage.src = diceImages[randomNumber].src;

    // Stop the rolling animation
    dice.classList.remove("rolling");
  }, 900); // Match the duration of the animation to 900ms
});

const playSound = () => {
  rollSound.currentTime = 0; // Reset audio to start
  rollSound.play();
};
