import Slack from "../config/slack";

export function send(message: string, channel: string) {
  return Slack.sendMessage({
    text: message,
    channel,
  })
}
