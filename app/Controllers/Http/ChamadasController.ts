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
}
