//membuat beberapa router seperti login, regis atau beberapa router yang akan diakses dan di cek apakah bisa diakses secara bebas, atau memerlukan token
let connection = require("../koneksi");
let mysql = require("mysql");
let md5 = require("md5");
let response = require("../res");
let jwt = require("jsonwebtoken");
let config = require("../config/secret");
let ip = require("ip");

//controller untuk register
exports.registrasi = function (req, res) {
  let post = {
    namauser: req.body.nama_user,
    emailuser: req.body.email_user,
    password: md5(req.body.password),
    role: req.body.role,
    tanggal_daftar: new Date(),
  };

  let query = "SELECT email FROM ?? WHERE ??";
  let tabel = ["user", "email", post.email];

  //query mencek jika email yang dimasukkan sama dengan email
  query = mysql.format(query, tabel);

  connection.query(query, function (error, rows) {
    if (errror) {
      console.log(error);
    } else {
      if (rows.length == 0) {
        let query = "INSERT INTO ?? SET ?";
        let tabel = ["user"];
        query = mysql.format(query, tabel);
        connection.query(query, post, function (error, rows) {
          if (error) {
            console.log(error);
          } else {
            response.ok("berhasil menambahkan data user", res);
          }
        });
      } else {
        response.ok("email sudah terdaftar");
      }
    }
  });
};
