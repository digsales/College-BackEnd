// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Aula from "App/Models/Aula";
import AulaValidator from "App/Validators/AulaValidator";

export default class AulasController {
  index() {
    return Aula.query().preload("chamadas").preload("turmas");
  }

  store({ request }) {
    const dados = request.validate(AulaValidator);
    return Aula.create(dados);
  }

  show({ request }) {
    const id = request.param("id");
    return Aula.findOrFail(id);
  }

  async destroy({ request }) {
    const id = request.param("id");
    const aula = await Aula.findOrFail(id);
    return aula.delete();
  }

  async update({ request }) {
    const id = request.param("id");
    const aulas = await Aula.findOrFail(id);

    const dados = request.only(["turmaId", "data", "conteudo"]);

    aulas.merge(dados).save();

    return aulas;
  }
}
