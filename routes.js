"use strict";
module.exports = function (app) {
  let jsonku = require("./controller");

  //mengembalikan index pada controller.js
  app.route("/").get(jsonku.index);

  app.route("/tampil").get(jsonku.tampilMhs);

  app.route("/tampil/:id").get(jsonku.tampilMhsId);
};
