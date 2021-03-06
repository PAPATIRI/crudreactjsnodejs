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

//todo mengubah data mahasiswa berdasarkan id mahasiswa
exports.editMhs = function (req, res) {
  let id = req.body.id_mhs;
  let nim = req.body.nim;
  let nama = req.body.nama;
  let jurusan = req.body.jurusan;

  connection.query(
    "UPDATE mahasiswa SET nim=?, nama=?, jurusan=? WHERE id_mhs=?",
    [nim, nama, jurusan, id],
    function (error, rows, fields) {
      if (error) {
        connection.log(error);
      } else {
        response.ok("berhasil mengubah data mahasiswa", res);
      }
    }
  );
};

//todo menghapus data mahasiswa berdasarkan id
exports.hapusMhs = function (req, res) {
  let id = req.body.id_mhs;

  connection.query(
    "DELETE FROM mahasiswa WHERE id_mhs=?",
    [id],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok("berhasil hapus data mahasiswa", res);
      }
    }
  );
};

//menampilakan matakuliah group
exports.tampilmatakuliah = function (req, res) {
  connection.query(
    "SELECT mahasiswa.id_mhs, mahasiswa.nim, mahasiswa.nama, mahasiswa.jurusan, matakuliah.matakuliah, matakuliah.sks from krs JOIN matakuliah JOIN mahasiswa WHERE krs.id_matakuliah = matakuliah.id_matakuliah AND krs.id_mhs = mahasiswa.id_mhs ORDER BY mahasiswa.id_mhs",
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.oknested(rows, res);
      }
    }
  );
};
