# Exercício: Gerenciador de Tarefas

## Objetivo

O objetivo deste exercício é criar um gerenciador de tarefas simples utilizando Node.js. O sistema permitirá que o usuário adicione, liste e remova tarefas, armazenando-as em um arquivo JSON.

## Funcionalidades

Seu gerenciador de tarefas deve implementar as seguintes funcionalidades:

1. **Adicionar Tarefa**: O usuário pode inserir uma nova tarefa com uma descrição.
2. **Listar Tarefas**: O sistema deve listar todas as tarefas existentes, exibindo cada uma com um número de índice.
3. **Remover Tarefa**: O usuário pode remover uma tarefa específica informando o número do índice correspondente.
4. **Sair**: O usuário pode encerrar o programa.

## Requisitos

- **Node.js**: Certifique-se de ter o Node.js instalado em seu sistema.
- **Dependências**: Utilize o módulo `inquirer` para interagir com o usuário via linha de comando.
- **Armazenamento**: As tarefas devem ser armazenadas em um arquivo chamado `tasks.json`. Se o arquivo não existir, ele deve ser criado.

## Estrutura do Projeto

1. **Instalação das Dependências**

   - Crie um novo diretório para o projeto e execute os seguintes comandos:
     ```bash
     npm init -y
     npm install inquirer
     ```
2. **Criação do Arquivo Principal**

   - Crie um arquivo chamado `index.js` onde você implementará as funcionalidades do gerenciador de tarefas.

## Exemplo de Uso

Após implementar o código, o usuário deve ser capaz de executar o programa e interagir com ele através do terminal. A interação deve ser semelhante ao exemplo abaixo:

### O que você deseja fazer?

1. Adicionar Tarefa
2. Listar Tarefas
3. Remover Tarefa
4. Sair

## Dicas para Implementação

- **Função Principal**: Crie uma função que apresenta o menu inicial e solicita a ação do usuário.
- **Adicionar Tarefa**: Crie uma função que pede ao usuário a descrição da tarefa e a adiciona ao arquivo `tasks.json`.
- **Listar Tarefas**: Crie uma função que lê o arquivo `tasks.json` e exibe as tarefas na tela.
- **Remover Tarefa**: Crie uma função que permite ao usuário remover uma tarefa com base no índice que ele informar.
- **Manipulação de Arquivos**: Utilize `fs` (File System) para ler e escrever no arquivo `tasks.json`.

## Resultado Esperado

Ao final do exercício, você deve ter um gerenciador de tarefas funcional que permite ao usuário adicionar, listar e remover tarefas, com as informações sendo persistidas em um arquivo JSON.

## Entrega
Submeta o código fonte do seu projeto em um repositório no GitHub ou em qualquer outra plataforma de sua escolha. Certifique-se de incluir um `README.md` com instruções sobre como executar o seu projeto.