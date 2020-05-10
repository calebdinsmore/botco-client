import { CharacterDto } from './character.dto';

export interface ReminderTokenDto {
  id: string;
  isLocked: boolean;
  shortName: string;
  description: string;
  character: CharacterDto;
}
