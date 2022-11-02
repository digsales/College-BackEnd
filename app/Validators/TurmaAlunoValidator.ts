import { schema, rules, CustomMessages } from "@ioc:Adonis/Core/Validator";
import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class TurmaAlunoValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    turmaId: schema.number([rules.exists({ table: "turmas", column: "id" })]),
    alunoId: schema.number([rules.exists({ table: "alunos", column: "id" })]),
  });

  public messages: CustomMessages = {
    required: "O campo {{field}} é obrigatório.",
    exists: "Não existe este dado na tabela pai",
  };
}
