const copyText = document.querySelector(".copyText");
const button = document.querySelector("button");
const pasteText = document.querySelector(".pasteText");
const tooltip = document.querySelector(".tooltip");

button.addEventListener("click", () => {
  pasteText.value = "";
  if (navigator.clipboard.writeText(copyText.value)) {
    pasteText.focus();
    tooltip.classList.add("show");
    setTimeout(function () {
      tooltip.classList.remove("show");
    }, 1200);
  } else {
    alert("مشکلی وجود دارد");
  }
});
