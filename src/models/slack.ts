import { WebAPICallResult } from "@slack/web-api";

export interface SlackMessage {
  channel: string
  text: string
}

export interface SlackMessageResult extends WebAPICallResult {
  channel: string;
  ts: string;
  message: {
    text: string;
  }
}
