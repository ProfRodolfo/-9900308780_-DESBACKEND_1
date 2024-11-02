// import inquirer from 'inquirer';
// import chalk from 'chalk';

// async function main() {
//     try {

//         const answers =  await inquirer.prompt([
//             {name: 'p1', message: 'Qual a primeira nota?'},
//             {name: 'p2', message: 'Qual a segunda nota?'},
//         ]);
//         console.log(answers);

//         const media = (parseFloat(answers.p1) + parseFloat(answers.p2)) / 2;

//         if (media >= 6) {
//             console.log(chalk.bgBlue('Resultado: Aprovado'));
//         } else if (media >= 4) {
//             console.log(chalk.bgYellow('Resultado: Recuperação'));
//         } else {
//             console.log(chalk.bgRed('Resultado: Reprovado'));
//         }
//     } catch (error) {
//      console.log(chalk.red(error));
//     }
// }

// main();



import inquirer from 'inquirer';

// Exemplo 2: Pergunta de múltipla escolha

const questions = [
    {
        type: 'list',
        name: 'animais',
        message: 'Qual é o seu animal de estimação?',
        choices: ['Cachorro', 'Gato', 'Papagaio', 'Coelho', 'Elefante'],
    },
];

inquirer.prompt(questions).then((answers) => {
    console.log(`Seu animal de estimação é: ${answers.animais}`);
})
.catch(error => {
    console.log(error);
});
