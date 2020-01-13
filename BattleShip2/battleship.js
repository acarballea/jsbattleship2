var randomloc = Math.floor(Math.random() * 5);
var loc1 = randomloc;
var loc2 = loc1 + 1;
var loc3 = loc2 + 1;

var guess;
var guesses = 0;

var hits = 0;
var isSunk = false;

while (isSunk == false) {
  guess = prompt("Ready, aim, fire! Enter a number between 0 and 6:");
  if (guess < 0 || guess > 6) {
    alert("Please enter a valid cell number");
  } else {
    guesses = guesses + 1;

    if (guesses == loc1 || guesses == loc2 || guesses == loc3) {
      alert("HIT!");
      hits = hits + 1;
      if (hits == 3) {
          isSunk = true;
          alert("YOU SANK MY BATTLESHIP!")
      }
    } else {
        alert("MISS!");
    }
  }
}

var stats = "You took " + guesses + " guesses to sink the battleship, which means your shooting accuracy was " + (3/guesses);
  alert(stats);
