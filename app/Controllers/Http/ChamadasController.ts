// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Chamada from "App/Models/Chamada";

export default class ChamadasController {
  index() {
    return Chamada.all();
  }

  store({ request }) {
    const dados = request.only(["aula_id", "aluno_id", "presenca"]);
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

  update({ request }) {}
}
