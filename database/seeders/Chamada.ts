import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Chamada from 'App/Models/Chamada'

export default class extends BaseSeeder {
  public async run () {
    await Chamada.createMany([
      {
        aulaId: 1,
        alunoId: 1,
        presenca: 'P',
      },
    ])
  }
}

