import chalk from "chalk";

// const nota = 6;

// if (nota >= 7) {
//     console.log(chalk.green.bold('Parabéns vc foi Aprovado'));
// } else {
//     console.log(chalk.bgRed.black('Vc foi reprovado'));
// }

console.log(chalk.bold('Texto em negrito'));
console.log(chalk.underline('Texto sublinhado'));
console.log(chalk.red('Texto em vermelho'));
console.log(chalk.bgYellow.black('Texto com fundo amarelo e texto preto'));
console.log(chalk.inverse('Texto com fundo azul e texto preto'));
console.log(chalk.blue('Texto em azul'));
console.log(chalk.green.inverse('Texto com fundo verde invertido'));

const error = chalk.bold.red;
 const warning = chalk.hex('#FFA500');

console.log(error('Erro: Algo deu errado!'));
console.log(warning('Aviso: Preste atenção nisso!'));