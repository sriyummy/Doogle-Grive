const multer = require ('multer');
const firebaseStorage = require ('multer-firebase-storage');
const firebase = require ('./firebase.config');
const serviceAccount = require ('../doogle-grive-1-firebase-adminsdk-fbsvc-c99fccc4ce.json');

const storage = firebaseStorage ({
    credentials: firebase.credential.cert(serviceAccount),
    bucketName: 'doogle-grive-1.firebasestorage.app'
});

const upload = multer ({
    storage: storage
});

module.exports = upload;