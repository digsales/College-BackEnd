// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Turma from "App/Models/Turma";
import TurmaValidator from "App/Validators/TurmaValidator";

export default class TurmasController {
  async index() {
    return await Turma.query()
      .preload("professor")
      .preload("semestre")
      .preload("disciplina")
      .preload("sala")
      .preload("aulas")
      .preload("alunos");
  }

  async store({ request }) {
    const dados = await request.validate(TurmaValidator);
    return await Turma.create(dados);
  }

  async show({ request }) {
    const id = await request.param("id");
    return await Turma.findOrFail(id);
  }

  async destroy({ request }) {
    const id = await request.param("id");
    const turma = await Turma.findOrFail(id);
    turma.delete();
    return "Deletado com sucesso!";
  }

  async update({ request }) {
    const id = await request.param("id");
    const turma = await Turma.findOrFail(id);

    const dados = await request.validate(TurmaValidator);

    turma.merge(dados).save();

    return turma;
  }
}
