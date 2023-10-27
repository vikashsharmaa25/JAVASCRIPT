const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const height = document.querySelector("#height").value;
  const weight = document.querySelector("#weight").value;
  const result = document.querySelector("#result");

  // condition
  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = `please enter a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = `please enter a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 1000)).toFixed(2);
    result.innerHTML = `<span>${bmi}</span>`;
    result.style.background = "red";
    result.style.padding = "20px";
    result.style.fontSize = "30px";
    const less = document.querySelector("#less");
    const between = document.querySelector("#between");
    const over = document.querySelector("#over");

    if (bmi < 19) {
      less.innerHTML = `<span>${bmi}</span>`;
      less.style.background = "red";
    } else if (bmi > 18 && bmi < 25) {
      between.innerHTML = `<span>${bmi}</span>`;
      between.style.background = "red";
    } else {
      over.innerHTML = `<span>${bmi}</span>`;
      over.style.background = "red";
    }
  }
});
