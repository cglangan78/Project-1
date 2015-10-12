//Global Variables//
var player1;
var player2;
var counter = 0;
var box = document.getElementsByClassName('box');
var box1Button = document.querySelector('#box1');
var box2Button = document.querySelector('#box2')




// //Determing if player1 or player2
// function determinePlayer(){
//   el.addEventListener('click', function(){
//     console.log('counter', counter);
//   if (counter % 2 === 0) {
// }


//add eventListener to all boxes
box1Button.addEventListener('click', function(){
    console.log('clicked box 1')
});

box2Button.addEventListener('click', function(){
    console.log('clicked box 2')
});



//for loop to click on each box
for(i=0; i<box.length; i++) {
  box[i].addEventListener('click',function(){
    console.log(counter);
    box.value += counter++;
  })
}

// // //display value function
// function increaseValue(){
//   box.value = box.innerHTML;
// }
