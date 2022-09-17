// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Aula from "App/Models/Aula";

export default class AulasController {
  index() {
    return Aula.all();
  }

  store({ request }) {
    const dados = request.only(["turma_id", "data", "conteudo"]);
    return Aula.create(dados);
  }
}
