import { CharacterTypeEnum } from './enum/character-type.enum';

export interface CharacterDto {
  name: string;
  rulesText: string;
  image: string;
  characterType: CharacterTypeEnum;
  firstNightPriority: number;
  otherNightPriority: number;
  firstNightReminder: string;
  otherNightReminder: string;
  setup: boolean;

  _selected: boolean;
}
