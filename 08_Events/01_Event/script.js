const container = document.querySelector(".container");
container.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(e.target.tagName);
  console.log(e.target.parentNode);
  if (e.target.tagName === "IMG") {
    const removeIt = e.target.parentNode;
    removeIt.remove();
  }
});
