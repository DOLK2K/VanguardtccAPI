create database meutcccDB;
use meutcccDB;

create table tb_loginn (
id_login	int primary key auto_increment,
ds_email	varchar(200),
ds_senha	varchar(200)
);

select * from tb_loginn;

insert into tb_loginn ( ds_email, ds_senha)
			values ( 'virgilchupeta@gmail.com', '1234');
       
            
	SELECT id_login AS 	id,
    ds_email  AS	email
    from tb_loginn
    WHERE ds_email =	'virgilchupeta@gmail.com'
    AND ds_senha	=	'1234'
    
