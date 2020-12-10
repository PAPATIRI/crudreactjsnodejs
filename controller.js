"use strict";

let response = require("./res");
let connection = require("./koneksi");

exports.index = function (req, res) {
  response.ok("aplikasi REST API berjalan", res);
};

//menampilkan data dari database
exports.tampilMhs = function (req, res) {
  connection.query("SELECT * FROM mahasiswa", function (error, rows, fields) {
    if (error) {
      connection.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};
