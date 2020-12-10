const express = require("express");
const bodyParser = require("body-parser");
const app = express();

//parse aplication
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//memanggil routes
let routes = require("./routes");
routes(app);

app.listen(3000, () => {
  console.log("server started on port 3000");
});
