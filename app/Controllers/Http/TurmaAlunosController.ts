// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import TurmaAluno from "App/Models/TurmaAluno";

export default class TurmaAlunosController {
  index() {
    return TurmaAluno.all();
  }

  store({ request }) {
    const dados = request.only(["turma_id", "aluno_id"]);
    return TurmaAluno.create(dados);
  }
}
