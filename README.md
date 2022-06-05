<h1 align="center">Desafio Back-end Precato</h1>

## Objetivo

Desafio back-end proposto pela empresa [Preacto](https://precato.com.br/) para a vaga de Desenvolvedor Back-end | Estágio

Mais informações sobre o desafio acesse [aqui](https://github.com/precato/desafio-dev-back-end)

## Tecnologias utilizadas

- Express
- Nodejs
- Typescript
- Sequelize
- Node-schedule
- Sqlite
  - Motivo:
    Utilizaria o MySql ou Postgres já que é um dos requisitos para a vaga, mas escolhi o Sqlite por sua portabilidade e facilidade na execução em outras maquinas

## Observação

Criei um front-end com bootstrap para ter algo mais visual

## Requisitos mínimos

- Ter o [nodeJS](http://nodejs.org) instalado na sua maquina

## Como rodar 🚀

- Abra o diretório do back-end em um terminal
- Execute ` npm install` para baixar as dependências
- Execute ` npm start` para executar o servidor

## Rotas

### As rotas tem a URLBASE= http://localhost:2222

- Subscription

  - `/sub`

    **method**= "post"

    **body** = {
    name : string,
    email : string
    }

    **headers** = {
    ["Content-type"] : "application/json"
    }

    **response** = {
    id : string
    name : string
    email : string
    } || {message || error : string}

- Message

  - `/message`

    **method** = "post"

    **headers** = {
    ["Content-type"] : "application/json"
    }

    **body** = {
    id : string
    }

    **response** = {
    id : string,
    template_name : string,
    position : number
    } || {message || error : string}

  - `/message/create`

    **method** = "post"

    **headers** = {
    ["Content-type"] : "application/json"
    }

    **body** = {
    template_name : string,
    position : number
    }

    **response** = {
    message || error : string
    }

## Regras de negócio

- [x] A inscrição só deve ser feita com um email válido.

- [x] Não devem ser registradas linhas duplicadas com o mesmo email no banco de dados.

- [x] A propriedade "position" da tabela "message_flow" indica o dia em que a mensagem deve ser enviada.

- [x] A propriedade "last_message" da tabela "subscriptions" indica a última mensagem enviada para aquela inscrição.

- [x] A propriedade "last_message" deve ser atualizada todos os dias com a próxima mensagem do fluxo.

- [x] A propriedade "last_message" não deve ser atualizada em inscrições marcadas com "active" igual a "false".

- [x] Caso a inscrição já tenha recebido todas as mensagens do fluxo, a propriedade "active" deve ser marcada como "false".
