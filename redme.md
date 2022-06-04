<h1 align="center">Desafio Back-end Precato</h1>

## Tecnologias utilizadas

- Express
- Nodejs
- Typescript
- Sequelize
- Sqlite

## Regras de negócio

- [x] A inscrição só deve ser feita com um email válido.

- [x] Não devem ser registradas linhas duplicadas com o mesmo email no banco de dados.

- [x] A propriedade "position" da tabela "message_flow" indica o dia em que a mensagem deve ser enviada.

- [x] A propriedade "last_message" da tabela "subscriptions" indica a última mensagem enviada para aquela inscrição.

- [x] A propriedade "last_message" deve ser atualizada todos os dias com a próxima mensagem do fluxo.

- [x] A propriedade "last_message" não deve ser atualizada em inscrições marcadas com "active" igual a "false".

- [x] Caso a inscrição já tenha recebido todas as mensagens do fluxo, a propriedade "active" deve ser marcada como "false".
