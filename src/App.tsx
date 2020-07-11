import React, { Fragment, useEffect, useState } from 'react';
import { Box } from '@material-ui/core';

import logo from './logo.svg'
import './App.scss'

import { TESTING_CHANNEL_ID } from './constants/slack'
import { START_OF_WORKDAY } from './constants/cron';
import { SlackChannel, SlackMessage } from './models/slack';
import { getChannels } from './api/slack/channel';
import { getQuoteOfTheDay } from './actions/quotes'
import { getRandomMorningGreeting } from './constants/greetings'
import { send } from './api/slack/message'
import MessageComposer from './components/MessageComposer';
import Scheduler from './config/cron';

const cron = new Scheduler(START_OF_WORKDAY, async function() {
  const dayQuote = await getQuoteOfTheDay()
  const greetings = getRandomMorningGreeting()

  send(`${greetings}\n> _${dayQuote.quote}_ - ${dayQuote.author}`, TESTING_CHANNEL_ID)
})

function App() {
  const [channels, setChannels] = useState<SlackChannel[]>([])

  useEffect(() => {
    getChannels().then(channelList => {
      setChannels(channelList)
    })
  }, [])

  const onMessageComposed = (message: SlackMessage) => {
    send(message.text, message.channel)
  }

  return (
    <Fragment>
      <header>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      </header>
      <main>
        <Box display="flex" flexDirection="row" justifyContent="space-around">
          <Box className="section">
            <h1>Message composer</h1>
            <MessageComposer
              channels={channels}
              onSend={onMessageComposed}
            />
          </Box>
          <Box className="section">
            <h1>Reaction trigger</h1>
          </Box>
          <Box className="section"></Box>
        </Box>
      </main>
    </Fragment>
  );
}

export default App;
