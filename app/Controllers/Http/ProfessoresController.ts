// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Professor from "App/Models/Professor";
import ProfessorValidator from "App/Validators/ProfessorValidator";

export default class ProfessoresController {
  async index() {
    return await Professor.query().preload("turmas");
  }

  async store({ request }) {
    const dados = await request.validate(ProfessorValidator);
    return await Professor.create(dados);
  }

  async show({ request }) {
    const id = await request.param("id");
    return await Professor.findOrFail(id);
  }

  async destroy({ request }) {
    const id = await request.param("id");
    const professor = await Professor.findOrFail(id);
    professor.delete();
    return "Deletado com sucesso!";
  }

  async update({ request }) {
    const id = await request.param("id");
    const professor = await Professor.findOrFail(id);

    const dados = await request.validate(ProfessorValidator);

    professor.merge(dados).save();

    return professor;
  }
}
