# Gerenciador de Contas Bancárias

Este projeto é um simples gerenciador de contas bancárias em Node.js que permite aos usuários criar contas, consultar saldos, depositar e sacar dinheiro. O sistema utiliza o módulo `inquirer` para interagir com o usuário via linha de comando e armazena os dados das contas em arquivos JSON.

## Funcionalidades

- **Criar Conta**: Permite ao usuário criar uma nova conta bancária com um nome único.
- **Consultar Saldo**: Exibe o saldo atual da conta escolhida.
- **Depositar**: Permite ao usuário depositar um valor na conta selecionada.
- **Sacar**: Permite ao usuário sacar um valor da conta, desde que haja saldo suficiente.
- **Sair**: Opção para encerrar o programa.

## Pré-requisitos

- [Node.js](https://nodejs.org/) (Recomendado: versão 12 ou superior)

## Instalação

1. Clone este repositório:
```bash
   git clone https://github.com/seu-usuario/gerenciador-contas-bancarias.git
```
2. Navegue até o diretório do projeto:

```bash
cd gerenciador-contas-bancarias
```
3. Instale as dependências:

```bash
npm install
```
### Uso
Para iniciar o gerenciador de contas, execute o seguinte comando:

```bash
npm start
```

Siga as instruções na linha de comando para realizar as operações desejadas.

### Estrutura do Código
O projeto contém as seguintes funções principais:

`operation()`: Inicia o sistema de operações e apresenta o menu principal.
`createAccount()`: Cria uma nova conta bancária.
`buildAccount()`: Solicita um nome para a nova conta e verifica se já existe.
`deposit()`: Permite que o usuário deposite dinheiro na conta.
`withdraw()`: Permite que o usuário saque dinheiro da conta.
`getAccountBalance()`: Consulta o saldo da conta.
`checkAccount()`: Verifica se a conta existe.
`addAmount()`: Adiciona um valor ao saldo da conta.
`removeAmount()`: Remove um valor do saldo da conta.
`isValidAmount()`: Valida se o valor fornecido é um número positivo.

### Contribuição
Sinta-se à vontade para contribuir com melhorias ou correções. Para isso, você pode:

- Fazer um fork deste repositório.
- Criar uma nova branch (git checkout -b feature/nome-da-sua-feature).
- Fazer suas alterações e commit (git commit -m 'Adicionar nova funcionalidade').
- Fazer push para a branch (git push origin feature/nome-da-sua-feature).
- Abrir um pull request.

### Licença
Este projeto está licenciado sob a MIT License.

### Contato
Para dúvidas ou sugestões, entre em contato com seu-email@example.com.



### Instruções para Personalização
- **Substitua** `https://github.com/seu-usuario/gerenciador-contas-bancarias.git` pelo link do seu repositório.
- **Atualize** o seu endereço de e-mail no campo de contato.
- **Personalize** o texto conforme necessário para refletir melhor seu projeto e suas preferências.

Sinta-se à vontade para modificar o conteúdo conforme suas necessidades! Se precisar de mais alguma coisa, é só avisar.