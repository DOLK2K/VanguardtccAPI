import { Router } from "express";
import { Produto } from "../repository/produtoRepository.js";

const endpoint = Router()


endpoint.post('/produto', async (req, resp) => {
    

    try {

    let usuario = req.body

    if(!usuario.descricao) {
        throw new Error('escreva o campo da descrição')
    }

    if(!usuario.tipo) {
        throw new Error('escreva o tipo do produto')
    }

    if(!usuario.categoria) {
        throw new Error('escreva a categoria do produto')
    }

    if(!usuario.quantidade) {
        throw new Error('digite a quantidade do produto')
    }

    if(!usuario.disponivel) {
        throw new Error('digite se o produto está disponivel ou não')
    }

    if(!usuario.preco) {
        throw new Error('digite o preço do produto')
    }

    if(!usuario.frete) {
        throw new Error('digite o numero do frete')
    }

    if(!usuario) {
        throw new Error('credenciais invalida')
    }

    let x = await Produto(usuario)
    resp.send(x);

    }catch(err) {
        resp.status(500).send({
            erro:err.mensage
        })
     }
})

export default endpoint;