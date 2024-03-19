let getNumber = document.getElementById('input');
let display = document.getElementById('result');

function checkAnswer() {
    
    let rightNumber = 5;
  
if(getNumber.value == rightNumber) {
    alert('Correct!');
    display.innerHTML += (" " + rightNumber) ;
    console.log(getNumber.value);
  }else{
	alert('Wrong!');
  display.innerHTML += getNumber.value;
}
}
