"use strict";
exports.__esModule = true;
var express_1 = require("express");
var cors_1 = require("cors");
var app = (0, express_1["default"])();
var PORT = 4000;
app.use((0, cors_1["default"])());
app.use(express_1["default"].json());
app.get('/api/hello', function (req, res) {
    res.json({ message: 'Hello from the backend!' });
});
app.listen(PORT, function () {
    console.log("Server running on http://localhost:".concat(PORT));
});
