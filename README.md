# Stars Deck Backend

Desafio back-end Novatics para construir uma aplicação simples para gerenciar eventos e pontuações de usuários desenvolvido em  [Adonis JS](https://adonisjs.com/).

## :book: Sumário

- [Dependências](https://github.com/hygorchristian/novatics-desafio-backend#gear-depend%C3%AAncias)
- [Guia de instalação](https://github.com/hygorchristian/novatics-desafio-backend#rocket-guia-de-instala%C3%A7%C3%A3o)
  - [Como instalar](https://github.com/hygorchristian/novatics-desafio-backend#como-instalar)
  - [Executando a aplicação](https://github.com/hygorchristian/novatics-desafio-backend#executando-a-aplica%C3%A7%C3%A3o)
- [Documentação](https://github.com/hygorchristian/novatics-desafio-backend#open_book-documenta%C3%A7%C3%A3o-swagger)
- [Conteinerização (Docker)](https://github.com/hygorchristian/novatics-desafio-backend#whale2-conteineriza%C3%A7%C3%A3o-docker)
  - [Comandos Docker](https://github.com/hygorchristian/novatics-desafio-backend#comandos-docker)

## :gear: Dependências

- [Adonis CLI](https://www.npmjs.com/package/@adonisjs/cli)
- [SQLite](https://www.npmjs.com/package/sqlite3)
- [Node](https://nodejs.org/en/) (10.13.0 ou maior)
- [Yarn](https://yarnpkg.com/pt-BR/) ou [NPM](https://www.npmjs.com/)
- [Docker](https://www.docker.com/) (opcional)

## :rocket: Guia de instalação

Para a instalação e execução dos scripts será utilizado o yarn.

### Como instalar

Clone este repositório:

```
git clone https://github.com/hygorchristian/novatics-desafio-backend
```

Entre na pasta e instale as dependências:

```
cd novatics-desafio-backend && yarn
```

### Executando a aplicação

Iniciar a aplicação em modo de desenvolvimento:

```
adonis serve --dev
```

Iniciar a aplicação em modo de produção:

```
adonis serve
```

Realizar os testes unitários:

```
adonis test
```

## :open_book: Documentação (Swagger)

Por padrão a aplicação irá rodar na porta 3333 caso não seja configurada uma porta específica no arquivo .env.

Acessando a rota `http://localhost:3333/docs` você terá acesso à documentação da api com todos os endpoints e respectivos parâmetros.

![Swagger](https://i.imgur.com/bu8h5qM.png)

## :whale2: Conteinerização (Docker)

### Comandos Docker

Compilar a imagem

```
docker build -t dockeruser/appname .
```

Executar a imagem (A aplicação estará acessível em localhost:3333)

```
docker run -it -p 3333:3333 --rm --name containername dockeruser/appname
```
