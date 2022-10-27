import { schema, rules, CustomMessages } from "@ioc:Adonis/Core/Validator";
import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class DisciplinaValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    cursoId: schema.number([rules.exists({ table: "aulas", column: "id" })]),
    nome: schema.number([rules.maxLength(50)]),
  });

  public messages: CustomMessages = {};
}
