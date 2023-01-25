const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth");
const messageRoutes = require("./routes/messages");
const app = express();
const socket = require("socket.io");
require("dotenv").config();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

const server = app.listen(process.env.PORT, () =>
  console.log(`Server started on ${process.env.PORT}`)
);
const io = socket(server, {
  cors: {
    origin: "http://localhost:5173",
    credentials: true,
  },
});

global.onlineUsers = new Map();
io.on("connection", (socket) => {
  global.chatSocket = socket;
  socket.on("add-user", (userId) => {
    onlineUsers.set(userId, socket.id);
  });

  socket.on("send-msg", (data) => {
    const sendUserSocket = onlineUsers.get(data.to);
    if (sendUserSocket) {
      socket.to(sendUserSocket).emit("msg-recieve", data.msg);
    }
  });
});




// const express = require("express");
// const mongose = require("mongoose");
// const puertoMongo = process.env.LOCALHOST;
// const app = express();
// const socket = require("socket.io");
// const cors = require("cors");
// require("dotenv").config();
// /**Cadena conexion con mongo */

// mongose
//   .connect(puertoMongo)
//   .then(() => console.log("Connect MongoDB"))
//   .catch((err) => {
//     console.error(err);
//   });
// /**Fin de cadena conexion */
// const routerU = require("./routes/users.route");
// const routerPosts = require("./routes/posts.route");
// const routerMessages = require("./routes/messages");

// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(routerU);
// app.use(routerPosts);
// app.use(routerMessages);
// app.use(express.static(__dirname));

// app.listen(process.env.PORT, () => {
//   console.log(`Servidor corriendo por el puerto` + " " + process.env.PORT);
// });

// const server = app.listen(process.env.PORT, () =>
//   console.log(`Server started on ${process.env.PORT}`)
// );

// const io = socket(server, {
//   cors: {
//     origin: "http://localhost:3000",
//     credentials: true,
//   },
// });

// global.onlineUsers = new Map();
// io.on("connection", (socket) => {
//   global.chatSocket = socket;
//   socket.on("add-user", (userId) => {
//     onlineUsers.set(userId, socket.id);
//   });

//   socket.on("send-msg", (data) => {
//     const sendUserSocket = onlineUsers.get(data.to);
//     if (sendUserSocket) {
//       socket.to(sendUserSocket).emit("msg-recieve", data.msg);
//     }
//   });
// });
