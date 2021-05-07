import { Entity, Column, PrimaryColumn } from 'typeorm'
import { v4 } from 'uuid'

@Entity('users')
export class User {
  @PrimaryColumn()
  public readonly id: string

  @Column()
  public name: string

  @Column()
  public email: string

  constructor(props: Omit<User, 'id'>, id?: string) {
    Object.assign(this, props)

    if (!id) {
      this.id = v4()
    }
  }
}
