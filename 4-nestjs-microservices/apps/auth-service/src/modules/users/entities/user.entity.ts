import { Column, Entity, ObjectIdColumn } from "typeorm";

@Entity({name: 'users'}) 
export class User {
    @ObjectIdColumn()
    id: string;

    @Column() 
    username: string;
    
    @Column()
    password: string; 

    @Column() 
    phone: string; 
} 