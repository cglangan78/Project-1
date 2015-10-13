//Global variables
//var boxes = document.querySelectorAll('.box');
var $boxes = $('.box');
var boardSize = 6;



//for loop to click on each box in the array
$(".box").each(function(index){
   $(this).click(function(){
     if($(this).hasClass("highlight")){
       console.log("this box is highlighted");
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
