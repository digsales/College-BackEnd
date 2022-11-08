// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Semestre from "App/Models/Semestre";
import SemestreValidator from "App/Validators/SemestreValidator";

export default class SemestresController {
  async index() {
    return await Semestre.query().preload("turmas");
  }

  async store({ request }) {
    const dados = await request.validate(SemestreValidator);
    return await Semestre.create(dados);
  }

  async show({ request }) {
    const id = await request.param("id");
    return await Semestre.findOrFail(id);
  }

  async destroy({ request }) {
    const id = await request.param("id");
    const semestre = await Semestre.findOrFail(id);
    semestre.delete();
    return "Deletado com sucesso!";
  }

  async update({ request }) {
    const id = await request.param("id");
    const semestre = await Semestre.findOrFail(id);

    const dados = await request.validate(SemestreValidator);

    semestre.merge(dados).save();

    return semestre;
  }
}
