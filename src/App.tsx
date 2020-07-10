import React, { useState } from 'react';
import logo from './logo.svg'
import './App.css'

import { TESTING_CHANNEL_ID } from './constants/slack'
import { getQuoteOfTheDay } from './actions/quotes'
import { getRandomMorningGreeting } from './constants/greetings'
import { send } from './api/message'
import Scheduler from './config/cron';

const cron = new Scheduler('59 23 * * 5' /* '09 9 * * 1-5' */, async function() {
  const dayQuote = await getQuoteOfTheDay()
  const greetings = getRandomMorningGreeting()

  send(`${greetings}\n> _${dayQuote.quote}_ - ${dayQuote.author}`, TESTING_CHANNEL_ID)
})

function App() {
  const [msg, setMsg] = useState('')

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main>
        <h1>Mr Loan's messages</h1>
        <form>
          <input type="text" name="message" onChange={ev => {
            setMsg(ev.target.value)
          }} />
          <input type="button" value="Send" onClick={() => {
            send(msg, TESTING_CHANNEL_ID).then(result => {
              console.log(result)
            }).catch(err => {
              console.error(err)
            })
          }} />
        </form>
      </main>
    </div>
  );
}

export default App;
