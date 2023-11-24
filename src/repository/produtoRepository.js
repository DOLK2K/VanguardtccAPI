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

export async function EnviarImagem(imagem, id) {
  const comando = `
      UPDATE  tb_cadastro_produto
      SET img_produto = ?
      WHERE id_tb_cadastro_produto = ?
  `;

  const [enviar] = await con.query(comando, [imagem, id]);
  return enviar.affectedRows;
}



export async function listartodosproduto () {
  const comando = `
  select id_tb_cadastro_produto      id,
        ds_descricao_produto        descricao,
        ds_tipo                     tipo,
        ds_categoria                categoria,
        qtd_quantidade              quantidade,
        bt_disponivel 				disponivel,
        nr_preco_produto   			preco,
        nr_preco_venda              frete
        from tb_cadastro_produto`;

        const [linhas] = await con.query(comando);
        return linhas
}



export async function buscarporid (id) {
  const comando = `
  select id_tb_cadastro_produto      id,
        ds_descricao_produto        descricao,
        ds_tipo                     tipo,
        ds_categoria                categoria,
        qtd_quantidade              quantidade,
        bt_disponivel 				disponivel,
        nr_preco_produto   			preco,
        nr_preco_venda              frete,
        img_produto               imagem
        from tb_cadastro_produto
        where id_tb_cadastro_produto = ?
        `;
        const [linhas] = await con.query(comando,[id]);
        return linhas[0]
}



export async function buscarpornome (nome) {
  const comando = `
  select id_tb_cadastro_produto      id,
        ds_descricao_produto        descricao,
        ds_tipo                     tipo,
        ds_categoria                categoria,
        qtd_quantidade              quantidade,
        bt_disponivel 				disponivel,
        nr_preco_produto   			preco,
        nr_preco_venda              frete
        from tb_cadastro_produto
        where  ds_descricao_produto like ?
        `;
        const [linhas] = await con.query(comando,[`%${nome}%`]);
        return linhas
}

//produto:
//tipo
//categoria
//quantidade
//disponivel
//preco
//frete