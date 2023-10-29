const randomColor = () => {
  let hex = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalId;
const startChangingColor = () => {
  function changeColor() {
    document.body.style.background = randomColor();
  }
  intervalId = setInterval(changeColor, 1000);
};

const stopChangingColor = () => {
  clearTimeout(intervalId);
  intervalId = null;
};

document.querySelector("#start").addEventListener("click", startChangingColor);
document.querySelector("#stop").addEventListener("click", stopChangingColor);
