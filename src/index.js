const express = require('express');

const app = express();

app.use(express.json());

/**
 * GET - Buscar uma informacao dentro do servidor
 * POST - Iserir uma informaçao no servidor
 * PUT - Alterar uma informaçao no servidor
 * DELETE - Deletar uam informação no servidor

 */


/**
 * Tipos de parâmentros
 * Routes Params => serve para identificar um recurso para poder editar/deletar/buscar
 *  Body Params => Os objetos inserção/alteração (JSON no insomnia)
 * 
 */

app.get("/courses", (request, response) => {
  const query = request.query;
  console.log(query);
  return response.json(["Curso 1", "Curso 2", "Curso 3"]);
});

app.post("/courses", (request, response) => {
  const body = request.body;
  console.log(body);
  return response.json(["Curso 1", "Curso 2", "Curso 3", "Curso 4"]);
});

app.put("/courses/:id", (request, response) => {
  const { id } = request.params;
  console.log(id);
  return response.json(["Curso 6", "Curso 2", "Curso 3", "Curso 4"]);
});

app.patch("/courses/:id", (request, response) => {
  return response.json(["Curso 6", "Curso 7", "Curso 3", "Curso 4"]);
});

app.delete("/courses/:id", (request, response) => {
  return response.json(["Curso 6", "Curso 2", "Curso 4"]);
});

app.listen(3333);