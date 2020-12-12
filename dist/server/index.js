"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const whatsapp_web_js_1 = require("whatsapp-web.js");
class Server {
    constructor() {
        console.log('# Building server.');
        console.log('# Building server2.');
        this.app = express_1.default();
        this.port = '3000';
        this.httpServer = http_1.default.createServer(this.app);
        this.wa = new whatsapp_web_js_1.Client({
            // session: (fs.existsSync( SESSION_FILE_PATH )) && JSON.parse( fs.readFileSync( SESSION_FILE_PATH ).toString() ),
            restartOnAuthFail: true,
            takeoverOnConflict: false,
            puppeteer: {
                args: [
                    '--no-sandbox',
                    '--disable-setuid-sandbox',
                    '--disable-dev-shm-usage'
                ],
                headless: false,
            },
        });
        this.init();
        console.log('WA INIT');
        this.wa.initialize().then(x => {
            // console.log(x.toString())
            console.log('wa inited');
        });
        this.wa.on('qr', (qr) => {
            // console.log( `[${Date.parse('DD/m/YY')}]`, 'new qr' )
            console.log('# WA New QR.');
            // this.status = {
            //     status: 'QR',
            //     data: qr
            // }
            // this.io.emit( 'status', this.status )
        });
    }
    static get instance() {
        return this._instance || (this._instance = new this());
    }
    init() {
        this.httpServer.listen(this.port, () => { console.log(`# Server running at port ${this.port}.`); });
    }
}
exports.default = Server;
