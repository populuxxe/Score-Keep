// pull score "0"
// function for adding 1 point
// function for adding 2 points
// function for adding 3 points

// home score?
let pointsHome = 0
let scoreHome = document.getElementById("score-home")

// guest score?
let pointsGuest = 0
let scoreGuest = document.getElementById("score-guest")

// game over?
let winner = document.getElementById("game-over")

function homeAddOne() {
  pointsHome = pointsHome + 1
  scoreHome.textContent = pointsHome
}

function homeAddTwo() {
  pointsHome = pointsHome + 2
  scoreHome.textContent = pointsHome
}

function homeAddThree() {
  pointsHome = pointsHome + 3
  scoreHome.textContent = pointsHome
}

function guestAddOne() {
  pointsGuest = pointsGuest + 1
  scoreGuest.textContent = pointsGuest
}

function guestAddTwo() {
  pointsGuest = pointsGuest + 2
  scoreGuest.textContent = pointsGuest
}

function guestAddThree() {
  pointsGuest = pointsGuest + 3
  scoreGuest.textContent = pointsGuest
}

function endGame() {
    if (pointsHome > pointsGuest) {
        winner.textContent = "Game Over! Home team wins!"
    } else  if (pointsGuest > pointsHome) {
        winner.textContent = "Game Over! Guest Team wins!"
    }  else {
        winner.textContent = "Game Over! It's a tie!"  
    }  
}

function reset() {
  scoreHome.textContent = 0
  pointsHome = 0
  scoreGuest.textContent = 0
  pointsGuest = 0
  winner.textContent = "" 
}