const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

// Basic endpoint to check if the server is running
app.get('/ping', (req, res) => {
  res.send('Server is running');
});

// Import routes
const cardRoutes = require('./routes/cardRoutes');
app.use('/cards', cardRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
