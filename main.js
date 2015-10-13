//Global variables
var $boxes = $('.box');
var boardSize = 6;
var topRight = $('#4');
var topLeft = $('#5');
var bottomRight = $('#1');
var bottomLeft = $('#2');
var goalLeft = $('#0');
var goalRight = $('#3');

//for loop to click on each box in the array
$(".box").each(function(index){
   $(this).click(function(){
     if($(this).hasClass("highlight")){
       var stone_count = parseInt($(this).text());
         var id = parseInt($(this).attr('id'));
         for(var i = stone_count; i >=1; i--){
           var targetId = (id+i)%boardSize;
           var targetCount = parseInt($('#'+targetId).text());
             targetCount++;
             $("#" + targetId).text(targetCount);
          }
       $(this).text(0);
       count++;
     }
   })
})

//pick player - highlighed boxes determine turn - dont let highlight change
var count = 0;
$('.box').click(function() {
  var selected = $('.bottomrow');
  var notSelected = $('.toprow');

     selected.toggleClass("highlight", count%2 === 0);
     selected.toggleClass("noHighlight", count%2 !== 0);
     notSelected.toggleClass("noHighlight", count%2 === 0);
     notSelected.toggleClass("highlight", count%2 !== 0);
});

//find winner
$(".box").each(function(){
  $(this).click(function(){
   if ((topRight.text() === '0') && (topLeft.text() === '0')) {
      console.log("top row empty")
          if(goalLeft.text() > goalRight.text()) {
            alert("Player 2 Wins")
            window.location.reload(true);
          }
          else if(goalLeft.text() < goalRight.text()) {
            alert("Player 1 Wins")
            window.location.reload(true);
          }else{
            alert("Player 1 and Player 2 Tie")
            window.location.reload(true);
          }
  } else if ((bottomRight.text() === '0') && (bottomLeft.text() === '0')) {
      console.log("bottom row empty")
          if(goalLeft.text() < goalRight.text()) {
            alert("Player 2 Wins")
            window.location.reload(true);
          }
          else if(goalLeft.text() > goalRight.text()) {
            alert("Player 2 Wins")
            window.location.reload(true);
          }else{
            alert("Player 1 and Player 2 Tie")
            window.location.reload(true);
          }
    }
  })
})
