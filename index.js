const express = require('express');
const { createUnblocker } = require('unblocker');

const app = express();

// Proxy için '/proxy/' öneki kullanılacak
app.use(createUnblocker({
  prefix: '/proxy/',
}));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Proxy sunucusu çalışıyor: http://localhost:${PORT}/proxy/`);
}).on('upgrade', createUnblocker().onUpgrade);
