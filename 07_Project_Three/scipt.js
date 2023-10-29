const time = document.getElementById("time");
setInterval(function () {
  let date = new Date();
  time.innerHTML = `<span>${date.toLocaleTimeString()}</span>`;
}, 1000);
