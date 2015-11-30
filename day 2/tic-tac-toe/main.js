var el = {
  panel: document.querySelector('#a'),
  boxes: document.querySelectorAll('.box'),
  game: document.querySelector('#b'),
};
var winner;

var winners = [
  /(X|O) . . \1 . . \1 . ./,
  /. (X|O) . . \1 . . \1 ./,
  /. . (X|O) . . \1 . . \1/,
  /(X|O) \1 \1 . . . . . ./,
  /. . . (X|O) \1 \1 . . ./,
  /. . . . . . (X|O) \1 \1/,
  /(X|O) . . . \1 . . . \1/,
  /. . (X|O) . \1 . \1 . ./,
];


el.panel.innerHTML = "Let's Play";

var currentPlayer = "X";

function nextPlayer() {
  if ( currentPlayer === "X" ) {
    currentPlayer = "O";
  } else {
    currentPlayer = "X";
  }
  return currentPlayer;
}

function userClickOnBox(e) {
  var box = e.target;
  if ( winner ) { return; }

  if ( box.innerHTML !== "&nbsp;" ) {
    return;
  }
  
  box.innerHTML = currentPlayer;
  nextTurn();
}


function nextTurn() {
  var player = nextPlayer();
  if ( winner = has_winner() ) {
    el.panel.innerHTML = winner + " has won the game. Bravo!!!";
  } else {
    el.panel.innerHTML = "It's " + player + "'s turn";
  }

}

function has_winner() {
  var text = el.game.innerText;
  for ( var i=0; i < winners.length; i++ ) {
    var re = winners[i];

    var res = text.match(re);
    if ( res ) {
      return res[1];
    }
  }

  return null;
}


nextTurn();

el.game.addEventListener('click', userClickOnBox);

