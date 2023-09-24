create database meutccDB;
use meutccDB;


create table tb_cadastro (
id_cadastro	 int primary key auto_increment,
ds_email	 varchar(200),
nr_telefone		varchar(200),
ds_senha		varchar(200),
nm_nome_completo varchar(200)

);

create table tb_login (
id_login	int primary key auto_increment,
id_cadastro	int,
ds_email	varchar(200),
ds_senha	varchar(200)
);


insert into tb_cadastro (id_cadastro, ds_email, nr_telefone, ds_senha,nm_nome_completo)
			values (1, 'vinigamer@gmail.com', '1212321', '1234', 'chupetacompleto');
            
            
	select id_cadastro 	id,
    ds_email	email,
    nr_telefone telefone
    from tb_cadastro
    where ds_email =	'chupeta@gmail.com'
    and ds_senha	=	'1234'