/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from "@ioc:Adonis/Core/Route";

Route.get("/", async () => {
  return { servidor: "ativo" };
});

Route.post("/store", "UsersController.store");
Route.post("/login", "UsersController.login");

Route.group(() => {
  Route.resource("/alunos", "AlunosController").apiOnly();
  Route.resource("/cursos", "CursosController").apiOnly();
  Route.resource("/disciplinas", "DisciplinasController").apiOnly();
  Route.resource("/professores", "ProfessoresController").apiOnly();
  Route.resource("/salas", "SalasController").apiOnly();
  Route.resource("/semestre", "SemestresController").apiOnly();
  Route.resource("/turmas", "TurmasController").apiOnly();
  Route.resource("/aulas", "AulasController").apiOnly();
  Route.resource("/chamadas", "ChamadasController").apiOnly();
  Route.resource("/turmaAlunos", "TurmaAlunosController").apiOnly();
}).middleware("auth");
