// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Curso from "App/Models/Curso";
import CursoValidator from "App/Validators/CursoValidator";

export default class CursosController {
  index() {
    return Curso.query().select("*").preload("disciplinas");
  }

  store({ request }) {
    const dados = request.validate(CursoValidator);
    return Curso.create(dados);
  }

  show({ request }) {
    const id = request.param("id");
    return Curso.findOrFail(id);
  }

  async destroy({ request }) {
    const id = request.param("id");
    const curso = await Curso.findOrFail(id);
    return curso.delete();
  }

  async update({ request }) {
    const id = request.param("id");
    const curso = await Curso.findOrFail(id);

    const dados = request.only(["nome", "cursoId"]);

    curso.merge(dados).save();

    return curso;
  }
}
