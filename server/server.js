require("dotenv").config();
const express = require("express");
const port =  process.env.PORT || 3000;
const puertoMongo = process.env.LOCALHOST;
const app = express();
var cors = require("cors");

const routerU = require("./routes/users.route");
const routerPosts = require("./routes/posts.route");

/**Cadena conexion con mongo */
const mongose = require("mongoose");
mongose
  .connect(puertoMongo)
  .then(() => console.log("Connect MongoDB"))
  .catch((err) => {
    console.error(err);
  });
/**Fin de cadena conexion */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routerU);
app.use(routerPosts);
app.use(express.static(__dirname));

app.listen(port, () => {
  console.log(`Servidor corriendo por el puerto` + " " + port);
});