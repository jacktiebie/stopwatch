var start = document.getElementById("button__start");
var clear = document.getElementById("button__clear");
var screen = document.getElementById("stopwatch__screen");

var sec = 0;
var min = 0;
var hr = 0;
let x;

start.addEventListener("click", myFunction);
/*check if interval is running if it is clearinterval if not start interval*/
function myFunction() {
  if (!x) {
    x = setInterval(seconds, 1000);
  } else {
    clearInterval(x);
    x = undefined
  }
}
/*adding 1 second each 1000 miliseconds*/
function seconds() {
  sec = sec + 1;
  screen.innerHTML = hr + ":" + min + ":" + sec;
/*seconds to minutes and minutes to hours*/
  if (sec == 60) {
    sec = 0;
    min = min + 1;
  } else if (min == 60) {
    min = 0;
    hr = hr + 1;
  }
}

clear.addEventListener("click", clearFunction);
/*clear the running interval and remove all the seconds, minutes and hours*/
function clearFunction() {
  clearInterval(x);
  x = undefined
  sec = 0;
  min = 0;
  hr = 0;
  screen.innerHTML = hr + ":" + min + ":" + sec;
}

