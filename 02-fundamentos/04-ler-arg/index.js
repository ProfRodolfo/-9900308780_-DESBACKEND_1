console.log(process.argv);
const args = process.argv.slice(2);
console.log(args);
const nome = args[0].split("=")[1];
const idade = args[1].split("=")[1];
console.log(nome);
console.log(idade);
console.log(`O usuário ${nome} tem ${idade} anos.`);
console.log("O usuario " + nome + " tem " + idade + " anos.");