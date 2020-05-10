import { ArraySchema } from '@colyseus/schema';
import { ChatMessageDto } from './chat-message.dto';
export interface ChatRoomDto {
  otherPlayerId: string;
  messages: ArraySchema<ChatMessageDto>;
  hasUnread: boolean;
}
