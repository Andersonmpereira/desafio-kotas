# Desafio técnico vaga frontend

Desafio tecnico para a vaga de front-end da empresa Kotas

## Sumário

1. [Visão Geral](#visão-geral)
2. [Tecnologias Utilizadas](#tecnologias-utilizadas)
3. [Pré-requisitos](#Pré-requisitos)
4. [Instalação](#instalação)
5. [Como Usar](#como-usar)
6. [Estrutura do Projeto](#estrutura-do-projeto)

## Visão Geral

O desafio consistia em criar uma tela com renderização de cards pokemons e busca ativa atraves de uma barra de busca. Além disso, ao clicar no card do pokemon, deveria redirecionar para uma nova tela com suas habilidades.

![homepage](https://i.imgur.com/rn8i3qTb.gif)

## Tecnologias Utilizadas

- Nuxt3
- Sass
- Tailwind
- Vue3
- Typescript
- pinia
- Cypress

## Pré-requisitos

- Node.js - v18.0.0 ou superior
- npm ou yarn

## Instalação

Para instalar siga o passo a passo:
```bash
# Clone este repositório.
$ git clone <git@github.com:Andersonmpereira/desafio-kotas.git>

# Acesse o diretorio
$ cd desafio-kotas

# instale as dependencias
$ npm install

```

## Como Usar

Para iniciar o projeto, deve acessar o diretorio clonado e rode o comando
```bash.
$ npm run dev
```

Com isso já é possivel acessar o projeto localmente.<br>
O acesso é `localhost:porta`, por exemplo:
```bash.
http://localhost:3000/
```

Para rodar os testes e2e basta executar o seguinte comando no terminal:
```bash
# Escolha entre electron, chrome e firefox como ambiente de teste.
$ npx cypress open
# Lembre-se que é necessario estar rodando o projeto localmente pois ele valida através do localhost

```

## Estrutura do Projeto

O projeto foi feito em `nuxt3` que utiliza `vue3` como base. Além disso, utilizei `typescript` para boa parte do código e `pinia` para gerenciamento de estado da aplicação. Para a questões de estilização, utilizei `tailwind` em toda a construção estrutural e `sass` para estilizar pontos especificos. Utilizei também `BEM` como metologia de estruturação de css. E fiz alguns testes de interface utilizando `cypress`. 

- Optei por um layout default para ter uma base reutilizavel;
- Criei components o mais generico que pude, para poder reutilizar;
- Utilizei vue-router dinamico para acessar pagina especifica dos pokemons;
- Deixei o css o mais simples e reutilizavel possivel;
- Criei testes basicos para garantir que a aplicação esteja funcionando corretamente;
- Não há como buscar e carregar novas paginas de pokemon ao mesmo tempo, pois eu desabilito o input durante a renderização;
- A aplicação está responsiva.

---

De modo geral foi um desafio extremamente interessante que pude validar meu conhecimento. 
Agradeço a oportunidade.
