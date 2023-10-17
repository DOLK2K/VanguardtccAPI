use meutcccDB;



insert into tb_loginn (ds_email, ds_senha, nm_user)
			values ( 'virgilchupeta@gmail.com', '1234','toninho');
					
		
#efetua login do user                   
select ds_email as email,
		nm_user as user 
 from tb_loginn
where ds_email = 'virgilchupeta@gmail.com'
and 	  ds_senha = '1234';

select * 
from tb_login 
inner join tb_cadastro
on tb_login.id_cadastro = tb_cadastro.id_cadastro;
	
    
                    
insert into tb_administrador (ds_email, ds_senha) 
				values('administradorvinicius@gmail.com', '1234');
                
INSERT INTO  tb_suporte_home (nm_nome, ds_telefone, ds_email, ds_mensagem)
				value ('viniciusteste', '119450475', 'empresa@gmail.com','a empresa de vocês é uma bosta' );
            
	SELECT * FROM tb_cadastro;
            select * from tb_loginn;
            select * from tb_administrador;
            select * from tb_suporte_home;
            
            drop table tb_suporte_home; 
    
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