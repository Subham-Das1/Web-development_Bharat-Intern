function getWeather() {
  const city = document.getElementById("city").value;
  const apiKey = "7f64b171f97a16b2a3ba7a4cd7aa0c69";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
          const weatherInfo = document.getElementById("weather-info");
          weatherInfo.classList.remove("error");
          if (data.cod === 200) {
              const temperature = data.main.temp;
              const Humidity = data.main.humidity;

              const description = data.weather[0].description;
              weatherInfo.textContent = `Temperature: ${temperature}°C, Description: ${description},Humidity:${Humidity}`;
          } 
          else {
              weatherInfo.textContent = `Wrong State name. Please try again.`;
              weatherInfo.classList.add("error");
          }
      })
      .catch(error => {
          console.error("Error fetching data: ", error);
          const weatherInfo = document.getElementById("weather-info");
          weatherInfo.textContent = `Error fetching data. Please try again later.`;
          weatherInfo.classList.add("error");
      });
}
