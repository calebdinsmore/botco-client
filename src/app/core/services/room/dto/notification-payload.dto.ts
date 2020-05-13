import { NotificationTypeEnum } from './enum/notification-type.enum';

export interface NotificationPayloadDto {
  type: NotificationTypeEnum;
  summary: string;
  detail: string;
  subject: any;
}
