import { VotingDto } from './voting.dto';
import { GameMetaDto } from './game-meta.dto';
import { MapSchema } from '@colyseus/schema';
import { PlayerDto } from './player.dto';
import { GamePhaseEnum } from './enum/game-phase.enum';
import { ReminderTokenDto } from './reminder-token.dto';
import { CharacterSetEnum } from './enum/character-set.enum';

export interface GameStateDto {
  isLocked: boolean;
  players: MapSchema<PlayerDto>;
  isDay: boolean;
  storyteller: PlayerDto;
  gameMeta: GameMetaDto;
  gamePhase: GamePhaseEnum;
  nextGamePhase: GamePhaseEnum;
  reminderTokens: ReminderTokenDto[];
  charactersDistributed: boolean;
  votingSchema: VotingDto;
  canSeeGrimoirePlayerId: string;
  characterSet: CharacterSetEnum;
  shotClockSeconds: number;
  shotClockIsPaused: boolean;
}
