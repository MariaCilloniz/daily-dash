import axios from 'axios';

async function fetchDailyFortune() {
  const url = 'https://api.viewbits.com/v1/fortunecookie?mode=today';

  try {
    const response = await axios.get(url);
    console.log('Fortune of the Day:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching fortune of the day:', error);
    return null;
  }
}

export default fetchDailyFortune;
