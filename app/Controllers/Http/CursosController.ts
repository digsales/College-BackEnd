// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Curso from "App/Models/Curso";
import CursoValidator from "App/Validators/CursoValidator";

export default class CursosController {
  async index() {
    return await Curso.query().select("*").preload("disciplinas");
  }

  async store({ request }) {
    const dados = await request.validate(CursoValidator);
    return await Curso.create(dados);
  }

  async show({ request }) {
    const id = await request.param("id");
    return await Curso.findOrFail(id);
  }

  async destroy({ request }) {
    const id = await request.param("id");
    const curso = await Curso.findOrFail(id);
    return curso.delete();
  }

  async update({ request }) {
    const id = await request.param("id");
    const curso = await Curso.findOrFail(id);

    const dados = await request.validate(CursoValidator);

    curso.merge(dados).save();

    return curso;
  }
}
