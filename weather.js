function updateMainWindowOfWeather(
  cityName,
  mainTemperature,
  mainWeatherStatus
) {
  let mainCityNamePtag = document.querySelector(".main_city_name");
  let mainTemperaturePtag = document.querySelector(".main_temperature");
  mainCityNamePtag.innerText = cityName;
  let tagLinePTag = document.querySelector(".main_city_below_desc");

  let mainWeatherLogo = document.querySelector(".main_weather_logo");

  // update logo as per main weather status
  if (mainWeatherStatus == "Clouds") {
    mainWeatherLogo.src = "./cloudBig.png";
  } else if (mainWeatherStatus == "Rain") {
    mainWeatherLogo.src = "./RainBig.png";
  } else if (mainWeatherStatus == "Clear") {
    mainWeatherLogo.src = "./sunBig.png";
  }

  // update tagline of the weather report
  let tagline = "";
  if (mainTemperature <= 25) {
    tagline = "Current Day : City feels cool";
  } else if (mainTemperature > 25 && mainTemperature < 35) {
    tagline = "Current Day : City feels moderate";
  } else {
    tagline = "Current Day : City feels Hot";
  }

  tagLinePTag.innerText = tagline;
  mainTemperaturePtag.innerText = `${mainTemperature}°C`;

  // updation of main windowImage
}

function updateAtmosphereConditionParameters(
  humidity,
  windSpeed,
  maxTemperature
) {
  // getting ptag of rainchances althoug i am changin inner text to humidity value (as i did not get this in free api) see line number 96 - 100 in index.html file

  let humidityPercentagePtag = document.querySelector(
    ".rain_chance_number_p_tag"
  );

  let windSpeedNumberPtag = document.querySelector(".wind_speed_number_p_tag");

  //  i have changes uv index to max_temp as i did not get this in free api

  let maxTemperaturePtag = document.querySelector(".uv_index_number_p_tag ");

  humidityPercentagePtag.innerText = `${humidity}%`;
  windSpeedNumberPtag.innerText = `${windSpeed}m/s`;
  maxTemperaturePtag.innerText = `${maxTemperature}°C`;
}

function getDayOfWeek(dateString) {
  // Create a Date object from the provided date string
  const date = new Date(dateString);

  // Array of day names
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // Get the day of the week as a number (0 for Sunday, 1 for Monday, etc.)
  const dayIndex = date.getDay();

  // Return the corresponding day name
  return daysOfWeek[dayIndex];
}

function updateHourlyForeCast(hourlyWeatherArray) {
  let hourPtag = document.querySelectorAll(
    ".middle_middle_container_time_p_tag "
  );
  let temperaturePtag = document.querySelectorAll(
    ".middle_middle_weather_forecast_p_tag"
  );
  let hourlyWeatherLogo = document.querySelectorAll(
    ".middle_middle_weather_logo"
  );
  let left_container = document.querySelector(".left_container");
  let isDarkMode = false;
  // let dict = {
  //   dt_time: "",
  //   temp: 0,
  //   mainWeather: "",
  // };
  let timeListForCheck = [
    "7:00 PM",
    "8:00 PM",
    "9:00 PM",
    "10:00 PM",
    "11:00 PM",
    "12:00 AM",
    "1:00 AM",
    "2:00 AM",
    "3:00 AM",
    "4:00 AM",
    "5:00 AM",
    "6:00 AM",
  ];

  console.log(timeListForCheck);

  for (let i = 0; i < hourlyWeatherArray.length; i++) {
    hourPtag[i].innerText = hourlyWeatherArray[i].dt_time;
    temperaturePtag[i].innerText = `${hourlyWeatherArray[i].temp}°C`;
    let mainWeatherStatus = hourlyWeatherArray[i].mainWeather;
    if (left_container.classList.contains("dark")) {
      isDarkMode = true;
    }
    if (isDarkMode == true) {
      if (mainWeatherStatus == "Clouds") {
        hourlyWeatherLogo[i].src = "./darkMode/clouds.png";
      } else if (mainWeatherStatus == "Snow") {
        hourlyWeatherLogo[i].src = "./darkMode/snow.png";
      } else if (mainWeatherStatus == "Rain") {
        hourlyWeatherLogo[i].src = "./darkMode/rain.png";
      } else if (mainWeatherStatus == "Clear") {
        if (timeListForCheck.includes(hourPtag[i].innerText)) {
          console.log("reached");
          hourlyWeatherLogo[i].src = "./darkMode/clearNight.png";
        } else {
          hourlyWeatherLogo[i].src = "./darkMode/clear.png";
        }
      }
    } else {
      if (mainWeatherStatus == "Clouds") {
        hourlyWeatherLogo[i].src = "./lightMode/clouds.png";
      } else if (mainWeatherStatus == "Snow") {
        hourlyWeatherLogo[i].src = "./lightMode/snow.png";
      } else if (mainWeatherStatus == "Rain") {
        hourlyWeatherLogo[i].src = "./lightMode/rain.png";
      } else if (mainWeatherStatus == "Clear") {
        if (timeListForCheck.includes(hourPtag[i].innerText)) {
          console.log("reached");
          hourlyWeatherLogo[i].src = "./lightMode/clearNight.png";
        } else {
          hourlyWeatherLogo[i].src = "./lightMode/clear.png";
        }
      }
    }

    // if (mainWeatherStatus == "Clouds") {
    //   hourlyWeatherLogo.src = "./cloudBig.png";
    // } else if (mainWeatherStatus == "Rain") {
    //   hourlyWeatherLogo.src = "./RainBig.png";
    // } else if (mainWeatherStatus == "Clear") {
    //   hourlyWeatherLogo.src = "./sunBig.png";
    // }
  }
}

function updateFiveDayForecast(fiveDayForecastArray) {
  let dayNamePtag = document.querySelectorAll(".days_name");
  let datePTag = document.querySelectorAll(".date_p_tag");
  let mainWeatherPtag = document.querySelectorAll(".weather_report_p_tag");
  let daysWeatherLogo = document.querySelectorAll(".days_weather_logo");
  let left_container = document.querySelector(".left_container");
  let isDarkMode = false;

  // this for loop is only updating the right container which appears at bottom in mobile and tablet view.
  for (let i = 0; i < fiveDayForecastArray.length; i++) {
    // let first_day = {
    //   date: "",
    //   temp: 0,
    //   mainWeather: "",
    // };
    let dayname = getDayOfWeek(fiveDayForecastArray[i].date);
    dayNamePtag[i].innerText = dayname;

    newDate = fiveDayForecastArray[i].date.slice(5, 10);
    newDate = newDate.replace("-", "/");
    datePTag[i].innerText = newDate;

    let mainWeahterText = fiveDayForecastArray[i].mainWeather;
    mainWeatherPtag[i].innerText = mainWeahterText;

    // update the forecast weather logo based on the mode(light/dark) currently on

    if (left_container.classList.contains("dark")) {
      isDarkMode = true;
    }

    if (isDarkMode == true) {
      if (mainWeahterText == "Clouds") {
        daysWeatherLogo[i].src = "./darkMode/clouds.png";
      } else if (mainWeahterText == "Snow") {
        daysWeatherLogo[i].src = "./darkMode/snow.png";
      } else if (mainWeahterText == "Rain") {
        daysWeatherLogo[i].src = "./darkMode/rain.png";
      } else if (mainWeahterText == "Clear") {
        daysWeatherLogo[i].src = "./darkMode/clear.png";
      }
    } else {
      if (mainWeahterText == "Clouds") {
        daysWeatherLogo[i].src = "./lightMode/clouds.png";
      } else if (mainWeahterText == "Snow") {
        daysWeatherLogo[i].src = "./lightMode/snow.png";
      } else if (mainWeahterText == "Rain") {
        daysWeatherLogo[i].src = "./lightMode/rain.png";
      } else if (mainWeahterText == "Clear") {
        daysWeatherLogo[i].src = "./lightMode/clear.png";
      }
    }
  }

  // updation of the right container that appears in pc/laptop view

  for (let i = 0; i < 5; i++) {
    let dayname = getDayOfWeek(fiveDayForecastArray[i].date);
    dayNamePtag[i + 5].innerText = dayname;

    newDate = fiveDayForecastArray[i].date.slice(5, 10);
    newDate = newDate.replace("-", "/");
    datePTag[i + 5].innerText = newDate;

    let mainWeahterText = fiveDayForecastArray[i].mainWeather;
    mainWeatherPtag[i + 5].innerText = mainWeahterText;

    let indextofill = i + 5;
    if (left_container.classList.contains("dark")) {
      isDarkMode = true;
    }
    if (isDarkMode == true) {
      if (mainWeahterText == "Clouds") {
        daysWeatherLogo[indextofill].src = "./darkMode/clouds.png";
      } else if (mainWeahterText == "Snow") {
        daysWeatherLogo[indextofill].src = "./darkMode/snow.png";
      } else if (mainWeahterText == "Rain") {
        daysWeatherLogo[indextofill].src = "./darkMode/rain.png";
      } else if (mainWeahterText == "Clear") {
        daysWeatherLogo[indextofill].src = "./darkMode/clear.png";
      }
    } else {
      if (mainWeahterText == "Clouds") {
        daysWeatherLogo[indextofill].src = "./lightMode/clouds.png";
      } else if (mainWeahterText == "Snow") {
        daysWeatherLogo[indextofill].src = "./lightMode/snow.png";
      } else if (mainWeahterText == "Rain") {
        daysWeatherLogo[indextofill].src = "./lightMode/rain.png";
      } else if (mainWeahterText == "Clear") {
        daysWeatherLogo[indextofill].src = "./lightMode/clear.png";
      }
    }
  }
}

function kelvinToCelsius(kelvin) {
  // Kelvin to Celsius formula: C = K - 273.15
  var celsius = kelvin - 273.15;
  return celsius.toFixed(2);
}

function fetchCurrentWeatherOfCity(lon, lat) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=13b5a1dd32e6c7eb89479e52a3af6120`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      // this holds what's the main status of weather eg-: clouds,sunny,rain etc.
      let main = data.weather[0].main;
      let nameOfCity = data.name;
      // wind speed is in meter/sec
      let windSpeed = data.wind.speed;

      // temperature
      let temperature = data.main.temp;
      temperature = kelvinToCelsius(temperature);

      // humidity
      let humidity = data.main.humidity;

      // max temperature
      let max_temperature = data.main.temp_max;
      max_temperature = kelvinToCelsius(max_temperature);

      updateMainWindowOfWeather(nameOfCity, temperature, main);
      updateAtmosphereConditionParameters(humidity, windSpeed, max_temperature);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
function fillTheCityList(cityname, lon, lat) {
  let citiesListContainer = document.querySelector(".list_of_cities_container");
  // Create a div element for the city box
  const cityBox = document.createElement("div");
  cityBox.classList.add("city_box");

  // Create a paragraph element for the city name
  const cityName = document.createElement("p");
  cityName.classList.add("box_city_name");
  cityName.textContent = cityname; // Set the city name text

  // Create a button element for "See weather"
  const seeWeatherButton = document.createElement("button");
  seeWeatherButton.classList.add("see_weather");
  seeWeatherButton.textContent = "See weather"; // Set the button text

  // get a parent elements background color to know wheather its dark mode or light mode accordingly change elements stylesheet
  let left_container = document.querySelector(".left_container");
  if (left_container.classList.contains("dark")) {
    seeWeatherButton.style.color = "whitesmoke";
    seeWeatherButton.style.border = "1px solid whitesmoke";
    cityName.style.color = "whitesmoke";
  } else {
    seeWeatherButton.style.color = "rgb(62, 62, 62)";
    seeWeatherButton.style.border = "1px solid rgb(62, 62, 62)";
    cityName.style.color = "rgb(62, 62, 62)";
  }

  // Append the city name and button to the city box
  cityBox.appendChild(cityName);
  cityBox.appendChild(seeWeatherButton);

  // Append the city box to a parent element (e.g.,citiesListContainer)
  citiesListContainer.appendChild(cityBox);

  // Make loading container disaaper
  let loading_conainer = document.querySelector(
    ".loading_container_of_city_list"
  );
  loading_conainer.style.display = "none";

  //  add event listener to the seeWeatherbutton
  seeWeatherButton.addEventListener("click", () => {
    // bigger loading container make it display
    let biggerLoadingContainer = document.querySelector(
      ".big_loading_container_of_city_list"
    );
    biggerLoadingContainer.style.display = "block";
    fetchCurrentWeatherOfCity(lon, lat);

    // make bigger loading container disaapear at the end of forecast weather function
    forecastWeather(lon, lat);

    let crossIcon = document.querySelector(".crossIcon");
    crossIcon.click();
  });
}

function fetchCityLonAndLat(city) {
  return new Promise((resolve, reject) => {
    fetch("https://api.api-ninjas.com/v1/geocoding?city=" + city, {
      method: "GET",
      headers: {
        "X-Api-Key": "gqiboTUjv5kTXYCXDFYfBw==U4dr6JaF3mzsjqA2",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((result) => {
        let cityNotFoundPtag = document.querySelector(".city_not_found_p_tag");

        if (result.length === 0) {
          cityNotFoundPtag.style.display = "block";
          let loading_conainer = document.querySelector(
            ".loading_container_of_city_list"
          );
          loading_conainer.style.display = "none";
          reject("City not found");
        } else {
          let longitude = result[0].longitude;
          let latitude = result[0].latitude;
          const coordinates = { lon: longitude, lat: latitude };
          cityNotFoundPtag.style.display = "none";
          fillTheCityList(city, longitude, latitude);
          resolve(coordinates);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        reject(error);
      });
  });
}

function forecastWeather(lon, lat) {
  fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=13b5a1dd32e6c7eb89479e52a3af6120`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      // Work with the JSON data here

      // temperature of 5 day forecast
      let five_day_forecast = [];

      // array to store temperature at different time stamp of the current dat
      let temp_time_slot = [];
      for (let i = 1; i <= 6; i++) {
        let dict = {
          dt_time: "",
          temp: 0,
          mainWeather: "",
        };
        slot_time = data.list[i].dt_txt;
        // extracting just time from the whole date and time string
        slot_time = slot_time.slice(11, -1);
        slot_time = formatTime(slot_time);
        dict.dt_time = slot_time;

        //extracting main temperature of that time slot
        dict.temp = kelvinToCelsius(data.list[i].main.temp);

        // extracting mainWeather of that time slot
        dict.mainWeather = data.list[i].weather[0].main;
        temp_time_slot.push(dict);
      }

      // pushing manually the forecasted data
      let first_day = {
        date: "",
        temp: 0,
        mainWeather: "",
      };

      // extract date out of date and time string;
      let date = data.list[1].dt_txt;
      date = date.slice(0, 10);
      first_day.date = date;

      // extract temperature for the above date
      first_day.temp = kelvinToCelsius(data.list[1].main.temp);

      // extracting mainweather at that day
      first_day.mainWeather = data.list[1].weather[0].main;

      let second_day = {
        date: data.list[9].dt_txt.slice(0, 10),
        temp: kelvinToCelsius(data.list[9].main.temp),
        mainWeather: data.list[9].weather[0].main,
      };

      let third_day = {
        date: data.list[16].dt_txt.slice(0, 10),
        temp: kelvinToCelsius(data.list[16].main.temp),
        mainWeather: data.list[16].weather[0].main,
      };

      let fourth_day = {
        date: data.list[24].dt_txt.slice(0, 10),
        temp: kelvinToCelsius(data.list[24].main.temp),
        mainWeather: data.list[24].weather[0].main,
      };

      let fifth_day = {
        date: data.list[32].dt_txt.slice(0, 10),
        temp: kelvinToCelsius(data.list[32].main.temp),
        mainWeather: data.list[32].weather[0].main,
      };
      five_day_forecast.push(first_day);
      five_day_forecast.push(second_day);
      five_day_forecast.push(third_day);
      five_day_forecast.push(fourth_day);
      five_day_forecast.push(fifth_day);

      updateHourlyForeCast(temp_time_slot);
      updateFiveDayForecast(five_day_forecast);

      // make bigger_loading_container dissapear
      let biggerLoadingContainer = document.querySelector(
        ".big_loading_container_of_city_list"
      );
      biggerLoadingContainer.style.display = "none";
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
}
function formatTime(timeString) {
  // Split the time string into hours and minutes
  const [hours, minutes] = timeString.split(":");

  // Convert hours to 12-hour format
  let convertedHours = parseInt(hours, 10);
  let amPm;

  if (convertedHours === 0) {
    convertedHours = 12; // Handle midnight as 12 AM
    amPm = "AM";
  } else if (convertedHours < 12) {
    amPm = "AM"; // Before noon
  } else {
    if (convertedHours > 12) {
      convertedHours -= 12; // Convert hours past noon to PM
    }
    amPm = "PM"; // After noon
  }

  // Format the final time string (excluding seconds)
  const formattedTime = `${convertedHours}:${minutes.padStart(2, "0")}`;

  // Return the formatted time with AM/PM
  return `${formattedTime} ${amPm}`;
}

//  website should display default delhi as its weather report
let city = "Delhi";
fetchCityLonAndLat(city)
  .then((coordinates) => {
    fetchCurrentWeatherOfCity(coordinates.lon, coordinates.lat);
    forecastWeather(coordinates.lon, coordinates.lat);
    // biggerLoadingContainer.style.display = "none";
  })
  .catch((error) => {
    console.error("Error fetching coordinates:", error);
  });

// all the search city related work
let search_cities_container = document.querySelector(
  ".search_cities_container"
);

let cities_search_list_outer_container = document.querySelector(
  ".cities_search_list_outer_container"
);

let crossIcon = document.querySelector(".crossIcon");

search_cities_container.addEventListener("click", () => {
  cities_search_list_outer_container.style.display = "flex";
});

crossIcon.addEventListener("click", () => {
  cities_search_list_outer_container.style.display = "none";
});

//  getting the search icon to search the input field value
let cityInputField = document.querySelector(".city_input");

// getting loading container
let loading_conainer = document.querySelector(
  ".loading_container_of_city_list"
);

let searchBtn = document.querySelector(".search_button");
searchBtn.addEventListener("click", () => {
  let city_value = cityInputField.value;
  cityInputField.value = "";
  if (city_value.length < 1) {
    window.alert("please input a valid city name");
  } else {
    loading_conainer.style.display = "block";
    fetchCityLonAndLat(city_value);
  }
});
