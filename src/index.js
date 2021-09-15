const express = require('express');

const app = express();

/**
 * GET - Buscar uma informacao dentro do servidor
 * POST - Iserir uma informaçao no servidor
 * PUT - Alterar uma informaçao no servidor
 * DELETE - Deletar uam informação no servidor
 */

app.get("/coursers", (request, response) => {
  return response.json(["Curso 1", "Curso 2", "Curso 3"]);
});

app.post("/coursers", (request, response) => {
  return response.json(["Curso 1", "Curso 2", "Curso 3", "Curso 4"]);
});

app.put("/coursers/:id", (request, response) => {
  return response.json(["Curso 6", "Curso 2", "Curso 3", "Curso 4"]);
});

app.patch("/courses/:id", (request, response) => {
  return response.json(["Curso 6", "Curso 7", "Curso 3", "Curso 4"]);
});

app.delete("courses/:id", (request, response) => {
  return response.json(["Curso 6", "Curso 2", "Curso 4"])
})

app.listen(3333);