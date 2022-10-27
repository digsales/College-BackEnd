// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Turma from "App/Models/Turma";
import TurmaValidator from "App/Validators/TurmaValidator";

export default class TurmasController {
  index() {
    return Turma.query()
      .preload("professores")
      .preload("semestres")
      .preload("disciplinas")
      .preload("salas");
  }

  store({ request }) {
    const dados = request.validate(TurmaValidator);
    return Turma.create(dados);
  }

  show({ request }) {
    const id = request.param("id");
    return Turma.findOrFail(id);
  }

  async destroy({ request }) {
    const id = request.param("id");
    const turma = await Turma.findOrFail(id);
    return turma.delete();
  }

  async update({ request }) {
    const id = request.param("id");
    const turma = await Turma.findOrFail(id);

    const dados = request.only([
      "nome",
      "professorId",
      "semestreId",
      "disciplinaId",
      "salaId",
      "turno",
    ]);

    turma.merge(dados).save();

    return turma;
  }
}
