const express = require("express");
const unblocker = require("node-unblocker");

const app = express();

app.use(
  "/proxy",
  unblocker({
    requestMiddleware: [],
    responseMiddleware: [],
  })
);

app.listen(process.env.PORT || 8080, () => {
  console.log("Proxy server is running.");
});