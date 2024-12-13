import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity({ name: 'todos' })
export class Todo {
  @ObjectIdColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  status: string;
}
