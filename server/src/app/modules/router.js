const express = require('express');
const locationHandler = require('./location');
const api = require('../api');

const apiVersion = '/api/v1'
const routeHandler = (middleware) => {
    const router = express.Router();
    const {api: {cors}} = middleware;
    router.use(cors());
    router.use(`${apiVersion}/users`, locationHandler.routes(api.http));
    return router;
};

module.exports = {
    routeHandler,
};
