import { CharacterSetEnum } from './../../enum/character-set.enum';
export interface ChangePlayerCharacterPayloadDto {
  playerId: string;
  characterSet: CharacterSetEnum;
  characterName: string;
}
