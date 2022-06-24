# Repositório de Mentoria Invertida POO da Turma **NÚMERO DA TURMA-TRIBO** :book: :rocket:

Este repositório é dedicado a exercícios complementares fora do conteúdo do course e das aulas ao vivo #VQV :smile:

## Caso :thinking:

Nossa equipe foi contratada para realizarmos mudanças em uma aplicação que já está pronta. Atualmente ela está usando o **paradigma estrutural** e o objetivo vai ser refatorar ela usando **orientação a objeto**. :wink: :smile:

## Desafios :thinking: :eyes:

#### Desafio - Refatorando camada de Model:

A camada de Model é a responsável por acessar nossa base de dados, o objetivo será refatorar ela para POO.

A aplicação possui 3 entidades (Person, Talker e Spectator).

`Person`: possui 4 atributos:
  - id;
  - name;
  - age;
  - role (que pode ser `spectator` ou `talker`);

`Talker`: Deve herdar os `atributos` de `Person`:
  - id (é o mesmo id de Person);
  - name;
  - age;
  - role (que deve ser `talker`);
  - displayOrder (é a ordem em que as pessoas palestrantes vão apresentar);

`Spectator`: Deve herdar os `atributos` de `Person`:
  - id (é o mesmo id de Person);
  - name;
  - age;
  - role (que deve ser `spectator`);
  - position (é o lugar onde a pessoa vai sentar);

> :warning: Obs: O `id` será gerado através da biblioteca [`uuid`](https://www.npmjs.com/package/uuid), mas não há necessidade de se preocupar com essa lógica, ela já foi implementada no ./src/repositories/PersonRepository.ts;
