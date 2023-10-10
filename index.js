import 'dotenv/config'
import Usuariocontroller from './src/controller/usuarioController.js'
import sla from './src/controller/produtoController.js'
import  express  from 'express'
import cors from 'cors'

const server = express()
server.use(cors())
server.use(express.json())

server.use(Usuariocontroller)
server.use(sla)
server.listen(process.env.PORT, () => console.log(`API SUBIU ${process.env.PORT}`))