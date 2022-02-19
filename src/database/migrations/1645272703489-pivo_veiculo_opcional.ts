import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class pivoVeiculoOpcional1645272703489 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "veiculo_opcional",
        columns: [
          { name: "veiculo_id", type: "bigint" },
          { name: "opcional_id", type: "bigint" },
        ],
        foreignKeys: [
          new TableForeignKey({
            name: "veiculo_opcional_fk",
            columnNames: ["veiculo_id"],
            referencedTableName: "veiculo",
            referencedColumnNames: ["id"],
            onDelete: "SET NULL",
            onUpdate: "CASCADE",
          }),
          new TableForeignKey({
            name: "opcional_veiculo_fk",
            columnNames: ["opcional_id"],
            referencedTableName: "opcional",
            referencedColumnNames: ["id"],
            onDelete: "SET NULL",
            onUpdate: "CASCADE",
          }),
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("veiculo_opcional", "opcional_veiculo_fk");
    await queryRunner.dropForeignKey("veiculo_opcional", "veiculo_opcional_fk");
    await queryRunner.dropTable("veiculo_opcional");
  }
}
