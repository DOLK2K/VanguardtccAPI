import { Router } from "express";
import { EnviarImagem, Produto, buscarporid, buscarpornome, listartodosproduto } from "../repository/produtoRepository.js";
import multer from "multer";
const endpoint = Router()

const upload = multer({dest:'storage/capaProduto'});

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
        resp.status(404).send({
            erro:err.message
        })
     }
})


endpoint.put('/produto/:id/capa', upload.single('capa'), async (req,resp) => {
    try {
        const {id} = req.params;
        const imagem = req.file.path
        const resposta = await EnviarImagem (imagem, id)
        resp.status(204).send();

        if(resposta != 1 ) {
            throw new Error('a imagem nao pode ser salva')
        }
    }catch(err) {
        resp.status(400).send({
            erro:err.message
        })
    }
})



endpoint.get('/produto', async (req, resp) => {
    try {
        const resposta = await listartodosproduto()
        resp.send(resposta)
    }  catch (err) {
        resp.status(400).send ({
            erro:err.message
        })
    }
})


endpoint.get('/produto/busca', async (req, resp) => {
    try {

        const {nome}=  req.query 
        const resposta = await buscarpornome(nome)
        resp.send(resposta)
    }  catch (err) {
        resp.status(400).send ({
            erro:err.message
        })
    }
})


endpoint.get('/produto/:id', async (req, resp) => {
    try {

        const id=  req.params.id 
        const resposta = await buscarporid( Number( id))
        resp.send(resposta)
    }  catch (err) {
        resp.status(400).send ({
            erro:err.message
        })
    }
})



export default endpoint;