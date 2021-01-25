import { SlackChannel } from '../models/slack'
import { getChannels } from '../api/slack/channel'

export function getPublicChannels(): Promise<SlackChannel[]> {
  return getChannels()
}
