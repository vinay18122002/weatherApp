let mode_circel = document.querySelector(".circle_container");
let mode_container = document.querySelector(".dark_light_mode_container");
mode_container.addEventListener("click", () => {
  let left_value_of_circle = window.getComputedStyle(mode_circel).left;

  if (left_value_of_circle == "5px") {
    mode_circel.style.left = "43px";
    mode_container.style.backgroundColor = "rgb(68, 68, 68)";
    toggleColors();
  } else {
    mode_circel.style.left = "5px";
    mode_container.style.backgroundColor = "yellowgreen";
    toggleColors();
  }
});

function toggleColors() {
  let outer_container = document.getElementsByClassName("outer_container")[0];
  let left_container = document.querySelector(".left_container");
  let websiteName = document.querySelector(".website_name");
  let ptags = document.querySelectorAll("p");
  let websiteCloud_main_logo = document.querySelector(
    ".website_name_under_logo"
  );
  let settingsLogo = document.querySelector(".settings_logo");
  let searchCitiesLogo = document.querySelector(".cities_menu_logo");

  let middle_container = document.querySelector(".middle_container");
  let middle_top_container = document.querySelector(".middle_top_container");
  let middle_middle_container = document.querySelector(
    ".middle_middle_container"
  );
  let middle_bottom_container = document.querySelector(
    ".middle_bottom_container"
  );
  //  both the right containers (one for tablet and one for pc view)
  let right_inner_containers = document.querySelectorAll(
    ".right_inner_container"
  );

  // searchg cities things
  let seachCitiesListContainer = document.querySelector(".cities_search_list");
  let searchButton = document.querySelector(".search_button");

  let seeWeatherButton = document.querySelectorAll(".see_weather");

  // air condition things
  let humidityLogo = document.querySelector(".humidity_logo");
  let windSpeedLogo = document.querySelector(".wind_speed_logo");
  let maxTemperatureLogo = document.querySelector(".max_temperature_logo");

  // all the weather logos images
  let daysWeatherLogo = document.querySelectorAll(".days_weather_logo");
  let hoursWeatherLogo = document.querySelectorAll(
    ".middle_middle_weather_logo"
  );

  if (left_container.classList.contains("dark")) {
    //remove the dark class so that flow can enter else block next time
    left_container.classList.remove("dark");

    // universal changes
    ptags.forEach((p) => {
      p.style.color = "#3E3E3E";
    });
    document.body.style.backgroundColor = "#C7C7C7";
    outer_container.style.backgroundColor = "#C7C7C7";

    // change of left container
    left_container.style.backgroundColor = "#F4F4F4";
    websiteName.style.color = "#3E3E3E";
    websiteCloud_main_logo.src = "./cloudForLightModeMainLogo.png";
    searchCitiesLogo.src = "./menuLogoForLightMode.png";
    settingsLogo.src = "./settingsLogoForLightMode.png";

    // chages on middle container
    middle_container.style.backgroundColor = "#C7C7C7";
    middle_middle_container.style.backgroundColor = "#F4F4F4";
    middle_bottom_container.style.backgroundColor = "#F4F4F4";
    middle_top_container.style.backgroundColor = "#F4F4F4";

    // changes to the right container
    right_inner_containers.forEach((container) => {
      container.style.backgroundColor = "#F4F4F4";
    });

    // changes to search cities container
    seachCitiesListContainer.style.backgroundColor = "#C7C7C7";
    searchButton.style.color = "rgb(62, 62, 62)";
    searchButton.style.border = "1px solid rgb(62, 62, 62)";

    if (seeWeatherButton) {
      seeWeatherButton.forEach((btn) => {
        btn.style.color = "rgb(62, 62, 62)";
        btn.style.border = "1px solid rgb(62, 62, 62)";
      });
    }

    // changes to air condition things
    humidityLogo.src = "./lightMode/humidity.png";
    windSpeedLogo.src = "./lightMode/windSpeed.png";
    maxTemperatureLogo.src = "./lightMode/maxTemperature.png";

    // changes to all weather logos
    hoursWeatherLogo.forEach((img) => {
      let prevImgSrc = img.src;

      // eg-: ./darkMode/windSpeed.png
      let newImgSrc = prevImgSrc.replace("darkMode", "lightMode");

      img.src = newImgSrc;
    });

    daysWeatherLogo.forEach((img) => {
      let prevImgSrc = img.src;

      // eg-: ./darkMode/windSpeed.png
      let newImgSrc = prevImgSrc.replace("darkMode", "lightMode");

      img.src = newImgSrc;
    });
  } else {
    left_container.classList.add("dark");

    // universal changes
    ptags.forEach((p) => {
      p.style.color = "#f2f2f2";
    });
    document.body.style.backgroundColor = "#0a121f";
    outer_container.style.backgroundColor = "#0a121f";

    // changes on left container
    left_container.style.backgroundColor = "#212b3d";
    websiteName.style.color = "#f2f2f2";
    websiteCloud_main_logo.src = "./clouds.png";
    searchCitiesLogo.src = "./citiesMenu.png";
    settingsLogo.src = "./settingsLogo.png";

    // chages on middle container
    middle_container.style.backgroundColor = "#0a121f";
    middle_top_container.style.backgroundColor = "#0a121f";
    middle_middle_container.style.backgroundColor = "#212b3d";
    middle_bottom_container.style.backgroundColor = "#212b3d";

    // changes to the right container
    right_inner_containers.forEach((container) => {
      container.style.backgroundColor = "#212b3d";
    });

    // changes to the search cities list

    seachCitiesListContainer.style.backgroundColor = "#0a121f";
    searchButton.style.color = "whitesmoke";
    searchButton.style.border = "1px solid whitesmoke";

    if (seeWeatherButton) {
      seeWeatherButton.forEach((btn) => {
        btn.style.color = "whitesmoke";
        btn.style.border = "1px solid whitesmoke";
      });
    }

    //air conditions things
    humidityLogo.src = "./darkMode/humidity.png";
    windSpeedLogo.src = "./darkMode/windSpeed.png";
    maxTemperatureLogo.src = "./darkMode/maxTemperature.png";

    // changes to all weather logos
    hoursWeatherLogo.forEach((img) => {
      let prevImgSrc = img.src;
      // eg-: ./darkMode/windSpeed.png
      let newImgSrc = prevImgSrc.replace("lightMode", "darkMode");
      img.src = newImgSrc;
    });

    daysWeatherLogo.forEach((img) => {
      let prevImgSrc = img.src;
      // eg-: ./lightMode/windSpeed.png
      let newImgSrc = prevImgSrc.replace("lightMode", "darkMode");
      img.src = newImgSrc;
    });
  }
}
