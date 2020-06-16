var timerElement = document.querySelector("#timer");

var secondsLeft = 60;

function setTimer() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timerElement.textContent = secondsLeft + " seconds remaining.";

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }

  }, 1000);
}

function sendMessage() {
  timerElement.textContent = "Time's up!";
}

setTimer();