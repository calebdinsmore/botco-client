import { ShotClockActionEnum } from '../../enum/shot-clock-actions.enum';

export interface ControlShotClockPayloadDto {
  action: ShotClockActionEnum;
  seconds: number;
}
