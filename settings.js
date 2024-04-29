let settings_container = document.querySelector(".website_settings_container");
let settings_logo = document.querySelector(".settings_logo");
settings_container.addEventListener("click", () => {
  let dark_light_mode_container = document.querySelector(
    ".dark_light_mode_container"
  );
  let display_property = window.getComputedStyle(
    dark_light_mode_container
  ).display;
  if (display_property == "none") {
    dark_light_mode_container.style.display = "flex";
    settings_logo.style.transform = "rotate(45deg)";
  } else {
    dark_light_mode_container.style.display = "none";
    settings_logo.style.transform = "rotate(-45deg)";
  }
});
