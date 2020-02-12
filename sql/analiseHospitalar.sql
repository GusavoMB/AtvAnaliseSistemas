CREATE DATABASE `analise_gp_hopitalar`;

USE ananalise_gp_hospitalar;

CREATE TABLE `analise_gp_hopitalar`.`hospital` (
	`cpf` VARCHAR(11) NOT NULL , 
    `nome` VARCHAR(50) NOT NULL , 
    `idade` INT(3) UNSIGNED NOT NULL , 
    `telefone` INT(11) NOT NULL , 
    `descricao` VARCHAR(150) NULL ,
    PRIMARY KEY (`cpf`(11))
 ) ENGINE = InnoDB;

INSERT INTO hospital (cpf, nome, idade, telefone)
values('00000000000','João Almeida', 21,981222233);

INSERT INTO hospital (cpf, nome, idade, telefone, descricao)
values('11111111111','Maria Joaquina', 21,982224444, 'Dor de cabeça');

INSERT INTO hospital (cpf, nome, idade, telefone, descricao)
values('22222222222','Mario Costa', 33,981112222, 'Problema renal, ele quer uma cirurgia');

INSERT INTO hospital (cpf, nome, idade, telefone, descricao)
values('33333333333','Pedro Neto', 14,981552043, 'Dores no braço que teve uma fratura cerca de 5 meses atras');

INSERT INTO hospital (cpf, nome, idade, telefone)
values('44444444444','Antônio', 52,991942000);

INSERT INTO hospital (cpf, nome, idade, telefone, descricao)
values('55555555555','Vinícius Santos', 25,82002044, 'Fratura na perna');

SELECT * FROM hospital;