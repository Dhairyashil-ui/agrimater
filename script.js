// Handle login and store location
document.getElementById('login-btn').addEventListener('click', function () {
    const username = document.getElementById('username').value;
    const location = document.getElementById('location').value;
    
    if (username && location) {
        // Fade out login form and fade in the welcome page
        document.getElementById('login-form').classList.add('fade-out');
        
        // Wait for fade-out to finish, then show welcome message
        setTimeout(function () {
            document.getElementById('login-form').style.display = 'none';
            document.getElementById('welcome-message').classList.add('fade-in');
            document.getElementById('welcome-message').classList.remove('hidden');
            document.getElementById('greeting').textContent = `Welcome, ${username}!`;

            // Store location in localStorage
            localStorage.setItem('location', location);
        }, 1000);
    } else {
        alert("Please enter your name and location to login.");
    }
});

// Logout functionality with fade-out and fade-in transition
document.getElementById('logout-btn').addEventListener('click', function () {
    document.getElementById('welcome-message').classList.remove('fade-in');
    document.getElementById('welcome-message').classList.add('fade-out');

    // Wait for fade-out to finish, then reset the page
    setTimeout(function () {
        document.getElementById('login-form').style.display = 'block';
        document.getElementById('login-form').classList.remove('fade-out');
        document.getElementById('welcome-message').classList.remove('fade-out');
        document.getElementById('welcome-message').classList.add('hidden');
        document.getElementById('username').value = '';
        document.getElementById('location').value = '';
        localStorage.removeItem('location');
    }, 1000);
});

// Fetch weather data from OpenWeather API
document.getElementById('search-weather-btn').addEventListener('click', function () {
    const location = localStorage.getItem('location');

    if (location) {
        const apiKey = 'fe63560656fff654344f6477a8f8d826';  // Replace with your actual OpenWeather API key
        const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`; // Fetch data in Celsius

        // Show loading status
        document.getElementById('weather-status').textContent = 'Fetching weather data...';

        // Fetch weather data from OpenWeather API
        fetch(weatherUrl)
            .then(response => response.json())
            .then(data => {
                // Check if the location is valid
                if (data.cod === 200) {
                    // Display the weather details
                    const temp = data.main.temp;  // Current temperature
                    const weatherDescription = data.weather[0].description;  // Weather description (e.g., "clear sky")
                    const humidity = data.main.humidity;  // Humidity percentage

                    // Update the UI with the fetched weather data
                    document.getElementById('weather-status').innerHTML = 
                        `Temperature: ${temp}°C<br>
                        Weather: ${weatherDescription}<br>
                        Humidity: ${humidity}%`;
                } else {
                    document.getElementById('weather-status').textContent = 'Location not found. Please check your input.';
                }
            })
            .catch(error => {
                document.getElementById('weather-status').textContent = 'Error fetching weather data. Please try again.';
                console.error(error);
            });
    } else {
        alert("Please log in and enter your location first.");
    }
});

// Check market price options
document.getElementById('check-price-btn').addEventListener('click', function () {
    // Create a popup with options for eNAM and Agmarknet
    const choice = confirm(
        "Choose a platform to check market prices:\n\n" +
        "Press OK for Agmarknet (https://agmarknet.gov.in)\n" +
        "Press Cancel for eNAM (https://www.enam.org.in)"
    );

    // Redirect based on the user's choice
    if (choice) {
        window.open('https://agmarknet.gov.in/', '_blank');  // Open Agmarknet
    } else {
        window.open('https://www.enam.org.in/', '_blank');  // Open eNAM
    }
});

// Open Agmarknet directly when "Market in Detail" button is clicked
document.getElementById('market-detail-btn').addEventListener('click', function () {
    window.open('https://agmarknet.gov.in/', '_blank');
});