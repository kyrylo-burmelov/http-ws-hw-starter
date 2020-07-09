import express from "express";
import http from "http";
import socketIO from "socket.io";
import socketHandler from "./socket";
import routes from "./routes";
import { STATIC_PATH, PORT } from "./config";

const app = express();
const httpServer = http.Server(app);
const io = socketIO(httpServer);

app.use(express.static(STATIC_PATH));
routes(app);

app.get("*", (req, res) => {
  res.redirect("/login");
});

socketHandler(io);

httpServer.listen(PORT, () => {
  console.log(`Listen server on port ${PORT}`);
});
