//Global variables
var $boxes = $('.box');
var boardSize = 6;
var spot4 = $('#4');
var spot5 = $('#5');
var spot1 = $('#1');
var spot2 = $('#2');
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
           console.log("wtf did he do",targetId);
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

//find winner - add remaining stones to winners score
$(".box").each(function(){
  $(this).click(function(){
   if ((spot4.text() === '0') && (spot5.text() === '0')) {
      var a = parseInt(spot1.text());
      var b = parseInt(spot2.text());
      var c = parseInt(goalLeft.text());
      var total = parseInt(a + b + c);
      goalLeft.text(total);
      spot1.text(0);
      spot2.text(0);
          if(goalLeft.text() > goalRight.text()) {
            console.log("Player 2 Wins")
            // window.location.reload(true);
          }
          else if(goalLeft.text() < goalRight.text()) {
            console.log("Player 1 Wins")
            // window.location.reload(true);
          }else{
            console.log("Player 1 and Player 2 Tie")
            // window.location.reload(true);
          }
  } else if ((spot1.text() === '0') && (spot2.text() === '0')) {
    var a = parseInt(spot5.text());
    var b = parseInt(spot4.text());
    var c = parseInt(goalRight.text());
    var total = parseInt(a + b + c);
    goalRight.text(total);
    spot5.text(0);
    spot4.text(0);

      if(goalLeft.text() < goalRight.text()) {
        console.log("Player 1 Wins")
        // window.location.reload(true);
      }
      else if(goalLeft.text() > goalRight.text()) {
        console.log("Player 2 Wins")
        // window.location.reload(true);
      }else{
        console.log("Player 1 and Player 2 Tie")
        // window.location.reload(true);
      }
    }
  })
})
