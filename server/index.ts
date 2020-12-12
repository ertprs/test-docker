import express from 'express'
import http from 'http'

export default class Server{

    private static _instance: Server

    public app: express.Application
    private port: string
    private httpServer: http.Server

    constructor(){

        console.log( '# Building server.')

        this.app = express()
        this.port = '3000'
        this.httpServer = http.createServer( this.app )

        this.init()

    }

    public static get instance() {
        return this._instance || ( this._instance = new this() )
    }

    private init(){
        this.httpServer.listen( this.port, () => { console.log( `# Server running at port ${ this.port }.`, /* new Date() */ ) } )
    }    

}