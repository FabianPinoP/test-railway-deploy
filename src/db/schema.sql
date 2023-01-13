CREATE DATABASE users;
\c user;

CREATE TABLE users (id SERIAL, nombre VARCHAR(50), email VARCHAR(50));


INSERT INTO users values
(DEFAULT, 'fabian', 'fabian@test.com' ),
(DEFAULT, 'vixtor','victor@test.com' );


SELECT * FROM medicamentos;
SELECT * FROM personal;
