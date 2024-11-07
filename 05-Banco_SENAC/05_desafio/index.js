import inquirer from 'inquirer';
import fs from 'fs';

// Função principal que inicia o gerenciador de tarefas
const start = () => {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'action',
        message: 'O que você deseja fazer?',
        choices: [
          'Adicionar Tarefa',
          'Listar Tarefas',
          'Remover Tarefa',
          'Sair',
        ],
      },
    ])
    .then(({ action }) => {
      switch (action) {
        case 'Adicionar Tarefa':
          addTask();
          break;
        case 'Listar Tarefas':
          listTasks();
          break;
        case 'Remover Tarefa':
          removeTask();
          break;
        case 'Sair':
          console.log('Obrigado por usar o Gerenciador de Tarefas!');
          process.exit();
      }
    })
    .catch((err) => console.error(err));
};

// Função para adicionar uma nova tarefa
const addTask = () => {
  inquirer
    .prompt([
      {
        name: 'task',
        message: 'Digite a descrição da tarefa:',
      },
    ])
    .then(({ task }) => {
      const tasks = loadTasks();
      tasks.push(task);
      saveTasks(tasks);
      console.log(`Tarefa "${task}" adicionada com sucesso!`);
      start(); // Retorna ao menu principal
    })
    .catch((err) => console.error(err));
};

// Função para listar todas as tarefas
const listTasks = () => {
  const tasks = loadTasks();
  console.log('Tarefas:');
  tasks.forEach((task, index) => {
    console.log(`${index + 1}: ${task}`);
  });
  start(); // Retorna ao menu principal
};

// Função para remover uma tarefa
const removeTask = () => {
  const tasks = loadTasks();
  inquirer
    .prompt([
      {
        name: 'taskIndex',
        message: 'Digite o número da tarefa que deseja remover:',
      },
    ])
    .then(({ taskIndex }) => {
      const index = parseInt(taskIndex) - 1;
      if (index >= 0 && index < tasks.length) {
        const removedTask = tasks.splice(index, 1);
        saveTasks(tasks);
        console.log(`Tarefa "${removedTask}" removida com sucesso!`);
      } else {
        console.log('Número inválido. Tente novamente.');
      }
      start(); // Retorna ao menu principal
    })
    .catch((err) => console.error(err));
};

// Função para carregar tarefas do arquivo
const loadTasks = () => {
  if (fs.existsSync('tasks.json')) {
    const data = fs.readFileSync('tasks.json', 'utf8');
    return JSON.parse(data);
  }
  return [];
};

// Função para salvar tarefas no arquivo
const saveTasks = (tasks) => {
  fs.writeFileSync('tasks.json', JSON.stringify(tasks, null, 2));
};

// Inicia o gerenciador de tarefas
start();