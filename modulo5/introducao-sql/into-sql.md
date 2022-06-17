USE `guimaraes-4211221-francineide-silva`;

CREATE TABLE Actor (
id VARCHAR (255) PRIMARY KEY,
name VARCHAR (255) NOT NULL,
salary FLOAT NOT NULL,
birth_data DATE NOT NULL,
gender VARCHAR (6) NOT NULL
);
## A
### O ID VAI SER A CHAVE PRIMAIRA E SERA UMA STRING, 
## O NAME TAMBEM SERA UM STRING
## A DATA DE ANIVERSARIO SERA UMA DATA E NÃO PODE SER NULA 
## GENERO TAMBEM TEM QUE SER UMA STRING

## B
## SHOW DATABASES APRESENTA OS BANCOS DE DADOS DISPONIVEIS NO SERVIDO
##  SHOW TABLES APRESENTA AS TABELAS DO BANCO DE DADOS ATUAL

## C 
## DESCRIBE- Este comando descreve a estrutura de tabelas com suas colunas e tipo de dados
## No caso DESCRIBE ACTOR  ele vai mostra a estutura da tabela 

## 2

INSERT INTO Actor (id, name, salary, birth_data, gender)
VALUES ("001", "Tony Ramos", 40000, "1948-08-25", "male");

## A 
INSERT INTO Actor (id, name, salary, birth_data, gender)
VALUES ("002", "Gloria Pires", 1200000, "1963-08-23","female");

##B 
INSERT INTO Actor (id, name, salary, birth_data, gender)
VALUE ("002", "Fernanda Montinegro", 300000, "1964-07-15","female");
## NÃO PERMINTE COLOCAR POIS A PRIMARY KEY JA EXISTE

## erro code 1062: DUPLICATE ENTRY "002" FOR KEY "PRIMARY" (ENTRADA DUPLICADA "002" PARA A CHAVE "PRIMARY")

##C 
INSERT INTO Actor (id, name, salary)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

## erro code 1136: Columm count doesn"t match value count at row 1 (A contagem de colunas não corresponde à contagem de valores na linha 1)

## D 
INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);

## Error code 1054: Unknown column "brith_date" in field list" (Coluna desconhecida "brith_date" na lista de campos")

## E 

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);

## APRESENTOU O MESMO ERRO "## Error code 1054: Unknown column "brith_date" in field list" (Coluna desconhecida "brith_date" na lista de campos")"

## F -C 
INSERT INTO Actor (id, name, salary, birth_data, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

## F D 
INSERT INTO Actor (id, name, salary, birth_data, gender)
VALUES(
  "004", 
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);

## F E 
INSERT INTO Actor (id, name, salary, birth_data, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

SELECT * FROM Actor;

SELECT id, salary from Actor;

SELECT id, name from Actor WHERE gender = "male";

## 3- A 
SELECT id, name, salary, birth_data FROM Actor WHERE gender = "female";

## 3- B 

SELECT salary FROM Actor WHERE name= "Tony Ramos";

## 3 - C 

SELECT * FROM Actor WHERE gender = "invalid";
## não deu nem um erro , pois não existe nem um gender invalido

## 3 -D 
SELECT id , name, salary FROM Actor WHERE salary < 500000;

SELECT * FROM Actor;

## 3-D 
SELECT id, nome from Actor WHERE id = "002";
## Error code 1054: UnKnown column "nome in field list (Código de erro 1054: Coluna desconhecida "nome" na lista de campos)  
## a tabela foi crida com "NAME" e não "nome"

SELECT id, name from Actor WHERE id = "002";

## 5 
SELECT * FROM Actor WHERE (name LIKE "A%" or name LIKE "J%") AND salary > 300000 ;
## 5-A - ela retorna os atores com as iniciais informada na query e com o salario mais baixo que o falor informado

## 5-B 
SELECT * FROM Actor WHERE name NOT LIKE "A%" AND salary > 350000;

## 5-C 
SELECT * FROM Actor WHERE name LIKE "%g%" OR name LIKE "%G%";

## 5-D 

SELECT * FROM Actor
WHERE (name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%")
  AND salary BETWEEN 350000 AND 900000;
