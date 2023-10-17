import { con } from "./connection.js";

export async function Suporte(suporte){
    const comando = `
    INSERT INTO  tb_suporte_home (nm_nome, ds_telefone, ds_email, ds_mensagem)
    value (?, ?, ?,? );
    `

    const [resp] = await con.query(comando, [suporte.nome, suporte.telefone, suporte.email, suporte.mensagem]);
     suporte.id = resp.insertId
    return suporte;
}