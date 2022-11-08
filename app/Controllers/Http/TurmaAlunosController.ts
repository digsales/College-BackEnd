// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import TurmaAluno from "App/Models/TurmaAluno";
import TurmaAlunoValidator from "App/Validators/TurmaAlunoValidator";

export default class TurmaAlunosController {
  async index() {
    return await TurmaAluno.query();
  }

  async store({ request }) {
    const dados = await request.validate(TurmaAlunoValidator);
    return await TurmaAluno.create(dados);
  }

  async show({ request }) {
    const id = request.param("id");
    return await TurmaAluno.findOrFail(id);
  }

  async destroy({ request }) {
    const id = await request.param("id");
    const turmaAluno = await TurmaAluno.findOrFail(id);
    turmaAluno.delete();
    return "Deletado com sucesso!";
  }

  async update({ request }) {
    const id = await request.param("id");
    const turmaAluno = await TurmaAluno.findOrFail(id);

    const dados = await request.validate(TurmaAlunoValidator);

    turmaAluno.merge(dados).save();

    return turmaAluno;
  }
}
