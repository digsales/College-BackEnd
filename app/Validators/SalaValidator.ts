import { schema, rules, CustomMessages } from "@ioc:Adonis/Core/Validator";
import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class SalaValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string([
      rules.maxLength(50),
      rules.unique({ table: "salas", column: "nome" }),
    ]),
    capacidade: schema.number.optional(),
    tipo: schema.string([rules.maxLength(1)]),
  });

  public messages: CustomMessages = {};
}
