import { WebAPICallResult } from "@slack/web-api"

import Slack from "../../config/slack"
import { SlackConversation, SlackReaction } from "../../models/slack"

export async function history(channel: string): Promise<SlackConversation[]> {
  return Slack.getHistory(channel)
}

export function react(reaction: SlackReaction) {
  return Slack.sendReaction(reaction)
}

export async function send(message: string, channel: string): Promise<WebAPICallResult> {
  return Slack.sendMessage({
    text: message,
    channel,
  })
}


