// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Sala from "App/Models/Sala";

export default class SalasController {
  index() {
    return Sala.all();
  }

  store({ request }) {
    const dados = request.only(["nome", "capacidade", "tipo"]);
    return Sala.create(dados);
  }
}
