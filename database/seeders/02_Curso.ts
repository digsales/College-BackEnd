import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import Curso from "App/Models/Curso";

export default class extends BaseSeeder {
  public async run() {
    await Curso.createMany([
      { nome: "ADS", duracao: 5, modalidade: "P" },
      { nome: "Redes", duracao: 5, modalidade: "H" },
    ]);
  }
}
