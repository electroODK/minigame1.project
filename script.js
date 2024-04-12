let you = document.getElementById('you');
let oponent = document.getElementById('opo');
let winner = document.getElementById('win');
let num1 = Math.floor(Math.random() * 100);
let num2 = Math.floor(Math.random() * 100);
function fun() {
  if (num1 > num2) {
    winner.innerHTML = 'WINNER:YOU';
  } else if (num1 < num2) {
    winner.innerHTML = 'WINNER:OPONENT';
  } else if ((num1 = num2)) {
    winner.innerHTML = 'WINNER:DRAW';
  }
  you.innerHTML = num1;
  oponent.innerHTML = num2;
}
