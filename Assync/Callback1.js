// function function1(callback){
//     setTimeout(function(){
//         console.log("function 1 completed")
//         callback()
//     },1000)
// }

// function function2(callback){
//     setTimeout(function(){
//         console.log("function 2 completed")
//         callback()
//     },2000)
// }


// function1 (function(){
//     console.log('function inside function 1')
//     function2 (function(){
//         console.log('function inside function 2')
//     })
//  })


// function countdown(number, callback) {
//     if (number > 0) {
//       console.log(number);
//       setTimeout(function () {
//         countdown(number - 1, callback);
//       }, 1000);
//     } else {
//       callback();
//     }
//   }
  
//   function displayMessage() {
//     console.log("Happy Independence Day");
//   }
  
//   countdown(10, displayMessage);
function countdown(number, callback) {
    if (number > 0) {
      document.getElementById('countdown').innerHTML = number;
      setTimeout(function() {
        countdown(number - 1, callback);
      }, 1000);
    } else {
      callback();
    }
  }
  
  function displayMessage() {
    document.getElementById('countdown').innerHTML = "Happy Independence Day";
  }
  
  countdown(10, displayMessage);