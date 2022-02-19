import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class tabelaOpcional1645272529499 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "opcional",
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
    await queryRunner.dropTable("opcional");
  }
}
