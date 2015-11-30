(function() {
  window.intel = window.intel || {};

  // same as:
  // if ( ! window.intel ) {
  //   window.intel = {};
  // }

  function show_start_message() {
    console.log("player:: start game");
  }

  window.intel.player_startGame = function() {
    show_start_message();
  }

}());


