const button = document.querySelectorAll(".button");
const body = document.querySelector("body");

button.forEach(function (button) {
  button.addEventListener("click", (e) => {
    // console.log(e);
    // console.log(e.target);
    if (e.target.id === "Gray") {
      body.style.background = e.target.id; // this is best practice
    }
    if (e.target.id === "Yellow") {
      body.style.background = "Yellow"; // this is hard code
    }
    if (e.target.id === "White") {
      body.style.background = "White";
    }
    if (e.target.id === "Blue") {
      body.style.background = "Blue";
    }
  });
});
