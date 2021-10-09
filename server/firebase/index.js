var admin = require("firebase-admin");

var serviceAccount = require("../config/economeme-519c0-firebase-adminsdk-paouj-9b120e8747.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;
