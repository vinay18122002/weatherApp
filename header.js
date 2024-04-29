let burger = document.getElementsByClassName("burger")[0];
burger.addEventListener("click", () => {
  let left_container = document.getElementsByClassName("left_container")[0];
  let computedWidth = window.getComputedStyle(left_container).width;

  if (computedWidth === "0px") {
    left_container.style.width = "95px";
  } else {
    left_container.style.width = "0px";
  }
});
