// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Chamada from "App/Models/Chamada";

export default class ChamadasController {
  index() {
    return Chamada.query();
  }

  store({ request }) {
    const dados = request.only(["aulaId", "alunoId", "presenca"]);
    return Chamada.create(dados);
  }

  show({ request }) {
    const id = request.param("id");
    return Chamada.findOrFail(id);
  }

  async destroy({ request }) {
    const id = request.param("id");
    const chamada = await Chamada.findOrFail(id);
    return chamada.delete();
  }

  async update({ request }) {
    const id = request.param("id");
    const chamada = await Chamada.findOrFail(id);

    const dados = request.only(["aulaId", "alunoId", "presenca"]);

    chamada.merge(dados).save();

    return chamada;
  }
}
