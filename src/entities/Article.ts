import { Entity, Column, PrimaryColumn } from 'typeorm'
import { v4 } from 'uuid'

@Entity('articles')
export class Article {
  @PrimaryColumn()
  public readonly id: string

  @Column()
  public title: string

  @Column()
  public author: string

  @Column()
  public text: string

  constructor(props: Omit<Article, 'id'>, id?: string) {
    Object.assign(this, props)

    if (!id) {
      this.id = v4()
    }
  }
}
