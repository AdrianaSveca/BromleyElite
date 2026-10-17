
const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Flooring API is running!'
  });
});

app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT}`);
});
