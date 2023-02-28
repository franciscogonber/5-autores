const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET_KEY;

module.exports.authenticate  = (req, res, next) => {
  console.log("cookie", req.cookies)
  jwt.verify(req.cookies.userToken, SECRET, (err, payload) => {
    if (err) { 
      console.log("autentication error", err)
      res.status(401).json({verified: false});
    } else {
      console.log("autenticated")
      next();
    }
  });
}

