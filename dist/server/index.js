"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
class Server {
    constructor() {
        console.log('# Building server.');
        this.app = express_1.default();
        this.port = '3000';
        this.httpServer = http_1.default.createServer(this.app);
        this.init();
    }
    static get instance() {
        return this._instance || (this._instance = new this());
    }
    init() {
        this.httpServer.listen(this.port, () => { console.log(`# Server running at port ${this.port}.`); });
    }
}
exports.default = Server;
