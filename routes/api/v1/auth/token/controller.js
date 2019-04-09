const config = require("../../../../../config.json");
const jwt = require("jsonwebtoken");
const { User } = require("../../../../../models");

module.exports = {
  post(req, res) {
    User.findOne({
      where: { email: req.body.email, password: req.body.password }
    }).then(result => {
      if (result === null) {
        res.status(401).json({
          statusCode: 401,
          message: "인증 정보 불일치"
        });
      } else {
        const token = jwt.sign({ email: result.email }, config.secretKey, {
          expiresIn: 60 * 60,
          issuer: "center-portal.api.kroute.net",
          audience: "center.portal.kroute.net"
        });

        res.status(200).json({
          statusCode: 200,
          message: "토큰 발행 성공",
          token
        });
      }
    });
  }
};
