import { CharacterDto } from './character.dto';
import { CharacterSetEnum } from './enum/character-set.enum';

export interface CharacterSetDto {
  setName: CharacterSetEnum;
  image: string;
  characters: CharacterDto[];
}
