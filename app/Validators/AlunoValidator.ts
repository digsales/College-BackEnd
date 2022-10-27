import { schema, rules, CustomMessages } from "@ioc:Adonis/Core/Validator";
import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class AlunoValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string([rules.maxLength(100)]),
    cpf: schema.number.optional([
      rules.unique({ table: "alunos", column: "cpf" }),
    ]),
    matricula: schema.string([
      rules.minLength(20),
      rules.maxLength(20),
      rules.unique({ table: "alunos", column: "matricula" }),
    ]),
    email: schema.string.optional([
      rules.email(),
      rules.maxLength(100),
      rules.unique({ table: "alunos", column: "email" }),
    ]),
    telefone: schema.string.optional([
      rules.range(11, 15),
      rules.unique({ table: "alunos", column: "telefone" }),
    ]),
    cep: schema.string.optional(),
    logradouro: schema.string.optional([rules.maxLength(100)]),
    complemento: schema.string.optional([rules.maxLength(100)]),
    numero: schema.string.optional([rules.maxLength(20)]),
    bairro: schema.string.optional([rules.maxLength(100)]),
  });

  public messages: CustomMessages = {};
}
