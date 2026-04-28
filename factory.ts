interface INotifier {
    send(message: string): void;
}

class EmailNotifier implements INotifier {
    send(message: string): void {
        console.log(`email message sent with message ${message}`);
    }
}

class SmsNotifier implements INotifier {
    send(message: string): void {
        console.log(`sms message sent with message ${message}`);
    }
}

class NotificationFactory {
    static createNotifier(type: string): INotifier | null {
        switch (type) {
            case 'sms':
                return new SmsNotifier();
            case 'email':
                return new EmailNotifier();
            default:
                return null;
        }
    }
}

const sms = NotificationFactory.createNotifier('sms');
sms?.send('Hello Sms');

const email = NotificationFactory.createNotifier('email');
email?.send('Hello email');

const test = NotificationFactory.createNotifier('test');
if (test) {
    test.send('Hello test');
} else {
    console.warn('Notifier type "test" is not supported');
}