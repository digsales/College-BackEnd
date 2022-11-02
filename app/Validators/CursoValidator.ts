import { schema, rules, CustomMessages } from "@ioc:Adonis/Core/Validator";
import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class CursoValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string([
      rules.maxLength(50),
      rules.unique({ table: "cursos", column: "nome" }),
    ]),
    duracao: schema.number.optional(),
    modalidade: schema.string([rules.maxLength(1)]),
  });

  public messages: CustomMessages = {
    required: "O campo {{field}} é obrigatório.",
    unique: "Já existe um campo {{field}} com este dado.",
    maxLength: "Tamanho máximo atingido",
  };
}
