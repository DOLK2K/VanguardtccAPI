import 'dotenv/config'
import Usuariocontroller from './src/controller/usuarioController.js';
import SuporteController from './src/controller/homeSuporteController.js';
import ProdutoController from './src/controller/produtoController.js'
import  express  from 'express'
import cors from 'cors'

const server = express()
server.use(cors())
server.use(express.json())

server.use('/storage/capaProduto', express.static('storage/capaProduto'))
server.use(Usuariocontroller);
server.use(SuporteController);
server.use(ProdutoController);
server.listen(process.env.PORT, () => console.log(`API SUBIU ${process.env.PORT}`))