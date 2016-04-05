// Grab elements
var input1 = document.querySelector('#value-one');
var input2 = document.querySelector('#value-two');
var button = document.querySelector('#calculate-button');
// var answer = document.querySelector('#answer');
// query the appropiate section in html
// must use the # to connect to the string to the id in html
// strings can only start with letters, numbers, _, or $

// console.log(input1)
// console.log(input2)
// console.log(button)
// console.log(answer)


// variable Declerations
document.getElementById("calculate-button").addEventListener("click", function(eventClick){

  // remove default reset
  eventClick.preventDefault();

  input1 = input1.value;
  input2 = input2.value;
  // Why didn't the below var work?
  // var value1 = input1.value;
  // var value2 = input2.value;

  // convert string into number
  answer = Number(input1) + Number(input2);
  // Number(input1)
  // Number(input2)
  // changeContent('answer');


  // get answer
  document.querySelector('#answer').textContent = answer;
});

// these are notes from class that mess me up when I try to apply them...
// // var answer = input1 + " " + input2;
// // var answer = input1 + input2;
//
// // calculat answer
// function answer (input1, input2){
//   answer += input1 + "(input2)";
// }
