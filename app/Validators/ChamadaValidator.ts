import { schema, rules, CustomMessages } from "@ioc:Adonis/Core/Validator";
import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class ChamadaValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    aulaId: schema.number([rules.exists({ table: "aulas", column: "id" })]),
    alunoId: schema.number([rules.exists({ table: "alunos", column: "id" })]),
    presenca: schema.string([rules.maxLength(1)]),
  });

  public messages: CustomMessages = {
    required: "O campo {{field}} é obrigatório.",
    maxLength: "Tamanho máximo atingido",
    exists: "Não existe este dado na tabela pai",
  };
}
