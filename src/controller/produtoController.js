import {InserirProduto} from '../repository/produtoRepository.js'

import { Router } from 'express'
const server = Router();

server.post('/produto', async (req, resp ) => {
    try{
        const ProdutoInserido = req.body;

       const produto = await InserirProduto(ProdutoInserido)

        resp.send(produto)
    } catch (err) {
        resp.send(400).send({
            erro: err.message
        })
    }
})

export default server;