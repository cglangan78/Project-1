//Global variables
//var boxes = document.querySelectorAll('.box');
var $boxes = $('.box');
var boardSize = 6;


//for loop to click on each box in the array
$(".box").each(function(index){
  $(this).click(function(){
    var stone_count = parseInt($(this).text());
    var id = parseInt($(this).attr('id'));
    for(var i = stone_count; i >=1; i--){
      console.log("Move stone to ",(id+i)%boardSize);
      var targetId = (id+i)%boardSize;
      var targetCount = parseInt($('#'+targetId).text());
        console.log(targetCount)
        targetCount++;
      $("#" + targetId).text(targetCount);
    }
    $(this).text(0);
  })
});


//pick player





//pick winner

//
