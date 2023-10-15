use meutcccDB;

INSERT INTO tb_cadastro(  ds_email, nr_telefone, ds_senha, nm_nome_completo)
				values  ('viniciusUser@gmail.com', '28382983', '123456', 'Vinicius gonçalves');

insert into tb_loginn ( ds_email, ds_senha)
			values ( 'virgilchupeta@gmail.com', '1234'),
					('usuario@gmail.com', 1234);
                    
insert into tb_administrador (ds_email, ds_senha) 
				values('administradorvinicius@gmail.com', '1234');
       
            
	SELECT * FROM tb_cadastro;
            select * from tb_loginn;
            select * from tb_administrador;
    
    SELECT id_administrador AS id,
    ds_email AS		email
    from tb_administrador
    WHERE ds_email = 'administradorvinicius@gmail.com'
    AND ds_senha ='1234';
    
    

	SELECT id_login AS 	id,
    ds_email  AS	email
    from tb_loginn
    WHERE ds_email =	'virgilchupeta@gmail.com'
    AND ds_senha	=	'1234';
    