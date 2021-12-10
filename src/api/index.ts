import axios from "axios"

export const getCovidData = async () => {
   return  await axios.get('https://covid.ourworldindata.org/data/owid-covid-data.json')
}

