CREATE TABLE IF NOT EXISTS users (
    email varchar NOT NULL PRIMARY KEY  ,
    password varchar NOT NULL ,
    rol varchar NOT NULL ,
    nit numeric ,
    phone numeric ,
    type_document varchar  ,
    number_document varchar ,
    full_name varchar 
);

/**
Create user judicial person
**/
INSERT INTO users(email, password, rol, nit, phone)
    VALUES('icesi@icesi.edu.com','12345','judicial person', 123456789, 3103103100);

/**
Create user natural person
**/
INSERT INTO users(email, password, rol, type_document, number_document,full_name)
    VALUES('luisfcv97@gmail.com','12345','natural person', 'cc', '1116275229','Luis Fernando Cruces Vidal');