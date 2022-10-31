import { DateTime } from "luxon";
import {
  BaseModel,
  belongsTo,
  BelongsTo,
  column,
  HasMany,
  hasMany,
} from "@ioc:Adonis/Lucid/Orm";
import Turma from "./Turma";
import Chamada from "./Chamada";

export default class Aula extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public turmaId: number;

  @column()
  public data: Date;

  @column()
  public conteudo: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @belongsTo(() => Turma)
  public turma: BelongsTo<typeof Turma>;

  @hasMany(() => Chamada)
  public chamadas: HasMany<typeof Chamada>;
}
