const express = require("express");
const { createServer } = require("unblocker");

const app = express();

app.use(
  createServer({
    prefix: "/proxy/", // Örneğin: /proxy/https://www.youtube.com
  })
);

app.listen(8080, () => {
  console.log("Proxy sunucusu 8080 portunda çalışıyor");
});