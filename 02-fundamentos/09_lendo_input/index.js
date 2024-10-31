// Exemplo 01 - solicita ao usuário que informe sua linguagem preferida e, em seguida, exibe a resposta no console. 

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// readline.question(`Qual a sua linguagem preferida? `, (language) => {
//     if (language === 'javascript') {
//     console.log(`Excelente`);
//     } else {
//     console.log(`Linguagem legal`);
//     };
//     readline.close()
//});


// Exemplo 02 - solicita ao usuário que duas notas e o programa calcula a  média do usuario

import chalk from 'chalk';
import readline from 'readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question(chalk.blue(`Digite a primeira nota: `), (nota1) => {
    rl.question(chalk.green(`Digite a segunda nota: `), (nota2) => {
        const media = (parseFloat(nota1) + parseFloat(nota2)) / 2;
        console.log(chalk.blueBright(`A media das notas eh: ${media.toFixed(2)}`));
        if (media >= 7) {
            console.log(chalk.bgGreen("Aprovado"));
        } else if  (media < 7 && media >= 4) {
            console.log(chalk.bgYellow("Recuperação"));
        }else {
            console.log(chalk.bgRed("Reprovado"));
        }
        rl.close();
    });
});