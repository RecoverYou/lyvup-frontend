// importScripts(
//     "https://www.gstatic.com/firebasejs/9.6.1/firebase-app-compat.js"
// );
// importScripts(
//     "https://www.gstatic.com/firebasejs/9.6.1/firebase-messaging-compat.js"
// );

// firebase.initializeApp({
//     apiKey: "AIzaSyAsXjt_-og2d8ElQ1XZy35pV9VXVFN_Few",
//     authDomain: "lyvup-11c82.firebaseapp.com",
//     projectId: "lyvup-11c82",
//     storageBucket: "lyvup-11c82.firebasestorage.app",
//     messagingSenderId: "198735155925",
//     appId: "1:198735155925:web:6ad4a57ad727fec8c1885c",
//     measurementId: "G-W2DKHY656T"
// });

// const messaging = firebase.messaging();

// messaging.onBackgroundMessage(function (payload) {
//     console.log(
//         "[firebase-messaging-sw.js] Received background message",
//         payload
//     );

//     const notificationTitle = payload.notification.title;
//     const notificationOptions = {
//         body: payload.notification.body,
//         icon: "/firebase-logo.png",
//         data: payload.data, // include full payload if needed later
//     };

//     self.registration.showNotification(notificationTitle, notificationOptions);

//     // Optional: use BroadcastChannel
//     const channel = new BroadcastChannel("fcm-channel");
//     channel.postMessage(payload.data);
// });