# Desafio técnico vaga frontend

Desafio tecnico para a vaga de front-end da empresa Kotas

## Sumário

1. [Visão Geral](#visão-geral)
2. [Tecnologias Utilizadas](#tecnologias-utilizadas)
3. [Instalação](#instalação)
4. [Como Usar](#como-usar)
5. [Estrutura do Projeto](#estrutura-do-projeto)

## Visão Geral

O desafio consistia em criar uma tela com renderização de cards pokemons e busca ativa atraves de uma barra de busca. Além disso, ao clicar no card do pokemon, deveria redirecionar para uma nova tela com suas habilidades.

## Tecnologias Utilizadas

- Nuxt3
- Sass
- Tailwind
- Vue3
- Typescript
- pinia
- Cypress

## Instalação

Para instalar siga o passo a passo:
```bash
# Clone este repositório.
$ git clone <git@github.com:Andersonmpereira/desafio-kotas.git>

# instale as dependencias
$ npm install

```

## Como Usar

Para inciar o projeto, acesso o diretorio clonado e rode o comando
```bash.
$ npm run dev
```

Com isso já é possivel acessar o projeto localmente.<br>
O acesso é `localhost:porta`, por exemplo:
```bash.
http://localhost:3000/
```

Para rodar os testes e2e basta rodar o comando no terminal:
```bash
# Escolha entre electron, chrome e firefox como ambiente de teste.
$ npx cypress open

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
