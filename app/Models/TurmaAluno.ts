import { DateTime } from "luxon";
import { BaseModel, BelongsTo, belongsTo, column } from "@ioc:Adonis/Lucid/Orm";
import Turma from "./Turma";
import Aluno from "./Aluno";

export default class TurmaAluno extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public turmaId: number;

  @column()
  public alunoId: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @belongsTo(() => Turma)
  public turma: BelongsTo<typeof Turma>;

  @belongsTo(() => Aluno)
  public aluno: BelongsTo<typeof Aluno>;
}
