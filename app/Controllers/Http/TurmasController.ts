// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Turma from "App/Models/Turma";

export default class TurmasController {
  index() {
    return Turma.all();
  }

  store({ request }) {
    const dados = request.only([
      "nome",
      "professor_id",
      "semestre_id",
      "disciplina_id",
      "sala_id",
      "turno",
    ]);
    return Turma.create(dados);
  }
}
