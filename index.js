// pull score "0"
// function for adding 1 point
// function for adding 2 points
// function for adding 3 points

// home score?
let pointsHome = 0
let scoreHome = document.getElementById("score-home")

// away score?
let pointsAway = 0
let scoreAway = document.getElementById("score-away")

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

function awayAddOne() {
  pointsAway = pointsAway + 1
  scoreAway.textContent = pointsAway
}

function awayAddTwo() {
  pointsAway = pointsAway + 2
  scoreAway.textContent = pointsAway
}

function awayAddThree() {
  pointsAway = pointsAway + 3
  scoreAway.textContent = pointsAway
}

function endGame() {
    if (pointsHome > pointsAway) {
        winner.textContent = "Game Over! Home team wins!"
    } else  if (pointsAway > pointsHome) {
        winner.textContent = "Game Over! Away Team wins!"
    }  else {
        winner.textContent = "Game Over! It's a tie!"  
    }  
}

function reset() {
  scoreHome.textContent = 0
  pointsHome = 0
  scoreAway.textContent = 0
  pointsAway = 0
  winner.textContent = "" 
}