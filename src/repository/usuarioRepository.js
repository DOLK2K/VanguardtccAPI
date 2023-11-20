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
    `SELECT id_cadastro AS id,
    ds_email AS email,
    nm_nome_completo AS nome
    FROM tb_cadastro
    WHERE ds_email = ?
    AND ds_senha = ?`

    const [linhas] = await con.query(comando, [email, senha])
    console.log(linhas)
    return linhas[0]; 
}



export async function Adm (email2,senha2) {
    const comando3 =
    `
    SELECT id_adm AS id,
    ds_email AS email,
    nm_nome AS nome
    FROM tb_adm
    WHERE ds_email = ?
    AND ds_senha = ?`   


    const [linhass] = await con.query(comando3, [email2,senha2])
    return linhass[0]

}

