import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import Professor from "App/Models/Professor";

export default class extends BaseSeeder {
  public async run() {
    await Professor.createMany([
      {
        nome: "Rogério Ceni",
        cpf: "09999999909",
        matricula: "99999999999",
        salario: "R$4500,00",
        email: "rogerioceni@gmail.com",
        telefone: "61999999999",
        cep: 99999999,
        logradouro: "Ceilândia",
        complemento: "Setor O",
        numero: "31",
      },
    ]);
  }
}
