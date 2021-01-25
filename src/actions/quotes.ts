import { Quote } from '../models/quote'
import { getQuoteOfTheDay as fetchQuoteOfTheDay } from '../api/quotes'

const FIXED_QUOTES = [{
  author: 'Joy Joelle Abi-Aad',
  quote: "Where there's a will, there's a way",
}, {
  author: 'Cassidy Chambers via Joy Joelle Abi-Aad',
  quote: 'Where there once was a fire, ashes remain',
}]

export function getFixedQuote(): Promise<any> {
  return Promise.resolve(FIXED_QUOTES[1])
}

export function getQuoteOfTheDay(): Promise<Quote> {
  return fetchQuoteOfTheDay().then(response => {
    const data = response.data.contents
    return {
      author: data.quotes[0].author,
      quote: data.quotes[0].quote
    }
  })
}
