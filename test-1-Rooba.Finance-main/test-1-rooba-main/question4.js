const express = require('express');
const app = express();

function logRequest(req, res, next) {
    const timestamp = new Date().toISOString();
    const method = req.method;
    const url = req.originalUrl;
    const accessToken = req.headers.authorization || 'No access token provided';
    console.log(`[${timestamp}] ${method}: ${url}, AccessToken: "${accessToken}"`);
    next();
}

app.use(logRequest);

app.get('/API/users', (req, res) => {
    res.send('List of users');
});

app.post('/API/users', (req, res) => {
    res.send('Create a new user');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});





