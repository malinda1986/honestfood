const express = require('express');
const {location} = require('../controller');
const router = express.Router();

function LocationRoutes(handler) {
    router.route('/address')
        .post(handler(location.findLocation));
    return router;
}
module.exports = LocationRoutes;

