import axios from 'axios';

async function getWeatherData(city = 'Vancouver') {
  const apiKey = '6f956683ad2940f098a170043240711'; 
  const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

  try {
    const response = await axios.get(url);
    return response.data; 
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
}

export default getWeatherData;
