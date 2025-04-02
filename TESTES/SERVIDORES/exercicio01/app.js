// Exercício: Gerenciador de Notas
// Crie um programa que permite ao usuário:
// 1. Criar uma nova nota
// 2. Listar todas as notas
// 3. Ler o conteúdo de uma nota específica
// 4. Atualizar uma nota existente
// 5. Excluir uma nota

const fs = require('fs');
const path = require('path');
const readline = require('readline');

// Pasta onde as notas serão armazenadas
const NOTES_DIR = path.join(__dirname, 'notas');

// Garantir que a pasta de notas exista
if (!fs.existsSync(NOTES_DIR)) {
  fs.mkdirSync(NOTES_DIR);
}

// Configurar interface de leitura
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para mostrar o menu principal
function showMenu() {
  console.log('\n===== Gerenciador de Notas =====');
  console.log('1. Criar nova nota');
  console.log('2. Listar todas as notas');
  console.log('3. Ler uma nota');
  console.log('4. Atualizar uma nota');
  console.log('5. Excluir uma nota');
  console.log('6. Sair');
  
  rl.question('\nEscolha uma opção (1-6): ', (option) => {
    switch(option) {
      case '1':
        createNote();
        break;
      case '2':
        listNotes();
        break;
      case '3':
        readNote();
        break;
      case '4':
        updateNote();
        break;
      case '5':
        deleteNote();
        break;
      case '6':
        console.log('Até logo!');
        rl.close();
        break;
      default:
        console.log('Opção inválida. Tente novamente.');
        showMenu();
    }
  });
}

// Função para criar uma nova nota
function createNote() {
  rl.question('Digite o título da nota: ', (title) => {
    const fileName = `${title.replace(/\s+/g, '_').toLowerCase()}.txt`;
    const filePath = path.join(NOTES_DIR, fileName);
    
    if (fs.existsSync(filePath)) {
      console.log('Erro: Já existe uma nota com este título.');
      showMenu();
      return;
    }
    
    rl.question('Digite o conteúdo da nota: ', (content) => {
      fs.writeFile(filePath, content, (err) => {
        if (err) {
          console.log('Erro ao criar a nota:', err);
        } else {
          console.log(`Nota "${title}" criada com sucesso!`);
        }
        showMenu();
      });
    });
  });
}

// Função para listar todas as notas
function listNotes() {
  fs.readdir(NOTES_DIR, (err, files) => {
    if (err) {
      console.log('Erro ao listar notas:', err);
      showMenu();
      return;
    }
    
    if (files.length === 0) {
      console.log('Não há notas salvas.');
    } else {
      console.log('\nNotas disponíveis:');
      files.forEach((file, index) => {
        console.log(`${index + 1}. ${file.replace('.txt', '').replace(/_/g, ' ')}`);
      });
    }
    showMenu();
  });
}

// Função para ler uma nota específica
function readNote() {
  fs.readdir(NOTES_DIR, (err, files) => {
    if (err) {
      console.log('Erro ao listar notas:', err);
      showMenu();
      return;
    }
    
    if (files.length === 0) {
      console.log('Não há notas para ler.');
      showMenu();
      return;
    }
    
    console.log('\nNotas disponíveis:');
    files.forEach((file, index) => {
      console.log(`${index + 1}. ${file.replace('.txt', '').replace(/_/g, ' ')}`);
    });
    
    rl.question('\nDigite o número da nota que deseja ler: ', (choice) => {
      const index = parseInt(choice) - 1;
      
      if (index < 0 || index >= files.length) {
        console.log('Número inválido.');
        showMenu();
        return;
      }
      
      const filePath = path.join(NOTES_DIR, files[index]);
      
      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          console.log('Erro ao ler a nota:', err);
        } else {
          console.log(`\n--- ${files[index].replace('.txt', '').replace(/_/g, ' ')} ---`);
          console.log(data);
        }
        showMenu();
      });
    });
  });
}

// Função para atualizar uma nota
function updateNote() {
  fs.readdir(NOTES_DIR, (err, files) => {
    if (err) {
      console.log('Erro ao listar notas:', err);
      showMenu();
      return;
    }
    
    if (files.length === 0) {
      console.log('Não há notas para atualizar.');
      showMenu();
      return;
    }
    
    console.log('\nNotas disponíveis:');
    files.forEach((file, index) => {
      console.log(`${index + 1}. ${file.replace('.txt', '').replace(/_/g, ' ')}`);
    });
    
    rl.question('\nDigite o número da nota que deseja atualizar: ', (choice) => {
      const index = parseInt(choice) - 1;
      
      if (index < 0 || index >= files.length) {
        console.log('Número inválido.');
        showMenu();
        return;
      }
      
      const filePath = path.join(NOTES_DIR, files[index]);
      
      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          console.log('Erro ao ler a nota:', err);
          showMenu();
          return;
        }
        
        console.log(`\nConteúdo atual:\n${data}`);
        
        rl.question('\nDigite o novo conteúdo da nota: ', (newContent) => {
          fs.writeFile(filePath, newContent, (err) => {
            if (err) {
              console.log('Erro ao atualizar a nota:', err);
            } else {
              console.log('Nota atualizada com sucesso!');
            }
            showMenu();
          });
        });
      });
    });
  });
}

// Função para excluir uma nota
function deleteNote() {
  fs.readdir(NOTES_DIR, (err, files) => {
    if (err) {
      console.log('Erro ao listar notas:', err);
      showMenu();
      return;
    }
    
    if (files.length === 0) {
      console.log('Não há notas para excluir.');
      showMenu();
      return;
    }
    
    console.log('\nNotas disponíveis:');
    files.forEach((file, index) => {
      console.log(`${index + 1}. ${file.replace('.txt', '').replace(/_/g, ' ')}`);
    });
    
    rl.question('\nDigite o número da nota que deseja excluir: ', (choice) => {
      const index = parseInt(choice) - 1;
      
      if (index < 0 || index >= files.length) {
        console.log('Número inválido.');
        showMenu();
        return;
      }
      
      const filePath = path.join(NOTES_DIR, files[index]);
      
      rl.question(`Tem certeza que deseja excluir a nota "${files[index].replace('.txt', '').replace(/_/g, ' ')}"? (s/n): `, (confirm) => {
        if (confirm.toLowerCase() === 's') {
          fs.unlink(filePath, (err) => {
            if (err) {
              console.log('Erro ao excluir a nota:', err);
            } else {
              console.log('Nota excluída com sucesso!');
            }
            showMenu();
          });
        } else {
          console.log('Operação cancelada.');
          showMenu();
        }
      });
    });
  });
}

// Iniciar o programa
console.log('Bem-vindo ao Gerenciador de Notas!');
showMenu();