import { MapSchema } from '@colyseus/schema';
import { ChatRoomDto } from './chat-room.dto';
import { ReminderTokenDto } from './reminder-token.dto';
import { CharacterDto } from './character.dto';
export interface PlayerDto {
  playerId: string;
  connected: boolean;
  inactive: boolean;
  username: string;
  seatNumber: number;
  character: CharacterDto;
  reminderTokens: ReminderTokenDto[];
  chatRooms: MapSchema<ChatRoomDto>;
  fallbackIcon: string;
  isDead: boolean;
  canVote: boolean;
  hasNominated: boolean;
  hasBeenNominated: boolean;
  handRaised: boolean;
  handLocked: boolean;
  isStoryteller: boolean;
  storytellerSessionId: string;
}
