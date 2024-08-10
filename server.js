const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000;

let userData = [];

// Middleware
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Public', 'index.html'));
});

app.post('/register', (req, res) => {
    console.log('User data received:', req.body);
    let newUser = req.body;
    userData.push(newUser);
    res.status(200).json({ message: 'User registered successfully' });
});

// Route to serve users.html
app.get('/users', (req, res) => {
    res.sendFile(path.join(__dirname, 'Public', 'users.html'));
});

// Route to send user data
app.get('/api/users', (req, res) => {
    res.status(200).json(userData);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
