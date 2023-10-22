import {con} from './connection.js'

export async function Produto(adicionar) {

    const add = `
    insert into tb_cadastro_produto (ds_descricao_produto, ds_tipo, ds_categoria, qtd_quantidade , bt_disponivel, nr_preco_produto, nr_preco_venda)
		values(?,?,?,?,?,?,?);`

    const [resposta] = await con.query( add, [adicionar.descricao, adicionar.tipo, adicionar.categoria, adicionar.quantidade, adicionar.disponivel, adicionar.preco, adicionar.frete ])
    adicionar.id = resposta.insertId;
    return resposta;
}