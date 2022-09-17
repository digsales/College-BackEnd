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
  return { hello: "world" };
});

Route.group(() => {
  Route.get("/lista", "AlunosController.index");
  Route.post("/cadastro", "AlunosController.store");
}).prefix("/alunos");

Route.group(() => {
  Route.get("/lista", "CursosController.index");
  Route.post("/cadastro", "CursosController.store");
}).prefix("/cursos");

Route.group(() => {
  Route.get("/lista", "DisciplinasController.index");
  Route.post("/cadastro", "DisciplinasController.store");
}).prefix("/disciplinas");

Route.group(() => {
  Route.get("/lista", "ProfessoresController.index");
  Route.post("/cadastro", "ProfessoresController.store");
}).prefix("/professores");

Route.group(() => {
  Route.get("/lista", "SalasController.index");
  Route.post("/cadastro", "SalasController.store");
}).prefix("/salas");

Route.group(() => {
  Route.get("/lista", "SemestresController.index");
  Route.post("/cadastro", "SemestresController.store");
}).prefix("/semestres");

Route.group(() => {
  Route.get("/lista", "TurmasController.index");
  Route.post("/cadastro", "TurmasController.store");
}).prefix("/turmas");

Route.group(() => {
  Route.get("/lista", "AulasController.index");
  Route.post("/cadastro", "AulasController.store");
}).prefix("/aulas");

Route.group(() => {
  Route.get("/lista", "ChamadasController.index");
  Route.post("/cadastro", "ChamadasController.store");
}).prefix("/chamadas");

Route.group(() => {
  Route.get("/lista", "TurmaAlunosController.index");
  Route.post("/cadastro", "TurmaAlunosController.store");
}).prefix("/turmaAlunos");
