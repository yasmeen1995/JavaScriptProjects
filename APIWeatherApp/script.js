
// API_KEY for maps api
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

/**
 * Retrieve weather data from openweathermap
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */
getWeatherData = (city) => {
//   const URL = "https://open-weather13.p.rapidapi.com";
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  //HINT: Use template literals to create a url with input and an API key
  const FULL_URL = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`;

  //CODE GOES HERE
  const weatherPromise = fetch(FULL_URL);
  return weatherPromise.then((response) => {
    return response.json()
  })
}

/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */
searchCity = () => {
  const city = document.getElementById('city-input').value;
  // CODE GOES HERE
  getWeatherData(city)
  .then((data) => showWeatherData(data))
  .catch((err) => {
    console.log(err)
    console.log("something went wrong")
  })
}

/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
showWeatherData = (weatherData) => {
  //CODE GOES HERE
  document.getElementById("city-name").innerText = weatherData.name
  document.getElementById("weather-type").innerText = weatherData.weather[0].main
  document.getElementById("temp").innerText = weatherData.main.temp
  document.getElementById("min-temp").innerText = weatherData.main.temp_min
  document.getElementById("max-temp").innerText = weatherData.main.temp_max
  document.getElementById("weather-output").classList.add('visible');
}

// const url = 'https://open-weather13.p.rapidapi.com/city';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '35d903df32msh17688d895fe7393p123c7cjsn7863f1df14a4',
// 		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
// 	}
// };

// fetch(url, options)
// .then(response => response.json())
// .then(data => console.log(data.weather[0].main))
// .catch(err => console.log(err))
