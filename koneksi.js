var mysql = require("mysql");

//koneksi ke database mysql
const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "restapimhs",
});

conn.connect((err) => {
  if (err) throw err;
  console.log("mysql terkoneksi");
});

module.exports = conn;
