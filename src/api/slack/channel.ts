import Slack from "../../config/slack";
import { SlackChannel } from "../../models/slack"

export async function getChannels(): Promise<SlackChannel[]> {
  return Slack.getChannels()
}
