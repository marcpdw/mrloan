
const GREETING_RECIPIENTS = [
  'Barcelona',
  'beautiful people',
  'fans of the sexy beers',
  'food lovers (and the rest of you)',
  'hard workers',
  'hubtypers',
  'lads & lassies',
  'mamayemas',
  'team heroes',
  'naughty boys & girls'
]

export function getRandomGreetingRecipient() {
  const index = Math.round(Math.random() * 10)
  return GREETING_RECIPIENTS[index]
}

export function getRandomMorningGreeting() {
  const recipient = getRandomGreetingRecipient()
  return `Good morning ${recipient}!`
}
