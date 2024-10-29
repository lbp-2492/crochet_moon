var express = require('express');
var cors = require('cors');
/** @type {import('express').Application} */
var app = express();
var PORT = 4000;
app.use(cors());
app.use(express.json());
app.get('/api/hello', function (req, res) {
    res.json({ message: 'Hello from the backend!' });
});
app.listen(PORT, function () {
    console.log("Server running on http://localhost:".concat(PORT));
});
