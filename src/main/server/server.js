import http from "http";
import app from "./app";

const server = http.createServer(app);
let currentApp = app;
server.listen(7777);

if (module.hot) {
  console.log('here');
  module.hot.accept("./app", () => {
    const app = require('./app').default
    server.removeListener("request", currentApp);
    server.on("request", app);
    currentApp = app;
    console.log('here2');
  });
}