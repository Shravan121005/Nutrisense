const admin = require("firebase-admin");
const serviceAccount = process.env.RENDER
    ? require("/etc/secrets/firebase-service-account.json")
    : require("./firebase-service-account.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;