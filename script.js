const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const apiKey = "2cd3ccded2e644579dc113142240406";

async function queryWeather(city) {
    const lcity = searchBox.value;
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${lcity}`;
    const response = await fetch(apiUrl);
    let data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.location.name;
    document.querySelector(".temp").innerHTML = `${data.current.temp_c}°C`;
    document.querySelector(".humidity").innerHTML = `${data.current.humidity}%`;
    document.querySelector(".wind").innerHTML = `${data.current.wind_kph} kph`;

}

searchBtn.addEventListener('click', () => {

    queryWeather();
})