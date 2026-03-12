# Projeto Base para Aula de Acessibilidade  

**Autores:** Vanessa, Abigaiu e Bruno  

---

## Criação dos Botões de Acessibilidade

Foram adicionados dois botões na página:

- **A+** → para aumentar o tamanho da fonte.
- **A−** → para diminuir o tamanho da fonte.

---

## 2. Fluxograma do Algoritmo

Entrada: O usuário clica em um botão.

Decisão: * É o botão de aumentar? Verifica se o tamanho atual é menor que o máximo permitido. Se sim, soma.

É o botão de diminuir? Verifica se o tamanho atual é maior que o mínimo permitido. Se sim, subtrai.

Ação: O novo valor é enviado para a tela (CSS/Estilo).

Saída: O texto muda visualmente para o usuário

---

## Algoritmo — Botão de Alto Contraste Atividade 02

## Objetivo

Permitir que o usuário ative ou desative o modo **Alto Contraste**, melhorando a acessibilidade visual da página.

---

## Passo a Passo do Algoritmo

### 1. Identificar os elementos da página

- O botão é responsável por ativar o contraste.

---

### 2. Aguardar interação do usuário

O sistema fica aguardando o usuário clicar no botão.

---

### 3. Alternar o modo de contraste

Ao clicar no botão:

- O sistema verifica se a classe  já está aplicada.
- Se estiver → remove a classe.
- Se não estiver → adiciona a classe.

---

### 4. Aplicar os estilos automaticamente

Quando a classe é adicionada:

- Fundo muda para preto.
- Texto muda para branco.
- Links mudam para amarelo.
- A transição ocorre suavemente.

---

### 5. (Opcional) Salvar preferência do usuário

O sistema pode salvar a escolha  , permitindo manter o contraste ativo ao recarregar a página.

---

## Fluxo Resumido

INÍCIO  
↓  
Usuário clica no botão  
↓  
Alterna classe  no body  
↓  
CSS aplica novo estilo automaticamente  
↓  
Página muda para alto contraste  
↓  
FIM

---

## Resultado

O usuário pode ativar e desativar o modo de alto contraste facilmente, tornando o site mais acessível para pessoas com baixa visão ou sensibilidade visual.
