const express = require('express');
const cors = require('cors');
const homepageRoute = require('./routes/homepage');
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors()); // Enable Cross-Origin Resource Sharing (CORS)

// Example API route
app.get('/api/example', (req, res) => {
  res.send({ message: 'Hello from the backend!' });
});

app.use('/', homepageRoute);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});