create database meutcccDB;
use meutcccDB;

create table tb_loginn (
id_login	int primary key auto_increment,
ds_email	varchar(200),
ds_senha	varchar(200)
);


       create table tb_cadastro (
	id_cadastro 		int primary key auto_increment,
    ds_email 			varchar(200) not null, 
    nr_telefone			varchar(200) not null, 
    ds_senha 			varchar(200) not null, 
    nm_nome_completo	varchar(200) not null
    
    );
    