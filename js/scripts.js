var dice = [1, 2, 3, 4, 5, 6];

var gameOn= ["playerZ", "summedScore", "target", "score"];

function nextGame() {
  gameOn = true;
  totalScore = [0, 0];
  score = [0, 0];
  playerZ = 0;
  target = 100;

$(".submit").click(function(event){
    event.preventDefault();
});
  $("#roll").text("0");
}

function playerNext() {
  if (playerZ === 0) {
    playerZ = 1
  } else {
    playerZ = 0
  }

  score[playerZ] = 0;
  $("#currentScore-0").text("0");
  $("#currentScore-1").text("0");
}

nextGame();
$("#btn-roll").on("click", function () {

  if (gameOn) {
    var rolledNumber = dice[Math.floor(Math.random() * dice.length)];
    console.log(rolledNumber);
    $("#roll").text(rolledNumber);
    if (rolledNumber > 1) {
      score[playerZ] += rolledNumber;
      $("#currentScore-" + playerZ).text(score[playerZ]);
    } else {
      playerNext();
    }
  }
});

$("#btn-hold").on("click", function () {
  if (gameOn) {
    totalScore[playerZ] += score[playerZ];
    $("#summedScore-" + playerZ).text(totalScore[playerZ]);

    if (totalScore[playerZ] >= target) {
      gameOn = false;
      $(".win").text("PLAYER " + (playerZ + 1) + " WINS !!! GAME OVER.");
    } else {
      playerNext();
      $("#roll").text('0');
    }
  }
  $('#btn-newGame').click(function (event) {
  event.preventDefault();
  nextGame();
  });
})

