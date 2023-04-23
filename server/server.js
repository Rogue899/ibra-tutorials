const express = require('express');
const cors = require('cors');
const routes = require('./routes/routes');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  res.setHeader('Content-Security-Policy', "default-src 'none'; script-src 'self'; connect-src 'self'; style-src 'self' 'unsafe-inline'; font-src 'self'; img-src 'self' data: https://source.unsplash.com;");
  next();
});

app.use('/', routes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
