import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableColumn,
  TableForeignKey
} from 'typeorm'

export class Claps1620269268559 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'claps',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            unsigned: true,
            isPrimary: true
          },
          {
            name: 'total',
            type: 'int'
          },
          {
            name: 'articleId',
            type: 'varchar'
          }
        ],
        foreignKeys: [
          {
            columnNames: ['articleId'],
            referencedTableName: 'articles',
            referencedColumnNames: ['id'],
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
          }
        ]
      })
    )
    await queryRunner.addColumn(
      'claps',
      new TableColumn({
        name: 'userId',
        type: 'varchar'
      })
    )
    await queryRunner.createForeignKey(
      'claps',
      new TableForeignKey({
        columnNames: ['userId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'CASCADE'
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('claps')
  }
}
