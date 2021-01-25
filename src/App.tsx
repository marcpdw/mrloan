import React, { Fragment, useEffect, useState } from 'react';
import { AppBar, Box, Toolbar, Typography } from '@material-ui/core';

import logo from './assets/MR.png'
import './App.scss'

import { GENERAL_CHANNEL_ID } from './constants/slack'
import { START_OF_WORKDAY } from './constants/cron';
import { SlackChannel, SlackMessage, SlackReaction, SlackConversation } from './models/slack';
import { getChannels } from './api/slack/channel';
import { getFixedQuote, getQuoteOfTheDay } from './actions/quotes'
import { getRandomMorningGreeting } from './constants/greetings'
import { send, react, history } from './api/slack/message'
import MessageComposer from './components/MessageComposer'
import ReactionComposer from './components/ReactionComposer'
import Scheduler from './config/cron';
import MessageList from './components/MessageList';

const cron = new Scheduler(START_OF_WORKDAY, async function() {
  const dayQuote = await getQuoteOfTheDay()
  // const dayQuote = await getFixedQuote()
  const greetings = getRandomMorningGreeting()

  send(`${greetings}\n> _${dayQuote.quote}_ - ${dayQuote.author}`, GENERAL_CHANNEL_ID)
})

function App() {
  const [messages, setMessages] = useState<SlackConversation[]>([])
  
  const [channels, setChannels] = useState<SlackChannel[]>([])
  useEffect(() => {
    getChannels().then(channelList => {
      setChannels(channelList)
    })
  }, [])

  const onMessageComposed = (message: SlackMessage) => {
    send(message.text, message.channel)
  }
  const onReactionComposed = (reaction: SlackReaction) => {
    react(reaction)
  }

  const onSelectChannelReaction = (channelId: string) => {
    history(channelId).then(messageHistory => {
      setMessages(messageHistory)
    })
  }

  return (
    <Fragment>
      <header>
        <AppBar position="static" style={{ background: '#39393F' }}>
          <Toolbar>
            <img src={logo} className="logo" alt="logo" />
            <Typography variant="h4" color="inherit" className="logo-letters">
              <span hidden>Mr</span> Loan
            </Typography>
          </Toolbar>
        </AppBar>
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
            <ReactionComposer
              channels={channels.filter(chan => chan.isMember)}
              onChannelSelected={onSelectChannelReaction}
              onSend={onReactionComposed}
            />
            {Boolean(messages.length) && (
              <Fragment>
                <h2>Message history</h2>
                <MessageList
                  messages={messages}
                />
              </Fragment>
            )}
          </Box>
          <Box className="section"></Box>
        </Box>
      </main>
    </Fragment>
  );
}

export default App;
