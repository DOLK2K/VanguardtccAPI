import  {con} from "./connection.js"


export async  function CadastroProduto(produto) {
    const comando = `
    insert into tb_produto(id_produto, nm_produto, ds_quantidade, ds_preco, ds_valortotal)
	values (?, ?, ?, ?, ? );
    `
    const [resposta] = await con.query(comando, [produto.produto, produto.nome, produto.quantidade, produto.preco, produto.valortotal]);
    produto.id = resposta.insertid;

    return produto;
}