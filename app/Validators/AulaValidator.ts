import { schema, CustomMessages } from "@ioc:Adonis/Core/Validator";
import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class AulaValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    turmaId: schema.number(),
    data: schema.date(),
    conteudo: schema.string(),
  });

  public messages: CustomMessages = {};
}
