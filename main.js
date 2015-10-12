//Global Variables//
var player1;
var player2;
var value;
// var counter = 0;
var currentValue;
var id;



var box = document.getElementsByClassName('box');
// var box1Button = document.querySelector('#box1');
// var box2Button = document.querySelector('#box2');

var display1 = document.getElementById('display1');
var display2 = document.getElementById('display2');

var goalDisplay1 = document.getElementById('goalDisplay1');
var goalDisplay2 = document.getElementById('goalDisplay2');

var displayBox = document.getElementsByClassName('display');



// //for loop to click on each box
// for(var i = 0; i < displayBox.length; i++) {
//   setValue(displayBox[i]);
//   displayBox[i].addEventListener('click',function(){
//     value = this.innerHTML;
//       console.log(value);
//     })
// }


//for loop to click on each box
for(var i = 0; i < displayBox.length; i++) {
  setValue(displayBox[i]);
}



function setValue(el){
  el.addEventListener('click',function(){
    value = this.innerHTML;
      console.log(value);

      if (displayBox[2] && value === "2"){
          console.log("awesome");
            goalDisplay2.innerHTML =  Number.parseInt(goalDisplay2.innerHTML) + 1;
            display1.innerHTML = Number.parseInt(display1.innerHTML) + 1;
            display2.innerHTML = 0;
            alertWinner();
        }
      });
}



//
//
//   alertWinner = function(){
//     if (displayBox[2] && value === "0"){
//           alert("Player 1 Wins");
//             console.log("player 1 wins");
//         }
//    else if (displayBox[1] && value === "0"){
//           alert("Player 2 Wins");
//             console.log("player 2 wins");
//         }
//       console.log('win')
//   }
// }






// }
// var idNumber = Number.parseInt();
// //for loop to go around and add stones
// for(var i = idNumber; i <= idNumber + id.innerHTML; i++ ){
//   (i+1)%
// }







// // Determing if player1 or player2 - determine row to click on
// function pickThePlayer(){
//   display1.addEventListener('click', function(){
//         console.log("toprow");
//       })
//   display2.addEventListener('click', function(){
//             console.log("bottomrow");
//   })
// }
//
//

//
// // add event listener to all buttons
// display1.addEventListener('click', addDisplay1Values);
// display2.addEventListener('click', addDisplay2Values);



// //add values to proceeding Box: from display2 to goal2
// function addDisplay2Values(){
//   display2.addEventListener('click', function(){
//     currentValue = (this.innerHTML);
//       console.log(currentValue);
//    goalDisplay2.innerHTML = Number.parseInt(display1.innerHTML) + 1;
//         console.log(this.innerHTML);
//   display1.innerHTML = Number.parseInt(goalDisplay2.innerHTML) + 1;
//   })
// }











// function determinePlayer(el){
//   if(el.className === "box"){
//     if (counter % 2 === 0) {
//       el.className = "player2";
//         console.log("player 1 turn");
//           box2Button.addEventListener('click', function(){
//             console.log('clicked box 2')
//       })
//     }else{
//       el.className = "player1";
//         console.log("player 2 turn");
//           box1Button.addEventListener('click',function(){
//             console.log('clicked box 1');
//       })
//     }
//     console.log(el);
//
//     counter = counter + 1;
//   }
// }
//









//recognize value inside box

//increase value counter-clock wise by one based on value inside box
//but skip other players goal
