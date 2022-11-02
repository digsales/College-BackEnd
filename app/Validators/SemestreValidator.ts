import { schema, rules, CustomMessages } from "@ioc:Adonis/Core/Validator";
import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class SemestreValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string([rules.maxLength(30)]),
    capacidade: schema.number(),
    tipo: schema.string([rules.maxLength(1)]),
  });

  public messages: CustomMessages = {
    required: "O campo {{field}} é obrigatório.",
    maxLength: "Tamanho máximo atingido",
  };
}
