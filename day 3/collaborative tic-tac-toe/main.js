var fb = new Firebase("https://demonov15.firebaseio.com/my/game");

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

function play(boxid) {
  var box = document.getElementById(boxid);
  if ( winner ) { return; }

  if ( box.innerHTML !== "&nbsp;" ) {
    return;
  }
  
  box.innerHTML = currentPlayer;
  nextTurn();
}

function userClickOnBox(e) {
  var box = e.target;
  fb.push({boxid: box.id});
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

function newGame() {
  var boxes = document.querySelectorAll('.box');
  for ( var i=0; i < boxes.length; i++ ) {
    boxes[i].innerHTML = '&nbsp;';
  }
  currentPlayer = "O";
  el.panel.innerHTML = "It's " + currentPlayer + "'s turn";
  winner = false;
}


nextTurn();

el.game.addEventListener('click', userClickOnBox);

fb.on('child_added', function(snapshot) {
  var data = snapshot.val();
  if ( data.clear ) {
    newGame();
  } else if ( data.boxid ) {
    play(data.boxid);
  } else {
    console.log("unknown message");
  }
});


document.querySelector('#btn-reset').addEventListener('click', function() {
  fb.set({});
  fb.push({clear: true});
});


