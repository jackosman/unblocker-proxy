const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

app.use("/youtube", createProxyMiddleware({
  target: "https://www.youtube.com",
  changeOrigin: true,
  pathRewrite: {
    "^/youtube": "", // /youtube yerine direkt kök adresi kullan
  },
}));

app.listen(process.env.PORT || 3000, () => {
  console.log("Proxy aktif: http://localhost:3000/youtube");
});