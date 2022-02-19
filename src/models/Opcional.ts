import { Column, Entity, Generated, PrimaryColumn } from "typeorm";
import { IntegerTransformer } from "../../transformers/IntegerTransformer";

@Entity("opcional")
export class Opcional {
  @Generated("increment")
  @PrimaryColumn("bigint", {
    transformer: IntegerTransformer.getInstance(),
  })
  id: number;

  @Column("varchar")
  nome: string;
}
