import React, { ChangeEvent, useState } from 'react'
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { MenuItem } from '@material-ui/core';

import { SlackChannel, SlackMessage } from '../models/slack';

type MessageComposerInputs = {
  channels: SlackChannel[]
  onSend: (message: SlackMessage) => void
}

function MessageComposer({
  channels,
  onSend,
}: MessageComposerInputs) {
  const [msg, setMsg] = useState('')
  const [selectedChannel, setSelectedChannel] = useState('')

  const handleChannelChange = (ev: ChangeEvent<HTMLInputElement>) => {
    setSelectedChannel(ev.target.value)
  }

  const handleChangeMessage = (ev: ChangeEvent<HTMLInputElement>) => {
    setMsg(ev.target.value)
  }

  const onClickSend = () => {
    onSend({
      channel: selectedChannel,
      text: msg,
    })
  }

  return (
    <form noValidate autoComplete="off">
      <Box display="flex" flexDirection="row">
        <Box m={1} ml={0}>
          <TextField
            label="Message"
            multiline
            onChange={handleChangeMessage}
            rows={5}
            variant="outlined"
            value={msg}
          />
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
              Send message
            </Button>
          </Box>
        </Box>
      </Box>
      
    </form>
  )
}

export default MessageComposer
