const express = require('express');
const app = express();

const requestLoggerMiddleware = (req, res, next) => {
  const timestamp = new Date().toISOString();
  const { method, url } = req;
  const accessToken = req.headers.authorization || 'N/A';

  const logMessage = `[${timestamp}] ${method}: ${url}, AccessToken: "${accessToken}"`;

  console.log(logMessage);

  next();
};

app.use(requestLoggerMiddleware);

app.get('/api/users', (req, res) => {
  res.send('List of users');
});

app.post('/api/posts', (req, res) => {
  res.send('Post created');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
