import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Aluno from 'App/Models/Aluno'

export default class extends BaseSeeder {
  public async run () {
    await Aluno.createMany([
      {
        nome: 'Diogo Sales', 
        cpf: '05889054104',
        matricula: '21114290031',
        email: 'diogodobu@gmail.com',
        telefone: '984212998',
        cep: 72341306,
        logradouro: 'Qr 207 conjunto 06',
        complemento: 'Casa 19',
        numero: '19',
        bairro: 'Samambaia Norte'
      },
    ])
  }
}

