const express = require('express');
const { response } = require('express');

const routes = express.Router();

routes.post("/ongs", (req, res) => {
    const data = req.body;
    console.log(data);

    return response.json({

    });
});

module.exports = routes;