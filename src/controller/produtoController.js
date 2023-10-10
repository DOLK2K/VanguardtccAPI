import {CadastroProduto} from '../repository/produtoRepository.js'

import { Router } from 'express'
const server = Router();

server.post('/produto', async (req, resp ) => {
    try{
        const ProdutoInserido = req.body;

       const produto = await CadastroProduto(ProdutoInserido)

        resp.send(produto)
    } catch (err) {
        resp.send(400).send({
            erro: err.message
        })
    }
})

export default server;