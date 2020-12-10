"use strict";
module.exports = function (app) {
  let jsonku = require("./controller");

  //mengembalikan index pada controller.js
  app.route("/").get(jsonku.index);
};
