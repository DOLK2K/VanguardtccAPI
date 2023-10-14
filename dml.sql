use meutcccDB;

select * from tb_loginn;

insert into tb_loginn ( ds_email, ds_senha)
			values ( 'virgilchupeta@gmail.com', '1234'),
					('usuario@gmail.com', 1234);
       
            
	SELECT id_login AS 	id,
    ds_email  AS	email
    from tb_loginn
    WHERE ds_email =	'virgilchupeta@gmail.com'
    AND ds_senha	=	'1234'
    
     