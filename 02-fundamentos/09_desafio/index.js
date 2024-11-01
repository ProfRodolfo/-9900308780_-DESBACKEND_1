import readline from 'readline';
import chalk from 'chalk';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(chalk.blue('Digite seu nome: '), (nome) => {
  rl.question(chalk.green('Digite sua idade: '), (idade) => {
    console.log(chalk.yellow(`Nome: ${nome}`));
    console.log(chalk.yellow(`Idade: ${idade}`));
    rl.close();
  });
});