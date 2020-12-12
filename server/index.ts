import express from 'express'
import http from 'http'
import WAWebJS, { Client as WAClient } from 'whatsapp-web.js'

export default class Server{

    private static _instance: Server

    public app: express.Application
    private port: string
    private httpServer: http.Server
    public wa: WAClient

    constructor(){

        console.log( '# Building server.')
        console.log( '# Building server2.')

        this.app = express()
        this.port = '3000'
        this.httpServer = http.createServer( this.app )
        this.wa = new WAClient({

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
                // executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
            },            

        })

        
        this.init()
        
        console.log('WA INIT')
        this.wa.initialize().then( x => {
            // console.log(x.toString())
            console.log('wa inited')
        })

        this.wa.on( 'qr', ( qr ) => {

            // console.log( `[${Date.parse('DD/m/YY')}]`, 'new qr' )
            console.log('# WA New QR.', /* new Date() */)
            // this.status = {
            //     status: 'QR',
            //     data: qr
            // }
            // this.io.emit( 'status', this.status )
         
        })

    }

    public static get instance() {
        return this._instance || ( this._instance = new this() )
    }

    private init(){
        this.httpServer.listen( this.port, () => { console.log( `# Server running at port ${ this.port }.`, /* new Date() */ ) } )
    }    

}