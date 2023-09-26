import {con} from './connection.js'

export  async function login (email, senha) {
    const  comando = 
    `SELECT id_login AS id,
    ds_email AS email
FROM tb_login
WHERE ds_email = 'vinigamer@gmail.com'
AND ds_senha = '1234';`

    const [linhas] = await con.query(comando, [email, senha])

    console.log(linhas)
    return linhas; 
}

