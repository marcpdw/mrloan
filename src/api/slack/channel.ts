import Slack from "../../config/slack";

export function getChannels() {
  return Slack.getChannels()
}
