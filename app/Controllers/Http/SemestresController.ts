// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Semestre from "App/Models/Semestre";

export default class SemestresController {
  index() {
    return Semestre.all();
  }

  store({ request }) {
    const dados = request.only(["nome", "data_inicio", "data_fim"]);
    return Semestre.create(dados);
  }

  show({ request }) {
    const id = request.param("id");
    return Semestre.findOrFail(id);
  }

  async destroy({ request }) {
    const id = request.param("id");
    const semestre = await Semestre.findOrFail(id);
    return semestre.delete();
  }

  update({ request }) {}
}
