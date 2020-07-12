import Slack from "../../config/slack";
import { SlackReaction } from "../../models/slack";

export function history(channel: string): Promise<any> {
  return Slack.getHistory(channel)
}

export function react(reaction: SlackReaction) {
  return Slack.sendReaction(reaction)
}

export function send(message: string, channel: string) {
  return Slack.sendMessage({
    text: message,
    channel,
  })
}


