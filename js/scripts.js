
var dice = [1, 2, 3, 4, 5, 6];

var gameOn, playerX, totalScore, target, score;

function newGame() {
  gameOn = true;
  totalScore = [0, 0];
  score = [0, 0];
  playerX = 0;
  target = 100;

  $('#roll').text('0');
  $('#runningScore-0').text('0');
  $('#runningScore-1').text('0');
  $('#totalScore-0').text('0');
  $('#totalScore-1').text('0');
  $('#player-0 span').removeClass('notPlaying');
  $('#player-1 span').toggleClass('notPlaying', true);
  $('.winState').text('');
}

function playerNext() {
  $('span').toggleClass('notPlaying');

  if (playerX === 0) {
    playerX = 1
  } else {
    playerX = 0
  }

  score[playerX] = 0;
  $('#runningScore-0').text('0');
  $('#runningScore-1').text('0');
}


nextGame();

$('#btn-roll').on('click', function () {

  if (gameOn) {
    var rolledNumber = dice[Math.floor(Math.random() * dice.length)];
    console.log(rolledNumber);
    $('#roll').text(rolledNumber);

    if (rolledNumber > 1) {
      score[playerX] += rolledNumber;
      $('#runningScore-' + playerX).text(score[playerX]);
    } else {
      playerNext();
    }
  }
});

$('#btn-hold').on('click', function () {
  if (gameOn) {
    totalScore[playerX] += score[playerX];
    $('#totalScore-' + playerX).text(totalScore[playerX]);

    if (totalScore[playerX] >= target) {
      gameOn = false;
      $('.winState').text('PLAYER ' + (playerX + 1) + ' WINS !!! GAME OVER.');
    } else {
      playerNext();
      $('#roll').text('0');
    }
  }
})


$('#btn-newGame').click(function (e) {
  e.preventDefault();
  nextGame();
});
