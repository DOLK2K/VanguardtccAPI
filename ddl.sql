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
    
CREATE TABLE tb_adm (
    id_adm INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    ds_email VARCHAR(200) not null,
    ds_senha VARCHAR(200) not null
);


create table tb_produto	 (
	id_produto	int primary key auto_increment,
    ds_descricao	varchar(200),
    ds_quantidade 	varchar(200),
    ds_preco		varchar(200),
    ds_total		varchar(200)

);

create table tb_cadastro_produto (
id_tb_cadastro_produto   int primary key auto_increment,
ds_descricao_produto     varchar(200),
ds_tipo                  varchar(200),
ds_categoria			 varchar(200),
qtd_quantidade           integer,
bt_disponivel 			 boolean,
nr_preco_produto         varchar(200),
nr_preco_venda           varchar(200)
);


-- descricao: 
-- tipo:
-- categoria:
-- quantidade:
-- disponivel:
-- preco: 
-- venda: