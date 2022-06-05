import express from 'express';

import library from './data/library.json' assert { type: 'json' };

const app = express();
const port = 8080;

app.locals.library = library;

app.use(express.static('public'));

app.get('/library', (req, res) => {
  res.json(app.locals.library);
});

app.listen(port, () => {
  console.log(`Karaokeee server starting up on port ${port}`);
});
