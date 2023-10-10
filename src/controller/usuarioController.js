import { Router } from "express";
import {login} from '../repository/usuarioRepository.js'
const server = Router()


server.get('/usuario', async (req,resp) => {
    try {

        const resposta = await login(email, senha)
        if(!resposta) {
            throw new Error('credenciais invalidas')
        }
        resp.send(resposta)

       
    }catch(err) {
        resp.status(401).send({
            erro:err.message
        });
    }
})

server.post('/usuario/login', async (req, resp) => {
    try{
        const {email, senha } = req.body

        const resposta = await login(email,senha)
        if(!resposta) {
            throw new Error('credencias invalidas');
        }
        resp.send(resposta)

        if(!resposta.email) {
            throw new Error('email obrigatorio')
        }

    }catch (err) {
        resp.status(401).send({
            erro: err.message
        });
    }
})




export default server;


