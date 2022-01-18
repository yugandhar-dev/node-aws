const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hi app started and here is my response');
});

app.listen(3000, () => {
  console.log('Server Started on port 3000');
});
