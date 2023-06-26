require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/may', (req, res) => {
    res.send('hi may full stack course!');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});