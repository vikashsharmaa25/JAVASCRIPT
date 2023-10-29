const time = document.getElementById("time");
let intervalId = null;

function updateTime() {
  const date = new Date();
  time.innerText = date.toLocaleTimeString();
}

function startTimer() {
  updateTime();
  intervalId = setInterval(updateTime, 1000);
}

function stopTimer() {
  clearInterval(intervalId);
}

document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("stop").addEventListener("click", stopTimer);
