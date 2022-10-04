let counter = 0;
let timerID;
const counterElem = document.querySelector('.counter');
const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const reset = document.querySelector('.reset');
start.onclick = function () {
  timerID = setInterval(function () {
    counter++;
    counterElem.innerHTML = counter;
  }, 1000)
}
stop.onclick = function () {
  clearInterval(timerID);
}
reset.onclick = function () {
  counter=0;
  clearInterval(timerID);
  counterElem.innerHTML=counter;
}