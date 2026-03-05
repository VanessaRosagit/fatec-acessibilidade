# Projeto base para aula de Acessibilidade
Criou os botões de acessibilidade

Foram adicionados dois botões na página:

A+ para aumentar a fonte.

A− para diminuir a fonte.

Os botões foram inseridos dentro de uma <div> no HTML.

Criou o arquivo JavaScript

Foi criado um arquivo externo chamado script.js.

Esse arquivo é responsável por controlar o comportamento dos botões.

Definiu uma variável para o tamanho da fonte

Foi criada a variável tamanhoFonte iniciando em 100%, representando o tamanho padrão do texto.

let tamanhoFonte = 100;

Definiu limites mínimo e máximo

Para evitar que o layout quebrasse, foram definidos limites:

mínimo: 70%

máximo: 150%

const minimo = 70;
const maximo = 150;

Criou a função para aumentar a fonte

Quando o usuário clica em A+:

O sistema verifica se o tamanho ainda não atingiu o limite máximo.

Se não atingiu, aumenta 10%.

Atualiza o tamanho da fonte da página.

Criou a função para diminuir a fonte

Quando o usuário clica em A−:

O sistema verifica se o tamanho ainda está acima do mínimo.

Se estiver, diminui 10%.

Atualiza o tamanho da fonte.

Aplicou a alteração na página

O JavaScript modifica o tamanho da fonte usando:

document.body.style.fontSize

Assim, todo o conteúdo da página muda automaticamente.

Conectou o JavaScript ao HTML

O arquivo foi ligado ao HTML usando:
<script src="script.js"></script>


