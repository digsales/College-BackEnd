import { schema, rules, CustomMessages } from "@ioc:Adonis/Core/Validator";
import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class TurmaValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    professorId: schema.number([
      rules.exists({ table: "professors", column: "id" }),
    ]),
    semestreId: schema.number([
      rules.exists({ table: "semestres", column: "id" }),
    ]),
    disciplinaId: schema.number([
      rules.exists({ table: "disciplinas", column: "id" }),
    ]),
    salaId: schema.number([rules.exists({ table: "salas", column: "id" })]),
    nome: schema.string([
      rules.maxLength(50),
      rules.unique({ table: "turmas", column: "nome" }),
    ]),
    tipo: schema.string([rules.maxLength(1)]),
  });

  public messages: CustomMessages = {};
}
