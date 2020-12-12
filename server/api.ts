import { Router, Request, Response } from 'express'
import Server from './index'

const api = Router()

api.get( '/', ( req: Request, res: Response ) => {

    res.json({
        msg: 'Hello world'
    })

})

export default api