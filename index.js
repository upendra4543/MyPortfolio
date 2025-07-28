///dropdown section
const hideBtn = document.querySelectorAll(".drop-down-container");
const hide = document.querySelectorAll(".drop-down");

function hidden(e) {
    e.stopPropagation(); // prevent bubbling so it doesn't close immediately
    const currentDisplay = window.getComputedStyle(hide[0]).display;
    hide[0].style.display = (currentDisplay === "none") ? "block" : "none";
  }

hideBtn[0].addEventListener("click", hidden);

 document.addEventListener("click", () => {
    hide[0].style.display = "none";
 })
 //////end