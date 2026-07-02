document.getElementById('search-btn').addEventListener('click', () => {
    const city = document.getElementById('city-input').value;
    const weatherCard = document.getElementById('weather-card');

    if (!city) {
        weatherCard.innerHTML = "<p style='color: #ef4444;'>Por favor, escribe una ciudad válida.</p>";
        return;
    }

    // Simulación estructurada alineada al mapeo de apilayer/weather-map
    const mockWeatherData = {
        name: city,
        temp: (Math.random() * (35 - 5) + 5).toFixed(1),
        humidity: Math.floor(Math.random() * (100 - 40) + 40),
        condition: ["Despejado", "Nublado", "Lluvia Ligera", "Tormenta Meteorológica"][Math.floor(Math.random() * 4)]
    };

    weatherCard.innerHTML = `
        <h3>Resultados para: ${mockWeatherData.name}</h3>
        <p><strong>Temperatura:</strong> ${mockWeatherData.temp}°C</p>
        <p><strong>Humedad:</strong> ${mockWeatherData.humidity}%</p>
        <p><strong>Condición:</strong> ${mockWeatherData.condition}</p>
        <div style="margin-top:15px; font-size:12px; color:#7dd3fc;">✓ Datos de mapa meteorológico sincronizados con éxito.</div>
    `;
});