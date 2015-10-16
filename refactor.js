/*
game.board[0] = goal left
game.board[7] = goal right
[1] - [6] => bottom wells
[8] - [13] => top wells
*/
var game = {
  board: [0, 3, 3, 3, 3, 3, 3, 0, 3, 3, 3, 3, 3, 3],
  //board: [0, 3, 3, 0, 3, 3],
  player1: 'Player 1',
  player2: 'Player 2',
  turn: 0
}

function drawBoard(){
  //re-draw the board based on game.board
  for (var i=0; i<=game.board.length; i++){
    $('#'+i).text(game.board[i]);
  }
}

//Attaching Event Lisnteners
function addEvents(){
  $('.box').click(function(){
    console.log('click');
    //var stone_count = parseInt($(this).text());  //setting a variable to the stone value currently in the box
    var id = parseInt($(this).attr('id')); //setting a variable to the id of the box that was clicked
    var stone_count = game.board[id]; //getting stone count using the id of the well
    for(var i = stone_count; i >=1; i--){ //for loop that is taking the stone count, checking if larger than 1, and counting down
      var targetSpot = (id+i)%game.board.length;
      game.board[targetSpot]++; //increasing the next wells
      game.board[id] = 0;
    }
    drawBoard();
    game.turn++;
  })

  $('.restartButton').click(function(){
    //restart Game logic here
  })
}

function init(){
  var $board = $('#boardgame');

  // append 0
  $board.append('<div class = "box goal goal-left" id ="0">'+game.board[0]+'</div>');
  //starts at 13, going down to 8, adding topow
  for(var i = game.board.length-1; i>=game.board.length/2+1; i--){
    $board.append('<div class = "box toprow" id = "'+i+'" >'+game.board[i]+'</div>');
  }
  $board.append('<br>');
  //starts at 1, going up to 6, adding bottom row
  for(var i = 1; i<game.board.length/2; i++){
    $board.append('<div class = "box bottomrow" id = "'+i+'" >'+game.board[i]+'</div>');
  }
  //adding goal-right
  $board.append('<div class = "box goal goal-right" id ="7">'+game.board[game.board.length/2]+'</div>');

  $('.bottomrow').addClass('highlight');

  addEvents();
}

init();
