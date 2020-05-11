import { CharacterTypeEnum } from './enum/character-type.enum';
import { CharacterSetEnum } from './enum/character-set.enum';

export interface CharacterDto {
  id: string;
  name: string;
  rulesText: string;
  image: string;
  characterType: CharacterTypeEnum;
  firstNightPriority: number;
  otherNightPriority: number;
  firstNightReminder: string;
  otherNightReminder: string;
  setup: boolean;
  characterSet: CharacterSetEnum;

  _selected: boolean;
}
