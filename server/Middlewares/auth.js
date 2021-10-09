const admin = require("../firebase/index");

exports.authMiddleware = async (req, res, next) => {
  //console.log(req.headers);
  //lets just console.log the request headers: so we will be sending the auth token from FE to BE in headers

  //to validate the token that is posted in the header from the client
  try {
    const firebaseUser = await admin
      .auth()
      .verifyIdToken(req.headers.authtoken);
    console.log("FIREBASE USER : ", firebaseUser);

    req.user = firebaseUser;

    next();
  } catch (err) {
    console.log(err.message);
  }

  //next() : just passes onto the next function
};
