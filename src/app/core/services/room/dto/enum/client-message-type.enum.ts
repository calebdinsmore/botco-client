// These are the message types sent FROM the server TO the client
export enum ClientMessageTypeEnum {
  StaticGameData = 'static_game_data',
  Notification = 'notification',
  RefreshPage = 'refresh-page',
}
