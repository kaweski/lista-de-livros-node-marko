📚 Lista de livros
==================

Este é um trabalho desenvolvido para a disciplina *Desenvolvimento Back-end*, ministrada pelo professor Flávio Laper, na Universidade FUMEC.
Utilizando do [Node.js](https://nodejs.org/en/) como plataforma back-end, [SQLite](https://www.npmjs.com/package/sqlite3) para o banco de dados do projeto e bibliotecas como [Marko.js](https://markojs.com/) e [Bootstrap](https://getbootstrap.com/) para renderização do front-end.

Escolha de tecnologia:
----------------------

[Node.js](https://nodejs.org/en/) é uma plataforma construída sobre o motor JavaScript do Google Chrome para facilmente construir aplicações de rede rápidas e escaláveis. Node.js usa um modelo de I/O direcionada a evento não bloqueante que o torna leve e eficiente, ideal para aplicações em tempo real com troca intensa de dados através de dispositivos distribuídos.

Node é usado para fornecer uma maneira fácil para construir programas de rede escaláveis, usando modelo de programação orientada a evento.

O Node funciona rodando em uma JavaScript V8 VM. JavaScript no lado do servidor pode ser um conceito novo para todos que trabalharam exclusivamente com o JavaScript no lado do cliente, mas a idéia em sí não é tão absurda – porque não usar a mesma linguagem de programação no cliente que você usa no servidor?

O motor JavaScript V8 é o motor que a Google usa com seu navegador Chrome. Poucas pessoas pensam sobre o que realmente acontece com o JavaScript no lado do cliente. Bem, a engine JavaScript realmente interpreta o código e o executa. Com o V8 a Google criou um ultra-rápido interpretador escrito em C++, com um outro aspecto único: você pode baixar a engine e incorporá-la em qualquer aplicação desejada. Isso não está restrito em rodar em um navegador. Então Node atualmente usa o motor JavaScript V8 escrito pela Google e propõe que seja usado no servidor.

A escolha dessa ferramenta foi feita basicamente porque o Node é fácil para desenvolver, fácil para manter. Sem frameworks complicados de Orientação a Objeto, sem interfaces, nenhum potencial para o excesso de arquitetura de qualquer coisa. Basta escutar um evento, escrever uma função de callback, e o Node toma conta de tudo.

Descrição do projeto:
---------------------

- O sistema permite o usuário fazer login.
- Ao fazer login, o usuário possui uma lista de livros.
- A lista possui um número de livros.
- O usuário pode interagir com esses livros da lista, CRUD (criar mais um livro, ler, atualizar ou deletar).
- Outros usuários não podem interagir com as listas de outros, somente com as suas próprias listas.

![Entidade-relacionamento](https://github.com/naweskil/nodejs-project/blob/master/src/app/public/imagens/relacionamento_entidade_2.png "Entidade-relacionamento")

- Um usuário possui vários livros vinculado à ele.
- Um livro está vinculada à somente um usuário.

Instalação:
-----------

Pode instalar o Node clicando no botão de download do próprio site do [Node.js](https://nodejs.org/en/). E pronto, ele já está instalado na sua máquina.

Modo de utilização:
-------------------

No projeto criado para este trabalho:

- Faça a descompactação do projeto .zip
- Abra o terminal de comando a partir da pasta que foi descompactada
- Execute o comando abaixo para instalar as dependências do `package.json`

`$ npm install`

Em seguida, “rode” o servidor executando os comandos abaixo:

`$ npm start`

- Deixe o servidor rodando.
- Logo após isso, abra uma nova janela no navegador.
- Vá para o link [http://localhost:3001](http://localhost:3001)

O primeito login de usuário pode ser feito a partir dos dados:

- login: *naweskil@gmail.com*
- senha: *123*

E aproveite!
