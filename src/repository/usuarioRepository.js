import {con} from './connection.js'

export  async function login (email, senha) {
    const  comando = 
    `select id_cadastro  	id,      
    ds_email	email,
    nr_telefone telefone
    from tb_cadastro
    where ds_email =	'?'
    and ds_senha	=	'?`

    const [linhas] = await con.query(comando, [email, senha])

    console.log(linhas)
    return linhas; 
}

