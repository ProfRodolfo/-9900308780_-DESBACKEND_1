const inquirer = require('inquirer');
const chalk = require('chalk');
const fs = require('fs');

// Inicia o sistema de operações
operation();

function operation() {
  // Prompt para selecionar a operação desejada
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'action',
        message: 'O que você deseja fazer?',
        choices: [
          'Criar conta',
          'Consultar Saldo',
          'Depositar',
          'Sacar',
          'Sair',
        ],
      },
    ])
    .then((answer) => {
      const action = answer['action'];

      // Direciona para a função correspondente à ação escolhida
      if (action === 'Criar conta') {
        createAccount();
      } else if (action === 'Depositar') {
        deposit();
      } else if (action === 'Consultar Saldo') {
        getAccountBalance();
      } else if (action === 'Sacar') {
        withdraw();
      } else if (action === 'Sair') {
        console.log(chalk.bgBlue.black('Obrigado por usar o Accounts!'));
        process.exit();
      }
    })
    .catch((err) => console.log(err));
}

// Cria uma nova conta
function createAccount() {
  console.log(chalk.bgGreen.black('Parabéns por escolher nosso banco!'));
  console.log(chalk.green('Defina as opções da sua conta a seguir'));

  buildAccount();
}

// Função para construir a conta
function buildAccount() {
  inquirer
    .prompt([
      {
        name: 'accountName',
        message: 'Digite um nome para a sua conta:',
      },
    ])
    .then((answer) => {
      const accountName = answer['accountName'];
      console.info(accountName);

      // Verifica se o diretório de contas existe, se não, cria um
      if (!fs.existsSync('accounts')) {
        fs.mkdirSync('accounts');
      }

      // Verifica se a conta já existe
      if (fs.existsSync(`accounts/${accountName}.json`)) {
        console.log(chalk.bgRed.black('Esta conta já existe, escolha outro nome!'));
        return buildAccount(); // Chama novamente a função para criar uma nova conta
      }

      // Cria um novo arquivo JSON para a conta com saldo inicial de 0
      fs.writeFileSync(`accounts/${accountName}.json`, '{"balance":0}');
      console.log(chalk.green('Parabéns, sua conta foi criada!'));
      operation(); // Retorna ao menu principal
    })
    .catch((err) => console.log(chalk.bgRed.black('Erro ao criar a conta: ', err)));
}

// Função para depositar um valor na conta
function deposit() {
  inquirer
    .prompt([
      {
        name: 'accountName',
        message: 'Qual o nome da sua conta?',
      },
    ])
    .then((answer) => {
      const accountName = answer['accountName'];

      // Verifica se a conta existe
      if (!checkAccount(accountName)) {
        return deposit();
      }

      inquirer
        .prompt([
          {
            name: 'amount',
            message: 'Quanto você deseja depositar?',
            validate: (input) => isValidAmount(input) || 'Por favor, insira um valor válido!',
          },
        ])
        .then((answer) => {
          const amount = answer['amount'];
          addAmount(accountName, amount);
          operation();
        });
    })
    .catch((err) => console.log(err));
}

// Função para verificar se a conta existe
function checkAccount(accountName) {
  if (!fs.existsSync(`accounts/${accountName}.json`)) {
    console.log(chalk.bgRed.black('Esta conta não existe, escolha outro nome!'));
    return false;
  }
  return true;
}

// Função para ler dados da conta
function getAccount(accountName) {
  const accountJSON = fs.readFileSync(`accounts/${accountName}.json`, {
    encoding: 'utf8',
    flag: 'r',
  });

  return JSON.parse(accountJSON);
}

// Função para adicionar um valor à conta
function addAmount(accountName, amount) {
  const accountData = getAccount(accountName);
  accountData.balance += parseFloat(amount); // Atualiza o saldo da conta

  // Grava os dados atualizados de volta no arquivo
  fs.writeFileSync(`accounts/${accountName}.json`, JSON.stringify(accountData));
  console.log(chalk.green(`Foi depositado o valor de R$${amount} na sua conta!`));
}

// Função para consultar saldo da conta
function getAccountBalance() {
  inquirer
    .prompt([
      {
        name: 'accountName',
        message: 'Qual o nome da sua conta?',
      },
    ])
    .then((answer) => {
      const accountName = answer['accountName'];

      // Verifica se a conta existe
      if (!checkAccount(accountName)) {
        return getAccountBalance();
      }

      const accountData = getAccount(accountName);
      console.log(chalk.bgBlue.black(`Olá, o saldo da sua conta é de R$${accountData.balance}`));
      operation();
    })
    .catch((err) => console.log(err));
}

// Função para sacar um valor da conta
function withdraw() {
  inquirer
    .prompt([
      {
        name: 'accountName',
        message: 'Qual o nome da sua conta?',
      },
    ])
    .then((answer) => {
      const accountName = answer['accountName'];

      // Verifica se a conta existe
      if (!checkAccount(accountName)) {
        return withdraw();
      }

      inquirer
        .prompt([
          {
            name: 'amount',
            message: 'Quanto você deseja sacar?',
            validate: (input) => isValidAmount(input) || 'Por favor, insira um valor válido!',
          },
        ])
        .then((answer) => {
          const amount = answer['amount'];
          removeAmount(accountName, amount);
          operation();
        });
    })
    .catch((err) => console.log(err));
}

// Função para remover um valor da conta
function removeAmount(accountName, amount) {
  const accountData = getAccount(accountName);

  // Valida o valor do saque
  if (accountData.balance < amount) {
    console.log(chalk.bgRed.black('Valor indisponível!'));
    return withdraw();
  }

  accountData.balance -= parseFloat(amount); // Atualiza o saldo

  // Grava os dados atualizados de volta no arquivo
  fs.writeFileSync(`accounts/${accountName}.json`, JSON.stringify(accountData));
  console.log(chalk.green(`Foi realizado um saque de R$${amount} da sua conta!`));
}

// Função para validar se o valor informado é um número positivo
function isValidAmount(amount) {
  return !isNaN(amount) && parseFloat(amount) > 0;
}