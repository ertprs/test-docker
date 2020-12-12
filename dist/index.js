"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server"));
const express_1 = __importDefault(require("express"));
const api_1 = __importDefault(require("./server/api"));
const server = server_1.default.instance;
// server.app.use( cors() )
// server.app.use( cors() )
server.app.use(express_1.default.json());
server.app.use('/api/v1', api_1.default);
