const { User } = require("../../../../models");
const moment = require("moment");

module.exports = {
  get(req, res) {
    const idx = parseInt(req.params.idx) || 0;

    if (idx === req.user.idx) {
      res.status(200).json(req.user);
    } else if (req.user.level === 10) {
      User.findOne({ where: { idx } }).then(result => {
        if (result) return res.status(200).json(result.dataValues);

        res.status(404).json({
          statusCode: 404,
          message: "정보가 없습니다"
        });
      });
    } else {
      res.status(401).json({
        statusCode: 401,
        message: "권한이 없습니다"
      });
    }
  },
  getAll(req, res) {
    if (req.user.level === 10) {
      let users = [];

      User.findAll().then(result => {
        result.forEach(data => {
          return users.push(data.dataValues);
        });

        console.log(
          moment(new Date())
            .utcOffset(9)
            .format("YYYY-MM-DD HH:mm:ss")
        );
        res.status(200).json(users);
      });
    } else {
      res.status(401).json({
        statusCode: 401,
        message: "권한이 없습니다"
      });
    }
  },
  post(req, res) {
    if (req.user.level === 10) {
      User.findOrCreate({
        where: { email: req.body.email },
        defaults: {
          ...req.body,
          createdAt: moment(new Date())
            .utcOffset(9)
            .format("YYYY-MM-DD HH:mm:ss")
        }
      })
        .then(([user, created]) => {
          console.log(user);
          console.log(created);
        })
        .catch(err => {
          console.log("error occured!");
          console.log(err);
          res.status(500).json({
            statusCode: 500,
            message: "오류 발생"
          });
        });
    }
  }
};
