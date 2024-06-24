const apiKey = "2cd3ccded2e644579dc113142240406";
const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=nairobi`;


async function queryWeather() {
    const response = await fetch(apiUrl);
    let data = await response.json();

    console.log(data);
}

queryWeather()