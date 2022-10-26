import { DateTime } from "luxon";
import {
  BaseModel,
  BelongsTo,
  belongsTo,
  column,
  HasMany,
  hasMany,
  ManyToMany,
  manyToMany,
} from "@ioc:Adonis/Lucid/Orm";
import Disciplina from "./Disciplina";
import Sala from "./Sala";
import Professor from "./Professor";
import Aula from "./Aula";
import Semestre from "./Semestre";
import Aluno from "./Aluno";

export default class Turma extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public nome: string;

  @column()
  public professorId: number;

  @column()
  public semestreId: number;

  @column()
  public disciplinaId: number;

  @column()
  public salaId: number;

  @column()
  public turno: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @belongsTo(() => Disciplina)
  public disciplinas: BelongsTo<typeof Disciplina>;

  @belongsTo(() => Sala)
  public salas: BelongsTo<typeof Sala>;

  @belongsTo(() => Professor)
  public professores: BelongsTo<typeof Professor>;

  @belongsTo(() => Semestre)
  public semestres: BelongsTo<typeof Semestre>;

  @hasMany(() => Aula)
  public aulas: HasMany<typeof Aula>;

  @manyToMany(() => Aluno)
  public alunos: ManyToMany<typeof Aluno>;
}
