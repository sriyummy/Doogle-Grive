const Firebase = require ('firebase-admin');
const serviceAccount = require ('../doogle-grive-1-firebase-adminsdk-fbsvc-c99fccc4ce.json');

const firebase = Firebase.initializeApp ({
    credential: Firebase.credential.cert(serviceAccount),
    storageBucket: 'doogle-grive-1.firebasestorage.app',
    unique: true
});

module.exports = Firebase;