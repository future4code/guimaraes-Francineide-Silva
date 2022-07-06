# Exercicio Relaçoes-sql

CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
);

#1-A 
#Chave estrangeira, ou Foreign Key (FK), ou ainda chave externa é a chave 
#que permite a referência a registros oriundos de outras tabelas. Ou seja, 
#é o campo ou conjunto de campos que compõem a chave primária de uma outra tabela

## 1-B
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
		"001",
    "Muito bom!",
    7,
		"004"
),
(
"002",
"Excelente",
10,
"001"
),
( 
"003",
"Muito Bom",
8,
"003"
),
(
"004",
"Maravilhoso",
9,
"002"

);

SELECT *FROM Movie;

#1 C 
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
		"005",
    " Bom!",
    8,
		"007"
);
#Error code: 1452  cannot add or update a child row: a foreign key constranint fail ( não foi encontrado o id primairo para relacionar o cometario nema chave extrangeira)


# 1 D
ALTER TABLE Movie DROP COLUMN rating;

SELECT *FROM Movie;

#1 E 
DELETE FROM Movie WHERE id= 001;
# Error code: 1175 you are using safe update mode and you trid to uptade a table without a WHERE that uses a KEY column ( não é possivel acessar pelo id informado)


#2 
CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);

SELECT *FROM MovieCast;

#2 A- a nova tabela vai aprestanta os id's dos filmes e dos atores 

# 2 B 
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"004",
    "001"
),
(
"001",
"003"
),
(
"002",
"003"
),
(
"003",
"004"
),
(
"004",
"002"
),
(
"002",
"004"
);

SELECT *FROM MovieCast;

# 2-C 
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"007",
    "001"
);
# como não existe o filme ele não tem como relacionar com o ator (Error code :1452 Cannot add or update a child row: a foreign key constraint fails)

# 2-D 
DELETE FROM MovieCast WHERE id= 001;
# como exiete uma relação ele não consegue identificar o Id

# 3 
SELECT * FROM Movie 
INNER JOIN Rating ON Movie.id = Rating.movie_id;
# 3 A - a query está fazendo a união das duas tabelas com base no id

#3 B 

SELECT m.title as movie_name, m.id as movie_id, r.rate as movie_rate
FROM Movie as m INNER JOIN Rating as r ON m.id = r.movie_id;

# 4 A 
SELECT m.id as movie_id, m.title, r.rate as rating, r.comment as rating_comment
FROM Movie m LEFT JOIN Rating r ON m.id = r.movie_id;

# 4 B 
SELECT m.id as movie_id, m.title, mc.actor_id FROM Movie m
RIGHT JOIN MovieCast mc ON mc.movie_id = m.id;

# 4 C 
SELECT AVG(r.rate), m.id, m.title FROM Movie m
LEFT JOIN Rating r ON m.id = r.movie_id GROUP BY (m.id);

SELECT AVG(r.rate), m.id, m.title FROM Movie m
RIGHT JOIN Rating r ON m.id = r.movie_id GROUP BY (m.id);

SELECT AVG(r.rate), m.id, m.title FROM Movie m
INNER JOIN Rating r ON m.id = r.movie_id GROUP BY (m.id);