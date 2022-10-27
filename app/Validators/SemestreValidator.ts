import { schema, rules, CustomMessages } from "@ioc:Adonis/Core/Validator";
import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class SemestreValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string([
      rules.maxLength(30),
      rules.unique({ table: "semestres", column: "nome" }),
    ]),
    capacidade: schema.date(),
    tipo: schema.date(),
  });
  public messages: CustomMessages = {};
}
