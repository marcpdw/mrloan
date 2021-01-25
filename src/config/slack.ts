import { WebClient } from "@slack/web-api";
import { SlackChannel, SlackMessage, SlackReaction, SlackConversation } from "../models/slack";
import { SLACK_BOT_TOKEN } from "./keys";

class SlackServer {

  private readonly SLACK_BOT_TOKEN = SLACK_BOT_TOKEN
  private client: WebClient

  constructor() {
    this.client = new WebClient(this.SLACK_BOT_TOKEN)
  }

  async getChannels(): Promise<SlackChannel[]> {
    return this.client.conversations.list({
      limit: 120,
    }).then(response => {
      const channels: any[]  = (response.channels as any[]) || []
      return channels.map(channel => ({
        id: channel.id,
        name: channel.name,
        isMember: channel.is_member
      })).sort((a, b) => a.name < b.name ? -1 : 1)
    })
  }

  async getHistory(channel: string, count = 20): Promise<SlackConversation[]> {
    return this.client.conversations.history({
      channel,
      count,
    }).then(response => {
      const messages = response.messages as any[]
      return messages.map(msg => ({
        fromBot: Boolean(msg.bot_id),
        text: msg.text,
        timestamp: msg.ts,
        type: msg.type,
        user: Boolean(msg.bot_id) ? msg.bot_profile.name : msg.user
      }))
    })
  }

  sendMessage(message: SlackMessage) {
    return this.client.chat.postMessage({
      channel: message.channel,
      text: message.text,
    })
  }

  sendReaction(reaction: SlackReaction) {
    this.client.reactions.add({
      channel: reaction.channel,
      name: reaction.reaction,
      timestamp: reaction.msgTimestamp,
    })
  }
}

const Slack = new SlackServer()
export default Slack
