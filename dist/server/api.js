"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const api = express_1.Router();
api.get('/', (req, res) => {
    res.json({
        msg: 'Hello world'
    });
});
exports.default = api;
