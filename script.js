// Importa a biblioteca 'child_process' para executar comandos
const { exec } = require('child_process');
// Define a função que será executada em background
function backgroundTask() {
  // Executa um comando no terminal, neste caso, 'ls -l' (lista os arquivos do diretório atual)
  exec('ls -l', (error, stdout, stderr) => {
    if (error) {
      console.error(`Erro ao executar o comando: ${error}`);
      return;
    }
    console.log(`Saída do comando: ${stdout}`);
  });

  // A função será executada novamente após 5 segundos
  setTimeout(backgroundTask, 5000);
}

// Chama a função para iniciar a tarefa em background
backgroundTask();

// Mantém o script em execução
console.log("Script em execução em background...");