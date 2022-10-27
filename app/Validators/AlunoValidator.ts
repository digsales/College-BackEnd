import { schema, CustomMessages } from "@ioc:Adonis/Core/Validator";
import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class AlunoValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string(),
    cpf: schema.number.optional(),
    matricula: schema.string(),
    email: schema.string.optional(),
    telefone: schema.string.optional(),
    cep: schema.string.optional(),
    logradouro: schema.string.optional(),
    complemento: schema.string.optional(),
    numero: schema.string.optional(),
    bairro: schema.string.optional(),
  });

  public messages: CustomMessages = {};
}
