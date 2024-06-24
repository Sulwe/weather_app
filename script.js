const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const apiKey = "2cd3ccded2e644579dc113142240406";

async function queryWeather(city) {
    const lcity = searchBox.value;
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${lcity}`;
    const response = await fetch(apiUrl);

    if(response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";

    }
    else {
        let data = await response.json();
        const weatherIcon = document.querySelector(".weather-icon");
    
        console.log(data);
    
        document.querySelector(".city").innerHTML = data.location.name;
        document.querySelector(".temp").innerHTML = `${data.current.temp_c}°C`;
        document.querySelector(".humidity").innerHTML = `${data.current.humidity}%`;
        document.querySelector(".wind").innerHTML = `${data.current.wind_kph} kph`;
    
        if(data.current.condition.text == "Partly cloudy" || data.current.condition.text ==  "cloudy" || data.current.condition.text ==  "Overcast"){
            weatherIcon.src = "images/clouds.png";
        }
        else if(data.current.condition.text == "Clear" || data.current.condition.text == "Sunny"){
            weatherIcon.src = "images/clear.png";
        }
        else if(data.current.condition.text == "Patchy rain possible" || data.current.condition.text == "Light drizzle" || data.current.condition.text == "Patchy light drizzle"){
            weatherIcon.src = "images/drizzle.png";
        }
        else if(data.current.condition.text == "Light Rain" || data.current.condition.text == "Moderate rain" || data.current.condition.text == "Heavy rain"){
            weatherIcon.src = "images/rain.png";
        }
        else if(data.current.condition.text == "Mist"){
            weatherIcon.src = "images/mist.png";
        }
        else if(data.current.condition.text == "Patchy light snow" || data.current.condition.text == "Moderate snow" || data.current.condition.text == "Heavy Snow"){
            weatherIcon.src = "images/snow.png";
        }
        else {
            weatherIcon.src = "images/clouds.png";
        }
    
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";

    }


}

searchBtn.addEventListener('click', () => {

    queryWeather();
})