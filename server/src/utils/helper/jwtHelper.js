const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const secretKey = process.env.SECRET_KEY;

const jwtHelper = {
  generateToken: (payloadData) => {
    const payload = {
      id: payloadData.id,
      username: payloadData.username,
    };

    const token = jwt.sign(payload, secretKey, {
      algorithm: "HS512",
      expiresIn: "1h",
    });
    return token;
  },

  authenticateToken: (req, res, next) => {
    // const authHeader = req.headers["authorization"];
    // const token = authHeader && authHeader.split(" ")[1];
    // console.log(authHeader.split(' '));
    const token = jwtHelper.getToken(req);

    if (token == null) {
      return res.sendStatus(401); // Non autorisé
    }

    jwt.verify(token, secretKey, (err, user) => {
      if (err) {
        return res.sendStatus(403); // Interdit
      }

      next();
    });
  },

  getToken: (req) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    return token;
  },

  decodeToken: (token) => {
    const decoded = jwt.verify(token, secretKey);
    return decoded;
  }
};

module.exports = jwtHelper;
