document.getElementById('get-weather').addEventListener('click', () => {
    const city = document.getElementById('city').value;
    const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeather API key

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weather-info');
            if (data.cod === 200) {
                weatherInfo.innerHTML = `
                    <h3>${data.name}</h3>
                    <p>Temperature: ${data.main.temp} °C</p>
                    <p>Weather: ${data.weather[0].description}</p>
                `;
            } else {
                weatherInfo.innerHTML = '<p>City not found.</p>';
            }
        });
});
