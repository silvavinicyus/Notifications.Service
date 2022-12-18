import { CancelNotificationUseCase } from '@application/useCases/cancelNotification';
import { CountRecipientNotificationsUseCase } from '@application/useCases/countRecipientNotifications';
import { GetRecipientNotificationsUseCase } from '@application/useCases/getRecipientNotifications';
import { ReadNotificationUseCase } from '@application/useCases/readNotification';
import { UnreadNotificationUseCase } from '@application/useCases/unreadNotification';
import { Module } from '@nestjs/common';
import { SendNotificationUseCase } from 'src/application/useCases/sendNotification';
import { DatabaseModule } from '../database/database.module';
import { NotificationsController } from './controllers/notifications.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [
    SendNotificationUseCase,
    CancelNotificationUseCase,
    ReadNotificationUseCase,
    UnreadNotificationUseCase,
    CountRecipientNotificationsUseCase,
    GetRecipientNotificationsUseCase,
  ],
})
export class HttpModule {}
