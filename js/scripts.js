var dice = [1, 2, 3, 4, 5, 6];

var gameOn= ["playerX", "summedScore", "target", "score"];

function nextGame() {
  gameOn = true;
  totalScore = [0, 0];
  score = [0, 0];
  playerX = 0;
  target = 100;

$(".submit").click(function(event){
    event.preventDefault();
});
  $('#roll').text('0');
  function playerNext() {
  $('span').toggleClass('notPlaying');

  if (playerX === 0) {
    playerX = 1
  } else {
    playerX = 0
  }

  score[playerX] = 0;
  $('#currentScore-0').text('0');
  $('#currentScore-1').text('0');
}


nextGame();

$('#btn-roll').on('click', function () {

  if (gameOn) {
    var rolledNumber = dice[Math.floor(Math.random() * dice.length)];
    console.log(rolledNumber);
    $('#roll').text(rolledNumber);

    if (rolledNumber > 1) {
      score[playerX] += rolledNumber;
      $('#currentScore-' + playerX).text(score[playerX]);
    } else {
      playerNext();
    }
  }
});

$('#btn-hold').on('click', function () {
  if (gameOn) {
    totalScore[playerX] += score[playerX];
    $('#summedScore-' + playerX).text(totalScore[playerX]);

    if (totalScore[playerX] >= target) {
      gameOn = false;
      $('.winState').text('PLAYER ' + (playerX + 1) + ' WINS !!! GAME OVER.');
    } else {
      playerNext();
      $('#roll').text('0');
    }
  }
});
