import Axios from "axios";

export function getQuoteOfTheDay(): Promise<any> {
  return Axios.get('https://quotes.rest/qod?language=en')
}
