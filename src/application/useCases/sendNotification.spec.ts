import { InMemoryNotificationRepository } from '@test/repositories/in-memory-notifications-repository';
import { SendNotificationUseCase } from './sendNotification';

describe('Send notification', () => {
  it('Should be able to send a notification', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const sendNotification = new SendNotificationUseCase(
      notificationRepository,
    );

    const { notification } = await sendNotification.execute({
      category: 'social',
      content: 'This is a notification',
      recipientId: 'recipient-example-id',
    });

    expect(notificationRepository.notifications).toHaveLength(1);
    expect(notificationRepository.notifications[0]).toEqual(notification);
  });
});
