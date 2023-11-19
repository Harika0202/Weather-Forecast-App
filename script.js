// Function to fetch weather data
function getWeather() {
    const apiKey = '10d6eac50d18fea6c49d9c445f561c84'; 
    const city = document.getElementById('cityInput').value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Handle current weather data
            const currentWeather = data.list[0];
            displayCurrentWeather(currentWeather);

            // Handle forecast data
            const forecastData = data.list.slice(1, 8); // Next 7 days
            displayForecast(forecastData);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

// Function to display current weather
function displayCurrentWeather(weatherData) {
    const currentWeatherElement = document.getElementById('currentWeather');
    currentWeatherElement.innerHTML = `
        <h2>Current Weather in ${weatherData.name}, ${weatherData.sys.country}</h2>
        <p>Temperature: ${weatherData.main.temp}°C</p>
        <p>Humidity: ${weatherData.main.humidity}%</p>
        <p>Weather Condition: ${weatherData.weather[0].description}</p>
        <p>Wind Speed: ${weatherData.wind.speed} m/s</p>
        <p>Date and Time: ${new Date(weatherData.dt * 1000).toLocaleString()}</p>
    `;
}

// Function to display forecast charts
function displayForecast(forecastData) {
    const chartContainer = document.getElementById('chartContainer');
    // Create and populate charts (e.g., using charting library like Chart.js)
}

// Fetch weather data when the page loads
getWeather();
