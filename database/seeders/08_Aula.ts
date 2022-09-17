import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import Aula from "App/Models/Aula";

export default class extends BaseSeeder {
  public async run() {
    await Aula.createMany([
      {
        turmaId: 1,
        data: new Date(2022, 9, 13),
        conteudo: "Algoritmos",
      },
    ]);
  }
}
