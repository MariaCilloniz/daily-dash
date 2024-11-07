import axios from "axios";
async function fetchDailyFortune() {
  try {
    const response = await axios.get(
      "https://api.allorigins.win/raw?url=https://api.viewbits.com/v1/fortunecookie?mode=today"
    );
    console.log("Fortune of the Day:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching fortune of the day:", error);
    return null;
  }
}
export default fetchDailyFortune;
