import { Router } from "express";
import {Adm, Cadastro, login} from '../repository/usuarioRepository.js'
const endpoint = Router()


endpoint.post('/usuario', async (req,resp) => {
    try {
        let usuario = req.body
        
        if(!usuario.email) {
            throw new Error('email obrigatorio')
        }

        if(  (!usuario.telefone)) {
             throw new Error('numero invalido ou campo vazio')
        }

       if(!usuario.senha) {
        throw new Error ('senha obrigatório')
       }

       if(!usuario.nome_completo) {
        throw new Error ('Nome obrigatorio')
       }
       
       let r = await Cadastro(usuario)
       resp.send(r)

       if(!usuario) {
        throw new Error('credenciais invalidas ou está vazio os campos')
       }
       
    }catch(err) {
        resp.status(500).send({
            erro:err.message
        });
    }
})

endpoint.post('/usuario/login', async (req, resp) => {
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


endpoint.post ('/administrador', async (req, resp) => {
    try{
        const {email2, senha2 } = req.body

        const resposta2 = await Adm(email2,senha2)
        if(!resposta2) {
            throw new Error('credencias invalidas');
        }
        resp.send(resposta2)

        
    }catch (err) {
        resp.status(401).send({
            erro: err.message
        });
    }
})



export default endpoint;


