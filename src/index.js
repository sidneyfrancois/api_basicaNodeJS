const express = require("express");

const app = express();

/**
 * cpf       - string
 * name      - string
 * id        - uuid
 * statement -  []
 */

app.post("/account", (request, response) => {
  const { cpf, name } = request.body;
});

app.listen(3333);
