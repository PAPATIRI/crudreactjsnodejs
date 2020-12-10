"use strict";

let response = require("./res");
let connection = require("./koneksi");

exports.index = function (req, res) {
  response.ok("aplikasi REST API berjalan", res);
};

// todo menampilkan data dari database
exports.tampilMhs = function (req, res) {
  connection.query("SELECT * FROM mahasiswa", function (error, rows, fields) {
    if (error) {
      connection.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

//todo menampilkan data berdasarkan id mhs
exports.tampilMhsId = function (req, res) {
  let id = req.params.id;
  connection.query(
    "SELECT * FROM mahasiswa WHERE id_mhs = ?",
    [id],
    function (error, rows, fields) {
      if (error) {
        connection.log(error);
      } else {
        response.ok(rows, res);
      }
    }
  );
};

//todo menambahkan data mahasiswa
exports.tambahMhs = function (req, res) {
  let nim = req.body.nim;
  let nama = req.body.nama;
  let jurusan = req.body.jurusan;

  connection.query(
    "INSERT INTO mahasiswa (nim, nama, jurusan) VALUES (?, ?, ?)",
    [nim, nama, jurusan],
    function (error, rows, fields) {
      if (error) {
        connection.log(error);
      } else {
        response.ok("berhasil menambahkan data", res);
      }
    }
  );
};
