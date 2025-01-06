var player = prompt("Piih: Rock, Paper, or Scissors?");
var computer = Math.random();
if (computer < 0.34) {
  computer = "Rock";
} else if (computer <= 0.67) {
  computer = "Paper";
} else {
  computer = "Scissors";
}

var compare = function (choice1, choice2) {
  if (choice1 === choice2) {
    return "The result is a draw!";
  }
  if (choice1 === "Rock") {
    if (choice2 === "Scissors") {
      return "Rock wins!";
    } else {
      return "Paper wins!";
    }
  }
  if (choice1 === "Paper") {
    if (choice2 === "Scissors") {
      return "Scissors wins!";
    } else {
      return "Paper wins!";
    }
  }
  if (choice1 === "Scissors") {
    if (choice2 === "Rock") {
      return "Rock wins!";
    } else {
      return "Scissors wins!";
    }
  }
};

alert(
  "You choose " +
    player +
    "\nThe computer choose " +
    computer +
    "\n" +
    compare(player, computer)
);


















// let userScore = 0;
// let computerScore = 0;

// function playGame() {
//   while (true) {
//     let player = prompt("Choose: Rock, Paper, or Scissors?").toLowerCase();
//     if (!["rock", "paper", "scissors"].includes(player)) {
//       alert("Invalid choice. Please choose Rock, Paper, or Scissors.");
//       continue;
//     }

//     // Generate computer's random choice
//     let computer = Math.random();
//     if (computer < 0.34) {
//       computer = "rock";
//     } else if (computer <= 0.67) {
//       computer = "paper";
//     } else {
//       computer = "scissors";
//     }

//     let result = compare(player, computer);
//     alert(
//       `You chose: ${player}\nComputer chose: ${computer}\nResult: ${result}`
//     );

//     if (result === "You win!") {
//       userScore++;
//     } else if (result === "Computer wins!") {
//       computerScore++;
//     }

//     let playAgain = prompt("Do you want to play again? (yes/no)").toLowerCase();
//     if (playAgain !== "yes") {
//       alert(
//         `Game over.\nFinal Score:\nYou: ${userScore}\nComputer: ${computerScore}\n${
//           userScore > computerScore
//             ? "You are the winner!"
//             : userScore < computerScore
//             ? "The computer is the winner!"
//             : "It's a tie!"
//         }`
//       );
//       break;
//     }
//   }
// }

// function compare(choice1, choice2) {
//   if (choice1 === choice2) {
//     return "It's a draw!";
//   }
//   if (
//     (choice1 === "rock" && choice2 === "scissors") ||
//     (choice1 === "scissors" && choice2 === "paper") ||
//     (choice1 === "paper" && choice2 === "rock")
//   ) {
//     return "You win!";
//   }
//   return "Computer wins!";
// }

// playGame();