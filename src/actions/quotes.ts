import { Quote } from '../models/quote'
import { getQuoteOfTheDay as fetchQuoteOfTheDay } from '../api/quotes'

export function getQuoteOfTheDay(): Promise<Quote> {
  return fetchQuoteOfTheDay().then(response => {
    const data = response.data.contents
    return {
      author: data.quotes[0].author,
      quote: data.quotes[0].quote
    }
  })
}
