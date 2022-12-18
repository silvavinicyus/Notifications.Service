import { makeNotification } from '@test/factories/notificationFactory';
import { InMemoryNotificationRepository } from '@test/repositories/in-memory-notifications-repository';
import { CountRecipientNotificationsUseCase } from './countRecipientNotifications';

describe('Count recipient notifications', () => {
  it('Should be able to count recipient notifications', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const countRecipientNotifications = new CountRecipientNotificationsUseCase(
      notificationRepository,
    );

    await notificationRepository.create(
      makeNotification({ recipientId: 'example-recipient-id' }),
    );

    await notificationRepository.create(
      makeNotification({ recipientId: 'example-recipient-id' }),
    );

    await notificationRepository.create(
      makeNotification({ recipientId: 'example-recipient-id-one' }),
    );

    const { count } = await countRecipientNotifications.execute({
      recipientId: 'example-recipient-id',
    });

    expect(count).toEqual(2);
  });
});
