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

  show({ request }) {
    const id = request.param("id");
    return TurmaAluno.findOrFail(id);
  }

  async destroy({ request }) {
    const id = request.param("id");
    const turmaAluno = await TurmaAluno.findOrFail(id);
    return turmaAluno.delete();
  }

  async update({ request }) {
    const id = request.param("id");
    const turmaAluno = await TurmaAluno.findOrFail(id);

    const dados = request.only(["nome", "data_inicio", "data_fim"]);

    turmaAluno.merge(dados).save();

    return turmaAluno;
  }
}
