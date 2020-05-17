export enum CommandsEnum {
  // PreGame
  SetPlayerSeat = 'set-player-seat',
  SetCharacters = 'set-characters',

  // In Game
  AddReminderToken = 'add-reminder-token',
  RecallReminderTokens = 'recall-reminder-tokens',
  LockReminderToken = 'lock-reminder-token',
  RemoveReminderToken = 'remove-reminder-token',
  BeginNextPhase = 'begin-next-phase',
  SetPlayerDeadStatus = 'set-player-dead-status',
  SendChatMessage = 'send-chat-message',
  MarkChatRead = 'mark-chat-read',
  UpdatePlayer = 'update-player',
  RevealGrimoire = 'reveal-grimoire',
  ChangePlayerCharacter = 'change-player-character',
  RestartGame = 'restart-game',
  ToggleRoomLock = 'toggle-room-lock',
  RemovePlayer = 'remove-player',

  // Voting
  NominatePlayer = 'nominate-player',
  BeginVote = 'begin-vote',
  ToggleHand = 'toggle-hand',
  ConfirmVote = 'confirm-vote',
}
