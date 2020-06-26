// Hide quiz and score cards on page load.
$("#quiz").hide();
$("#scoreCard").hide();
$("#hiScoreCard").hide();

// Wait until the document fully loads to run script.
$(document).ready(function () {

  // Variables to select the timer, start the timer at 60 seconds, and set the user's score to 0.
  var timerElement = $("#timer");
  var secondsLeft = 60;
  var score = 0;

  // Function to start the timer countdown.
  function setTimer() {
    var timerInterval = setInterval(function () {
      secondsLeft--;
      timerElement.text(secondsLeft + " seconds");

      if (secondsLeft === 0) {
        clearInterval(timerInterval);
        sendMessage();
      }

    }, 1000);
  }

  // Function that runs when the timer reaches 0.
  function sendMessage() {
    timerElement.text("Time's up!");
  }

  // Event listeners for high score and start buttons.
  // $("#hiscore").click(hiScores);
  $("#start").click(q1);

  // Function to hide the title card and initialize Question 1.
  function q1(event) {
    $("#title").hide();
  };

  setTimer();

});