import { PlayerDto } from 'src/app/core/services/room/dto/player.dto';
export interface UpdatePlayerPayloadDto {
  playerId: string;
  player: PlayerDto;
  triggerAll: boolean;
}
