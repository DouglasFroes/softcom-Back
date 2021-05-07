import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm'
import { v4 } from 'uuid'
import { Article } from './Article'
import { User } from './User'

interface claps {
  id?: string
  article: string
  user: string
}

@Entity('claps')
export class Claps {
  @PrimaryColumn()
  public readonly id: string

  @Column('int')
  public total = 0

  @ManyToOne(() => Article, articles => articles.id)
  @JoinColumn()
  public article: Article

  @ManyToOne(() => User, user => user.id)
  @JoinColumn()
  public user: User

  constructor(props: claps, id?: string) {
    Object.assign(this, props)

    if (!id) {
      this.id = v4()
    }
  }
}
