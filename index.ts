import Server from './server'
import express from 'express'
import cors from 'cors'
import api from './server/api'

const server = Server.instance

// server.app.use( cors() )
// server.app.use( cors() )
server.app.use( express.json() )
server.app.use( '/api/v1', api )