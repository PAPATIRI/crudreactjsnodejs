"use strict";
module.exports = function (app) {
  let jsonku = require("./controller");

  //mengembalikan index pada controller.js
  app.route("/").get(jsonku.index);

  app.route("/tampil").get(jsonku.tampilMhs);

  app.route("/tampil/:id").get(jsonku.tampilMhsId);

  app.route("/tambahmahasiswa").post(jsonku.tambahMhs);

  app.route("/editmahasiswa").put(jsonku.editMhs);

  app.route("/hapusmahasiswa").delete(jsonku.hapusMhs);

  app.route("/tampilmatakuliah").get(jsonku.tampilmatakuliah);
};
