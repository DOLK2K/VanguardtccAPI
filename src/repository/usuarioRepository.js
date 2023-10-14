import {con} from './connection.js'


export async function Cadastro (cliente) {
    const comando2 = `
    INSERT INTO tb_cadastro(  ds_email, nr_telefone, ds_senha, nm_nome_completo)
				value (?, ?, ?, ?);`

    const [resposta] = await con.query(comando2, [cliente.email, cliente.telefone, cliente.senha, cliente.nome_completo])
    cliente.id = resposta.insertId;

    return cliente;

}

export  async function login (email, senha) {
    const  comando = 
    `SELECT id_login AS id,
    ds_email AS email
    FROM tb_loginn
    WHERE ds_email = ?
    AND ds_senha = ?`

    const [linhas] = await con.query(comando, [email, senha])
    console.log(linhas)
    return linhas[0]; 
}
