const controller = {};

controller.index = (req, res, next) => {
    res.render("index");
  };

module.exports = controller;