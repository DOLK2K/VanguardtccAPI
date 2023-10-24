import {con} from './connection.js'

export async function Produto(adicionar) {

    const add = `
    insert into tb_cadastro_produto (ds_descricao_produto, ds_tipo, ds_categoria, qtd_quantidade , bt_disponivel, nr_preco_produto, nr_preco_venda)
		values(?,?,?,?,?,?,?);`

    const [resp] = await con.query(add, [adicionar.descricao, adicionar.tipo, adicionar.categoria, adicionar.quantidade, adicionar.disponivel, adicionar.preco, 
      adicionar.frete]);
    adicionar.id = resp.insertId
   return adicionar;
}

export async function EnviarImagem (imagem, id) {
  const comando = `
  insert into tb_produto_imagem(img_produto)
  values(?);    `

  const [enviar] = await con.query(enviar, [imagem, id]);
  return -+enviar.affectedRows  
} 