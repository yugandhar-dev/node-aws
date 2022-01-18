const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hi app started and here is my response');
});

const port = process.env.port || 3000;

app.listen(port, () => {
  console.log('Server Started on port ', port);
});
