// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Disciplina from "App/Models/Disciplina";
import DisciplinaValidator from "App/Validators/DisciplinaValidator";

export default class DisciplinasController {
  async index() {
    return await Disciplina.query().preload("curso").preload("turmas");
  }

  async store({ request }) {
    const dados = await request.validate(DisciplinaValidator);
    return await Disciplina.create(dados);
  }

  async show({ request }) {
    const id = await request.param("id");
    return await Disciplina.findOrFail(id);
  }

  async destroy({ request }) {
    const id = await request.param("id");
    const disciplina = await Disciplina.findOrFail(id);
    return disciplina.delete();
  }

  async update({ request }) {
    const id = request.param("id");
    const disciplina = await Disciplina.findOrFail(id);

    const dados = await request.validate(DisciplinaValidator);

    disciplina.merge(dados).save();

    return disciplina;
  }
}
