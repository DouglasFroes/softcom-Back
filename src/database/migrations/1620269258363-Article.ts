import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class Article1620269258363 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'articles',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            unsigned: true,
            isPrimary: true
          },
          {
            name: 'title',
            type: 'varchar'
          },
          {
            name: 'author',
            type: 'varchar'
          },
          {
            name: 'text',
            type: 'text'
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()'
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('articles')
  }
}
