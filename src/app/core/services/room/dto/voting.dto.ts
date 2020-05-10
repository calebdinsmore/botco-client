import { VotePhaseEnum } from './enum/vote-phase.enum';
export interface VotingDto {
  votePhase: VotePhaseEnum;
  nominatedPlayerId: string;
  highlightedPlayerId: string;
  voteCount: number;
  playerToBeExecutedId: string;
  votesToExecute: number;
}
