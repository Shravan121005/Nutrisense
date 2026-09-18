const admin = require("firebase-admin");
const path = require("path");

const serviceAccount = process.env.RENDER
    ? require("/etc/secrets/firebase-service-account.json")
    : require(path.join(__dirname, "firebase-service-account.json"));

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;