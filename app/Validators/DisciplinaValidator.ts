import { schema, rules, CustomMessages } from "@ioc:Adonis/Core/Validator";
import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class DisciplinaValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    cursoId: schema.number([rules.exists({ table: "cursos", column: "id" })]),
    nome: schema.string.optional([
      rules.maxLength(50),
      rules.unique({ table: "disciplinas", column: "nome" }),
    ]),
  });

  public messages: CustomMessages = {
    required: "O campo {{field}} é obrigatório.",
    unique: "Já existe um campo {{field}} com este dado.",
    maxLength: "Tamanho máximo atingido",
    exists: "Não existe este dado na tabela pai",
  };
}
