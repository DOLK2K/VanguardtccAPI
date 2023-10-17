import { Router } from "express";
import { Suporte } from "../repository/homeSuporteRepository.js";

const endpoint = Router()

endpoint.post('/Suportehome', async (req, resp) => {

    try {
        let Suportee = req.body
        

        if(!Suportee.nome) {
            throw new Error('nome está vazio')
        }

        if((!Suportee.telefone)) {
            throw new Error('nescessário preencher o Telefone')
        }

        if(!Suportee.email) {
            throw new Error('nescessário preencher email ')
        }

        if(!Suportee.mensagem) {
            throw new Error ('coloque a mensagem que você enviarar pro Suporte')
        }

        if(!Suportee) {
            throw new Error('credenciais invalida')
        }
        
        else{
            let f = await Suporte(Suportee)
        resp.send(f)

        }

        


    }catch(err) {
       resp.status(404).send ({
            erro:'erro'
       })
    }
})
 
export default endpoint;