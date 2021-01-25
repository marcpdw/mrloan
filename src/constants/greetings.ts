
const GREETINS_RECIPIENT_FRIDAY = 'fans of the sexy beers'
const GREETING_RECIPIENTS = [
  '! Bon dia!!',
  'Barcelona',
  'beautiful people',
  'food lovers (and the rest of you)',
  'hard workers',
  'hubtypers',
  'lads & lassies',
  'mamayemas',
  'team heroes',
  'naughty boys & girls'
]

export function getRandomGreetingRecipient() {
  const index = Math.round(Math.random() * 10) % 10
  return GREETING_RECIPIENTS[index]
}

export function getRandomMorningGreeting() {
  const day = new Date().getDay()
  let recipient = getRandomGreetingRecipient()
 
  if (day === 5) {
    recipient = GREETINS_RECIPIENT_FRIDAY
  }
  return `Good morning ${recipient}!`
}
