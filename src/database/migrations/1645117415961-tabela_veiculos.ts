import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class tabelaVeiculos1645117415961 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "veiculo",
        columns: [
          {
            name: "id",
            type: "bigint",
            generationStrategy: "increment",
            isPrimary: true,
            isGenerated: true,
          },
          {
            name: "placa",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "quilometragem",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "cor",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "preco",
            type: "decimal",
            precision: 10,
            scale: 2,
            default: 0,
          },
          {
            name: "quantidade_portas",
            type: "int",
            isNullable: true,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("veiculo");
  }
}
