const express = require('express');

const app = express();

app.get("/", (req, res) => {
    return res.send("Server running...");
});

app.listen(3333);