import React from 'react'
import { List, ListItem, ListItemText } from '@material-ui/core'

import { SlackConversation } from '../models/slack'

type MessageListInputs = {
  messages: SlackConversation[]
}

function MessageList({
  messages
}: MessageListInputs) {
  return (
    <div className="no-ident">
      <List dense={true}>
        {messages.map((msg, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={`${msg.user}: ${msg.text}`}
              secondary={msg.timestamp}
            />
          </ListItem>
        ))}
      </List>
    </div>
  )
}

export default MessageList
