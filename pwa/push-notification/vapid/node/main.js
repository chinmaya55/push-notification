
const webPush = require('web-push');

const pushSubscription = YOUR_SUBSCRIPTION_OBJECT;

const vapidPublicKey = 'YOUR_VAPID_PUBLIC_KEY';
const vapidPrivateKey = 'YOUR_VAPID_PRIVATE_KEY';

const payload = 'Here is a payload!';

const options = {
  // gcmAPIKey: 'YOUR_SERVER_KEY',
  TTL: 60,
  vapidDetails: {
    subject: 'mailto:YOUR_EMAIL_ADDRESS',
    publicKey: vapidPublicKey,
    privateKey: vapidPrivateKey
  }
};

webPush.sendNotification(
  pushSubscription,
  payload,
  options
);
