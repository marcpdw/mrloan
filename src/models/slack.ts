import { WebAPICallResult } from "@slack/web-api";

export interface SlackChannel {
  id: string
  name: string
}

export interface SlackMessage {
  channel: string
  text: string
}

export interface SlackReaction {
  channel: string
  msgTimestamp: string
  reaction: string
}

export interface SlackMessageResult extends WebAPICallResult {
  channel: string;
  ts: string;
  message: {
    text: string;
  }
}
