import Axios from "axios";

export function getQuoteOfTheDay() {
  return Axios.get('https://quotes.rest/qod?language=en')
}
