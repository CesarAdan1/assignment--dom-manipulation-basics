document
.querySelector("#inject-html button")
.addEventListener('click',function(){
  // TASK #1
  var answerBoxEl = document.querySelector('#inject-html .answer-box')
  answerBoxEl.innerHTML = "<h2>Here is some text for you!!</h2>"

})

document.querySelector("#double button").addEventListener('click',function(){
  // TASK #2
  var answerPTagWithValue = document.querySelector('#compoundInvestment');
  // var content = parseInt(answerPTagWithValue.textContent);
  // answerPTagWithValue.textContent = content*2;
  answerPTagWithValue.innerHTML = answerPTagWithValue.textContent *2;
})

document.querySelector("#blow-up button").addEventListener('click',function(){
  // TASK #3
  var circle = document.querySelector('.circle-red');
   var cirAlto = circle.offsetHeight;
   var cirLargo = circle.offsetWidth;

   cirAlto *= 2;
   circle.style.height = cirAlto + "px";

   cirLargo *= 2;
   circle.style.width = cirLargo + "px"

   if(circle.offsetHeight > 320){
     circle.style.width = 40+"px"
     circle.style.height = 40 +"px"
 }
})

document.querySelector("#remove button").addEventListener('click',function(){
  // TASK #4

var list = document.querySelectorAll('#user-list li');
var listParent = document.querySelector('#user-list');
// var listArray = [...list];

list.forEach(function(listItem){
  if(listItem.className === 'inactive'){
    listParent.removeChild(listItem);
  }
})
})


document.querySelector("#reverse-squares button").addEventListener('click',function(){
  // TASK #5
var list = document.querySelectorAll('#squares-box span');
var listPadre = document.querySelector('#squares-box')
var arrayListDos = [...list];
var arrayReverse = arrayListDos.reverse();

arrayReverse.forEach(function(item){
  listPadre.appendChild(item);
})
})

document.querySelector("#pig-latin button").addEventListener('click',function(){
  // TASK #6
var patito = document.querySelectorAll('#tasks li');
var buzz = document.querySelector('#tasks');


patito.forEach(function(pollitos){
  var nuggets = pollitos.textContent;

  nuggets = nuggets.split("").reverse().join("");

  pollitos.textContent = nuggets;
  buzz.appendChild(pollitos);
})

})

document.querySelector("#cycle-image button").addEventListener('click',function(){
   //TASK #7

  var imagen = document.querySelector('#city-img');
  console.log(imagen)
  var number = imagen.src;
  console.log(number)
  var target = number[number.length-5];
  console.log(target)

  var intNumber = target*1;
  intNumber++;
  console.log(intNumber)

 imagen.setAttribute('src', './images/city-photo-' + intNumber +'.jpg')


})
