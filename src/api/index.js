import axios from "axios";

const url = "https://covid19.mathdro.id/api";

// Async: easier to read and write
export const fetchData = async (country) => {
  let changeUrl = url;

  if (country) {
    changeUrl = url + "/countries/" + country;
  }

  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(changeUrl);

    const fetchedData = {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    };

    return fetchedData;
  } catch (error) {}
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get("https://covid19.mathdro.id/api/daily");

    const modData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));

    return modData;
  } catch (error) {}
};

export const countries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get("https://covid19.mathdro.id/api/countries");

    return countries.map((country) => country.name);
  } catch (error) {
    console.log(error);
  }
};
