import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Aula extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public turmaId: number

  @column()
  public data: string

  @column()
  public conteudo: string

<<<<<<< HEAD
  @column()
  public turmaId: number
=======
>>>>>>> b62c35c642eac7af8b9edd28f1e09b52302e303e

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
