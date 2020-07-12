import React, { ChangeEvent, useState } from 'react'
import { MenuItem } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

import { SlackChannel, SlackReaction } from '../models/slack'

type ReactionComposerInputs = {
  channels: SlackChannel[]
  onChannelSelected: (channel: string) => void
  onSend: (message: SlackReaction) => void
}

function ReactionComposer({
  channels,
  onChannelSelected,
  onSend,
}: ReactionComposerInputs) {
  const [reactionName, setReactionName] = useState('')
  const [msgTimestamp, setMessageTimestamp] = useState('')
  const [selectedChannel, setSelectedChannel] = useState('')

  const handleChannelChange = (ev: ChangeEvent<HTMLInputElement>) => {
    const channel = ev.target.value
    setSelectedChannel(channel)
    onChannelSelected(channel)
  }

  const handleMessageIdChange = (ev: ChangeEvent<HTMLInputElement>) => {
    setMessageTimestamp(ev.target.value)
  }

  const handleReactionChange = (ev: ChangeEvent<HTMLInputElement>) => {
    setReactionName(ev.target.value)
  }

  const onClickSend = () => {
    onSend({
      channel: selectedChannel,
      reaction: reactionName,
      msgTimestamp,
    })
  }

  return (
    <form noValidate autoComplete="off" className="reaction-form">
      <Box display="flex" flexDirection="row" minHeight={148}>
        <Box display="flex" flexDirection="column" justifyContent="space-between" mr={1}>
          <Box mt={1}>
            <TextField 
              label="Message id"
              onChange={handleMessageIdChange}
              type="search" 
              variant="outlined" 
            />
          </Box>
          <Box mb={1}>
            <TextField 
              label="Reaction name" 
              onChange={handleReactionChange}
              type="search" 
              variant="outlined"
            />
          </Box>
        </Box>
        <Box display="flex" flexDirection="column" justifyContent="space-between">
          <Box mt={1}>
            <TextField
              label="Select channel"
              onChange={handleChannelChange}
              select
              value={selectedChannel}
              variant="outlined"
              style={{
                width: '100%'
              }}
            >
              {channels.map(cnl => (
                <MenuItem key={cnl.id} value={cnl.id}>
                  {cnl.name}
                </MenuItem>
              ))}
            </TextField>
          </Box>
          <Box mb={1}>
            <Button 
              variant="contained" 
              color="primary"
              onClick={onClickSend}
            >
              Send reaction
            </Button>
          </Box>
        </Box>
      </Box>
    </form>
  )
}

export default ReactionComposer
