import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import Semestre from "App/Models/Semestre";

export default class extends BaseSeeder {
  public async run() {
    await Semestre.createMany([
      {
        nome: "AA2",
        dataInicio: new Date(2022, 7, 22),
        dataFim: new Date(2022, 12, 22),
      },
    ]);
  }
}
