use meutcccDB;

INSERT INTO tb_cadastro(  ds_email, nr_telefone, ds_senha, nm_nome_completo)
				values  ('viniciusUser@gmail.com', '28382983', '123456', 'Vinicius gonçalves');

insert into tb_loginn ( ds_email, ds_senha)
			values ( 'virgilchupeta@gmail.com', '1234'),
					('usuario@gmail.com', 1234);
                    
insert into tb_adm (ds_email, ds_senha) 
				values('adm@gmail.com', '1234567');
       
       
insert into tb_cadastro_produto (ds_descricao_produto, ds_tipo, ds_categoria, qtd_quantidade , bt_disponivel, nr_preco_produto, nr_preco_venda)
		values('Bota Impermeável Timberland', 'bota', 'Vestuario', '18', true, '39.99', '9.99');
            
            
            
	select * from tb_cadastro_produto;
	SELECT * FROM tb_cadastro;
            select * from tb_loginn;
            select * from tb_adm;
    
    SELECT id_adm AS id,
    ds_email AS		email
    from tb_adm
    WHERE ds_email = 'adm@gmail.com'
    AND ds_senha ='1234567';
    
	SELECT id_login AS 	id,
    ds_email  AS	email
    from tb_loginn
    WHERE ds_email =	'virgilchupeta@gmail.com'
    AND ds_senha	=	'1234';
                        