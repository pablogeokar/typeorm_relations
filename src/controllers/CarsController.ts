import { Get, JsonController } from "routing-controllers";
import { createQueryBuilder } from "typeorm";
import { Veiculo } from "./../models/Veiculo";

@JsonController("/carros")
export default class CarsController {
  @Get()
  async index(): Promise<Veiculo[]> {
    return createQueryBuilder(Veiculo, "veiculo")
      .innerJoinAndSelect("veiculo.modelo", "modelo")
      .innerJoinAndSelect("modelo.marca", "marca")
      .innerJoinAndSelect("veiculo.opcionais", "opcional")
      .select([
        "veiculo.id",
        "veiculo.placa",
        "veiculo.quilometragem",
        "veiculo.cor",
        "veiculo.quantidadeDePortas",
        "modelo.nome",
        "marca.nome",
        "opcional.nome",
      ])
      .getMany();
  }
}
