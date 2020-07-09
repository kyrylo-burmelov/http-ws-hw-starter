import * as config from "./config";

export default io => {
  io.on("connection", socket => {
    const username = socket.handshake.query.username;

  });
};
