import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class tabelaMarcaETabelaModelo1645117874300
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "marca",
        columns: [
          {
            name: "id",
            type: "bigint",
            generationStrategy: "increment",
            isPrimary: true,
            isGenerated: true,
          },
          {
            name: "nome",
            type: "varchar",
            isNullable: true,
          },
        ],
      })
    );

    await queryRunner.createTable(
      new Table({
        name: "modelo",
        columns: [
          {
            name: "id",
            type: "bigint",
            generationStrategy: "increment",
            isPrimary: true,
            isGenerated: true,
          },
          {
            name: "nome",
            type: "varchar",
            isNullable: true,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("modelo");
    await queryRunner.dropTable("marca");
  }
}
