const express = require('express');

const app = express();
const port = 5000;
const blog = { id: 1, title: 'Blog title', description: 'Blog description' };

app.get('/', (req, res) => {
  res.send(blog);
});

app.listen(port, () => {
  console.log('Sunucu ', port, ' portundan çalıştı');
});
