-- Apagando o banco de dados se existir
DROP DATABASE IF EXISTS dbloja;

-- Criando o banco de dados
CREATE DATABASE dbloja;

-- Acessando o banco de dados recém-criado
USE dbloja;


-- visualizando as tabelas
show tables; 

-- Criando a tabela de Clientes
CREATE TABLE tbCliente (
    idCli INT PRIMARY KEY,  -- Identificador único do cliente
    nome VARCHAR(45),       -- Nome do cliente
    telefone VARCHAR(45),   -- Telefone do cliente
    email VARCHAR(45)       -- E-mail do cliente
);

-- Criando a tabela de Vendedores
CREATE TABLE tbVendedor (
    idVend INT PRIMARY KEY,  -- Identificador único do vendedor
    nome VARCHAR(45)         -- Nome do vendedor
);

-- Criando a tabela de Formas de Pagamento
CREATE TABLE tbPagamento (
    idPag INT PRIMARY KEY,               -- Identificador único do pagamento
    forma_pagamento VARCHAR(45)          -- Descrição da forma de pagamento (ex: cartão, dinheiro)
);

-- Criando a tabela de Categorias de Produto
CREATE TABLE tbCategoria (
    idCat INT PRIMARY KEY,  -- Identificador único da categoria
    nome VARCHAR(45)        -- Nome da categoria (ex: eletrônicos, roupas)
);

-- Criando a tabela de Fornecedores
CREATE TABLE tbFornecedores (
    idForn INT PRIMARY KEY,  -- Identificador único do fornecedor
    cnpj VARCHAR(45),        -- CNPJ do fornecedor
    nome VARCHAR(45)         -- Nome do fornecedor
);

-- Criando a tabela de Produtos
CREATE TABLE tbProduto (
    idProd INT PRIMARY KEY,         -- Identificador único do produto
    nome VARCHAR(45),               -- Nome do produto
    preco DECIMAL(10,2),           -- Preço do produto (com duas casas decimais)
    qtd_estoque VARCHAR(45),        -- Quantidade em estoque
    categoria_id INT,               -- Referência à categoria do produto
    fornecedores_id INT,            -- Referência ao fornecedor do produto
    FOREIGN KEY (categoria_id) REFERENCES tbCategoria(idCat),  -- Chave estrangeira para a tabela de categorias
    FOREIGN KEY (fornecedores_id) REFERENCES tbFornecedores(idForn)  -- Chave estrangeira para a tabela de fornecedores
);

-- Criando a tabela de Vendas
CREATE TABLE tbVenda (
    idVen INT PRIMARY KEY,         -- Identificador único da venda
    valor_total DECIMAL(10,2),    -- Valor total da venda
    data DATETIME,                 -- Data e hora da venda
    cliente_id INT,                -- Referência ao cliente que fez a compra
    vendedor_id INT,               -- Referência ao vendedor que fez a venda
    pagamento_id INT,              -- Referência à forma de pagamento utilizada
    FOREIGN KEY (cliente_id) REFERENCES tbCliente(idCli),  -- Chave estrangeira para a tabela de clientes
    FOREIGN KEY (vendedor_id) REFERENCES tbVendedor(idVend),  -- Chave estrangeira para a tabela de vendedores
    FOREIGN KEY (pagamento_id) REFERENCES tbPagamento(idPag)  -- Chave estrangeira para a tabela de pagamentos
);

-- Criando a tabela de associação entre Vendas e Produtos
CREATE TABLE tbVenda_has_produto (
    produto_id INT,               -- Referência ao produto vendido
    venda_id INT,                 -- Referência à venda realizada
    PRIMARY KEY (produto_id, venda_id),  -- Chave primária composta
    FOREIGN KEY (produto_id) REFERENCES tbProduto(idProd),  -- Chave estrangeira para a tabela de produtos
    FOREIGN KEY (venda_id) REFERENCES tbVenda(idVen)  -- Chave estrangeira para a tabela de vendas
);


-- Visualizando tabelas criadas
SHOW TABLES;

-- Selecionando todos os dados da tabela de Clientes
SELECT * FROM tbCliente;
-- Selecionando todos os dados da tabela de Vendedores
SELECT * FROM tbVendedor;
-- Selecionando todos os dados da tabela de Formas de Pagamento
SELECT * FROM tbPagamento;
-- Selecionando todos os dados da tabela de Categorias
SELECT * FROM tbCategoria;
-- Selecionando todos os dados da tabela de Fornecedores
SELECT * FROM tbFornecedores;
-- Selecionando todos os dados da tabela de Produtos
SELECT * FROM tbProduto;
-- Selecionando todos os dados da tabela de Vendas
SELECT * FROM tbVenda;
-- Selecionando todos os dados da tabela de associação entre Vendas e Produtos
SELECT * FROM tbVenda_has_produto;

-- Inserindo dados na tabela de Clientes
INSERT INTO tbCliente (idCli, nome, telefone, email) VALUES
(1, 'João Silva', '(11) 98765-4321', 'joao.silva@email.com'),
(2, 'Maria Oliveira', '(21) 91234-5678', 'maria.oliveira@email.com'),
(3, 'Carlos Santos', '(31) 99876-5432', 'carlos.santos@email.com'),
(4, 'Ana Costa', '(41) 96543-2187', 'ana.costa@email.com'),
(5, 'Roberto Almeida', '(51) 93456-7890', 'roberto.almeida@email.com');

-- Inserindo dados na tabela de Vendedores
INSERT INTO tbVendedor (idVend, nome) VALUES
(1, 'Ana Pereira'),
(2, 'Roberto Lima'),
(3, 'Fernanda Machado'),
(4, 'Lucas Ferreira'),
(5, 'Mariana Souza');

-- Inserindo dados na tabela de Formas de Pagamento
INSERT INTO tbPagamento (idPag, forma_pagamento) VALUES
(1, 'Cartão de Crédito'),
(2, 'Dinheiro'),
(3, 'Transferência Bancária'),
(4, 'Boleto'),
(5, 'Pix');

-- Inserindo dados na tabela de Categorias
INSERT INTO tbCategoria (idCat, nome) VALUES
(1, 'Eletrônicos'),
(2, 'Roupas'),
(3, 'Alimentos'),
(4, 'Móveis'),
(5, 'Brinquedos');

-- Inserindo dados na tabela de Fornecedores
INSERT INTO tbFornecedores (idForn, cnpj, nome) VALUES
(1, '12.345.678/0001-90', 'Fornecedor A'),
(2, '98.765.432/0001-00', 'Fornecedor B'),
(3, '11.223.344/0001-55', 'Fornecedor C'),
(4, '55.666.777/0001-88', 'Fornecedor D'),
(5, '22.333.444/0001-22', 'Fornecedor E');

-- Inserindo dados na tabela de Produtos
INSERT INTO tbProduto (idProd, nome, preco, qtd_estoque, categoria_id, fornecedores_id) VALUES
(1, 'Smartphone', 1999.99, '50', 1, 1),
(2, 'Camisa', 79.90, '100', 2, 2),
(3, 'Arroz', 5.99, '200', 3, 2),
(4, 'Sofa', 1299.99, '20', 4, 3),
(5, 'Boneca', 49.90, '150', 5, 4);

-- Inserindo dados na tabela de Vendas
INSERT INTO tbVenda (idVen, valor_total, data, cliente_id, vendedor_id, pagamento_id) VALUES
(1, 2079.88, '2024-11-01 10:30:00', 1, 1, 1),  -- João comprou Smartphone e Camisa
(2, 5.99, '2024-11-02 11:00:00', 2, 2, 2),     -- Maria comprou Arroz
(3, 1349.89, '2024-11-03 12:00:00', 3, 3, 3),  -- Carlos comprou Sofa
(4, 49.90, '2024-11-04 15:00:00', 4, 4, 4),    -- Ana comprou Boneca
(5, 89.90, '2024-11-05 10:00:00', 5, 5, 5);     -- Roberto comprou Camisa


