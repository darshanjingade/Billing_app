const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; // You can use any port you prefer

app.use(bodyParser.json());

// GET request example
app.get('/api/data', (req, res) => {
  res.json({ message: 'GET request received' });
});

// POST request example
app.post('/api/data', (req, res) => {
  const requestData = req.body;
  res.json({ message: 'POST request received', data: requestData });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
