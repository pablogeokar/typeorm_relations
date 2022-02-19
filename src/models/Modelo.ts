import {
  Column,
  Entity,
  Generated,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { IntegerTransformer } from "../../transformers/IntegerTransformer";
import { Marca } from "./Marca";

@Entity("modelo")
export class Modelo {
  @Generated("increment")
  @PrimaryColumn("bigint", {
    transformer: IntegerTransformer.getInstance(),
  })
  id: number;

  @Column("varchar")
  nome: string;

  @JoinColumn({ name: "marca_id" })
  @ManyToOne(() => Marca)
  marca: Marca;
}
