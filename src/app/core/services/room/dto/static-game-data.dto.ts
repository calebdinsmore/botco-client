import { CharacterSetDto } from './character-set.dto';

/* DTO of data about the game that won't change like state does */
export interface StaticGameDataDto {
  characterSets: CharacterSetDto[];
}
