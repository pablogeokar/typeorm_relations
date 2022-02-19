import { Column, Entity, Generated, PrimaryColumn } from "typeorm";
import { IntegerTransformer } from "../../transformers/IntegerTransformer";

@Entity("marca")
export class Marca {
  @Generated("increment")
  @PrimaryColumn("bigint", {
    transformer: IntegerTransformer.getInstance(),
  })
  id: number;

  @Column("varchar")
  nome: string;
}
