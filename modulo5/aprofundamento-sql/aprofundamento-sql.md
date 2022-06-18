CREATE TABLE Movie (
	id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    release_Date DATE NOT NULL,
    rating INT NOT NULL
);

INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"001",
    "Se Eu Fosse Você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
    "2006/06/01",
    7
);

INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"002",
    "Doce de mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
    "2012/12/27",
    10
),
(
"003",
"Dona Flor e Seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce",
"2017/11/02",
8),
(
"004",
"Deus é Brasileiro",
"Cansado da humanidade, Deus resolve tirar férias para descansar e procura alguém no Brasil capaz de substituí-lo. O borracheiro e pescador Taoca e a solitária Madá deverão guiá-lo até Quincas das Mulas, candidato de Deus a santo.",
"2003/01/31",
9

);

#EXERCICIO 01

ALTER TABLE Actor ADD favorite_ice_cream_flavor VARCHAR(255);

SELECT *FROM Actor;

ALTER TABLE Actor ADD type VARCHAR(255) DEFAULT "NotDirector";

SELECT *FROM Actor;

#1-A - ESSE COMANDO APAGGARIA A COLUNA SALARIO

#1-B ESSE COMANDO ALTERA A QUANTIDADE DE CARACTERIS DA COLUNA GENERO

#1 -C 

ALTER TABLE Actor MODIFY gender VARCHAR(100);

describe Actor;
SELECT *FROM Actor;

#2-A 

UPDATE Actor
SET 
name = "Moacyr Franco",
birth_data = "2020-02-10"
WHERE id = "003";

SELECT *FROM Actor;

#2 -B 
UPDATE Actor
SET name = "JULIANA PÃES"
WHERE name = "Juliana Paes";
# APRESENTA O ERRO 1175 POIS O JULIANA PAES FOI SUBSTITUIDA POR MOACIR FRANCO

# 2- C
UPDATE Actor
SET 
name = "Moacyr Franco",
birth_data = "2020-02-10",
salary = 600000,
gender = "male"
WHERE id = "005";

SELECT *FROM Actor;
# fica ocupado duas linhas com o mesmo ator 
# 2-D 

UPDATE Actor
SET 
name = "Juliana Paes",
birth_data = "1979-03-06",
salary = 719333.33,
gender = "female"
WHERE id = "007";

SELECT *FROM Actor;
# mesmo pedido para atualizar com um id que não existe nao deu erro nem alterou nem uma linha.

# 3 A 
DELETE FROM Actor WHERE id = "001";


SELECT *FROM Actor;

