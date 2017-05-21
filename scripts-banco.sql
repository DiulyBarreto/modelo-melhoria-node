CREATE DATABASE modelo_melhoria_node;

USE modelo_melhoria_node;

CREATE TABLE Modelo (
	idModelo INT NOT NULL AUTO_INCREMENT,
	sigla VARCHAR(10) NOT NULL,
	nome VARCHAR(50) NOT NULL,
	descricao VARCHAR(100) NOT NULL,
	PRIMARY KEY (idModelo)
);

INSERT INTO Modelo(sigla, nome, descricao)
	VALUES('MT', 'Modelo de Testes', 'Inserção de um registro fake para teste');
	
select * from modelo;