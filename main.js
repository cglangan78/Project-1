//Global variables
var $boxes = $('.box');
var boardSize = 14;
var spot1 = $('#1');
var spot2 = $('#2');
var spot3 = $('#3');
var spot4 = $('#4');
var spot5 = $('#5');
var spot6 = $('#6');
var goalRight = $('#7');
var spot8 = $('#8');
var spot9 = $('#9');
var spot10 = $('#10');
var spot11 = $('#11');
var spot12 = $('#12');
var spot13 = $('#13');
var goalLeft = $('#0');


//for loop to click on each box in the array
$(".box").each(function(index){
   $(this).click(function(){
     if($(this).text() === '0'){
         console.log("no")
      } else {
           if($(this).hasClass("highlight") && $(this).hasClass("bottomrow")){
                   var stone_count = parseInt($(this).text());
                     var id = parseInt($(this).attr('id'));
                     for(var i = stone_count; i >=1; i--){
                       var targetId = (id+i)%boardSize;
                       var targetCount = parseInt($('#'+targetId).text());
                         targetCount++;
                         $("#" + targetId).text(targetCount);

                    //skip other players goal + double add to other players first spot
                     if(targetId === 0){
                        var goal = parseInt(goalLeft.text());
                        var total = (goal - 1);
                        goalLeft.text(total);
                        var unLucky = parseInt(spot1.text());
                        var unLuckyTotal = (unLucky + 1);
                        spot1.text(unLuckyTotal);
                     }
                    //if the stone count goes over 14 - original spot value goes to 1
                    if (stone_count >= 14){
                      $(this).text(1);
                    }else{
                      $(this).text(0);
                    }
                  }
                count++;
            } else if($(this).hasClass("highlight") && $(this).hasClass("toprow")){
                     var stone_count = parseInt($(this).text());
                       var id = parseInt($(this).attr('id'));
                       for(var i = stone_count; i >=1; i--){
                         var targetId = (id+i)%boardSize;
                         var targetCount = parseInt($('#'+targetId).text());
                               targetCount++;
                               $("#" + targetId).text(targetCount);

                       if(targetId === 7){
                          var goal = parseInt(goalRight.text());
                          var total = (goal - 1);
                          goalRight.text(total);
                          var unLucky = parseInt(spot8.text());
                          var unLuckyTotal = (unLucky + 1);
                          spot8.text(unLuckyTotal);
                       }

                      if (stone_count >= 14){
                        $(this).text(1);
                      }else{
                        $(this).text(0);
                      }
                    }
                  count++;
            }
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
   if ((spot1.text() === '0') && (spot2.text() === '0') && (spot3.text() === '0')
      && (spot4.text() === '0') && (spot5.text() === '0') && (spot6.text() === '0')) {
      var a = parseInt(spot8.text());
      var b = parseInt(spot9.text());
      var c = parseInt(spot10.text());
      var d = parseInt(spot11.text());
      var e = parseInt(spot12.text());
      var f = parseInt(spot13.text());
      var g = parseInt(goalRight.text());
      var total = parseInt(a + b + c + d + e + f + g);
      goalRight.text(total);
      spot8.text(0);
      spot9.text(0);
      spot10.text(0);
      spot11.text(0);
      spot12.text(0);
      spot13.text(0);
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
  } else if ((spot8.text() === '0') && (spot9.text() === '0') && (spot10.text() === '0')
      && (spot11.text() === '0') && (spot12.text() === '0') && (spot13.text() === '0')) {
      var a = parseInt(spot1.text());
      var b = parseInt(spot2.text());
      var c = parseInt(spot3.text());
      var d = parseInt(spot4.text());
      var e = parseInt(spot5.text());
      var f = parseInt(spot6.text());
      var g = parseInt(goalLeft.text());
      var total = parseInt(a + b + c + d + e + f + g);
      goalLeft.text(total);
      spot1.text(0);
      spot2.text(0);
      spot3.text(0);
      spot4.text(0);
      spot5.text(0);
      spot6.text(0);

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
