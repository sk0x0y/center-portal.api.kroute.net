const { User } = require("../../../../models");

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
  }
};
