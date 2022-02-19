import {
  Column,
  Entity,
  Generated,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { IntegerTransformer } from "./../../transformers/IntegerTransformer";
import { DecimalTransformer } from "./../../transformers/DecimalTransformer";
import { Modelo } from "./Modelo";
import { Opcional } from "./Opcional";

@Entity("veiculo")
export class Veiculo {
  @Generated("increment")
  @PrimaryColumn("bigint", {
    transformer: IntegerTransformer.getInstance(),
  })
  id: number;

  @Column("varchar")
  placa: string;

  @Column("int")
  quilometragem: number;

  @Column("varchar")
  cor: string;

  @Column("decimal", {
    transformer: DecimalTransformer.getInstance(),
  })
  preco: number;

  @Column("int", { name: "quantidade_portas" })
  quantidadeDePortas: number;

  @JoinColumn({ name: "modelo_id" })
  @ManyToOne(() => Modelo)
  modelo: Modelo;

  @ManyToMany(() => Opcional)
  @JoinTable({
    name: "veiculo_opcional",
    joinColumn: {
      name: "veiculo_id",
    },
    inverseJoinColumn: {
      name: "opcional_id",
    },
  })
  opcionais: Opcional[];
}
