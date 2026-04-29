interface IPubSubNotifier{
    notify(message: string): void;
}

class EmailPubSubNotifier implements IPubSubNotifier{
    notify(message: string): void {
        console.log(`Email notification: ${message}`);
    }
}

class SmsPubSubNotifier implements IPubSubNotifier{
    notify(message: string): void {
        console.log(`Sms notification: ${message}`);
    }
}

// concrete class or subject
class NotificationSystem {
    subsctiber: IPubSubNotifier[] = []

    subscribe(obj: IPubSubNotifier): void{
        this.subsctiber.push(obj)
    }

    unsubscribe(obj: IPubSubNotifier): void{
        this.subsctiber.filter(subs=> subs!==obj);
    }

    notifyAll(message: string): void{
        this.subsctiber.forEach(subs=> subs.notify(message))
    }
}

const emlNot = new EmailPubSubNotifier();
const smsNot = new SmsPubSubNotifier();

const notsys = new  NotificationSystem();
notsys.subscribe(emlNot);
notsys.subscribe(smsNot);

notsys.notifyAll("MIGA")
