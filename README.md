# Repositório de Mentoria Invertida POO da Turma **17** :book: :rocket:

Este repositório é dedicado a exercícios complementares fora do conteúdo do course e das aulas ao vivo #VQV :smile:

## Caso :thinking:

Nossa equipe foi contratada para realizarmos mudanças em uma aplicação que já está pronta. Atualmente ela está usando o **paradigma estrutural** e o objetivo vai ser refatorar ela usando **orientação a objeto**. :wink: :smile:

## Configurando a aplicação:

- Renomeie o arquivo ```.env.example``` para ```.env``` e configure as variáveis de ambiente.

- Utilize o arquivo ```database.sql``` para subir o banco de dados.


## Desafios :thinking: :eyes:

### Refatorando a aplicação:

Refatore a aplicação utilizando o paradigma de  programação orientada a objetos e os princípios SOLID.

A aplicação possui 3 entidades (Person, Talker e Spectator).

`Person`: possui 3 atributos:
  - id;
  - name;
  - age;

`Talker`: Deve herdar os `atributos` de `Person`:
  - id (é o mesmo id de Person);
  - name;
  - age;
  - displayOrder (é a ordem em que as pessoas palestrantes vão apresentar);

`Spectator`: Deve herdar os `atributos` de `Person`:
  - id (é o mesmo id de Person);
  - name;
  - age;
  - position (é o lugar onde a pessoa vai sentar);
