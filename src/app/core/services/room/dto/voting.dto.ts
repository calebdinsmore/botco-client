import { VotePhaseEnum } from './enum/vote-phase.enum';
import { MapSchema } from '@colyseus/schema';
import { BooleanSchemaDto } from './boolean-schema.dto';

export interface VotingDto {
  votePhase: VotePhaseEnum;
  nominatedPlayerId: string;
  highlightedPlayerId: string;
  voteCount: number;
  playerToBeExecutedId: string;
  votesToExecute: number;
  voteWarnings: MapSchema<BooleanSchemaDto>;
}
