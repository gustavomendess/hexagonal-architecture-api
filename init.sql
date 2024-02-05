-- Conecta ao banco de dados padrão (postgres) para criar o novo banco de dados
\c postgres;

-- Verifica se o banco de dados já existe
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_database WHERE datname = 'projeto') THEN
    -- Se não existir, cria o banco de dados
    CREATE DATABASE projeto;
  END IF;
END $$;

-- Conexão ao banco de dados
\c projeto;

-- Criação da extensão uuid-ossp
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Criação da tabela usuarios
CREATE TABLE usuarios (
    id UUID PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);