// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Aula from "App/Models/Aula";
import AulaValidator from "App/Validators/AulaValidator";

export default class AulasController {
  async index() {
    return await Aula.query().preload("chamadas").preload("turmas");
  }

  async store({ request }) {
    const dados = await request.validate(AulaValidator);
    return await Aula.create(dados);
  }

  async show({ request }) {
    const id = await request.param("id");
    return Aula.findOrFail(id);
  }

  async destroy({ request }) {
    const id = await request.param("id");
    const aula = await Aula.findOrFail(id);
    return aula.delete();
  }

  async update({ request }) {
    const id = await request.param("id");
    const aulas = await Aula.findOrFail(id);

    const dados = await request.validate(AulaValidator);

    aulas.merge(dados).save();

    return aulas;
  }
}
