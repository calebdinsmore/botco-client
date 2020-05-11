import { CharacterSetEnum } from '../../enum/character-set.enum';

export interface SetCharactersDto {
  characterNames: string[];
  characterSet: CharacterSetEnum;
  includeReminderTokensFor: string[];
}
