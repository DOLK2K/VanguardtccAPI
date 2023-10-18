import { Router } from "express";
import { Suporte } from "../repository/homeSuporteRepository.js";

const endpoint = Router()

endpoint.post('/Suportehome', async (req, resp) => {

    try {
        let resposta = req.body
        
        if(!resposta.nome) {
            throw new Error('Preencha seu nome')
        }

        if(!resposta.telefone) {
            throw new Error('Preencha o numero de telefone')
        }

        if(!resposta.email) {
            throw new Error('Coloque seu email')
        }

        if(!resposta.mensagem) {
            throw new Error('Coloque a mensagem que deseja')
        }
        
      
        let x = await Suporte(resposta)
        resp.send(x)

        if(!resposta) {
            throw new Error('credenciais invalidas')
        }

    }catch(err) {
        resp.status(404).send({
            erro:err.message
        });
    }
})
 
export default endpoint;