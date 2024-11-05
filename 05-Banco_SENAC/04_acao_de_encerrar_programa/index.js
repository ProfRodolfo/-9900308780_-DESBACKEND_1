const inquirer = require('inquirer')
const chalk = require('chalk')

const fs = require('fs')

operation()

function operation() {
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
        .then()
        .catch((err) => console.log(err))

        .then((answer) => {
            const action = answer['action']

            if (action === 'Criar conta') {
                createAccount()
            } else if (action === 'Depositar') {
                deposit()
            } else if (action === 'Consultar Saldo') {
                getAccountBalance()
            } else if (action === 'Sacar') {
                withdraw()
            } else if (action === 'Sair') {
                console.log(chalk.bgBlue.black('Obrigado por o Banco SENAC!'))
                process.exit()
            }
        })
}

function createAccount() {
    console.log(chalk.bgGreen.black('Parabéns por escolher o nosso banco!'))
    console.log(chalk.green('Defina as opções da sua conta a seguir:'))
    buildAccount()
}

function buildAccount() {
    inquirer
        .prompt([
            {
                name: 'accountName',
                message: 'Digite o nome da sua conta',
            },
        ])
        .then((answer) => {
            console.info(answer['accountName'])

            const accountName = answer['accountName']

            if (!fs.existsSync('accounts')) {
                fs.mkdirSync('accounts')
            }
            if (fs.existsSync(`accounts/${accountName}.json`)) {
                console.log(chalk.red('Essa conta já existe!'))
            }
            buildAccount(accountName)

            fs.writeFileSync(
                `accounts/${accountName}.json`,
                '{"balance":0}',
                function (err) {
                    console.log(err)
                },
            )
            console.log(chalk.green('Conta criada com sucesso!'))
            operation()
        })
        .catch((err) => console.log(err))
}

function getAccount({ accountName }) {
    const accountJSON = fs.readFileSync(`accounts/${accountName}.json`, {
        encoding: 'utf8', flag: 'r',

    })
    return JSON.parse(accountJSON)
}

function getAccountBalance() {
    inquirer
        .prompt([
            {
                name: 'accountName',
                message: 'Digite o nome da sua conta',
            },
        ])
        .then((answer) => {
            const accountName = answer['accountName']
            if (!checkAccount(accountName)) {
                return getAccountBalance()
            }
            const accountData = getAccount(accountName)
            console.log(chalk.green(`O saldo da conta ${accountName} é R$ ${accountData.balance}`,
            ),
            )
            operation()
        })
}

function checkAccount(accountName) {
    if (!fs.existsSync(`accounts/${accountName}.json`)) {
        console.log(chalk.bgRed.black('Esta conta não existe, escolha outro nome!'))
        return false
    }
    return true
}