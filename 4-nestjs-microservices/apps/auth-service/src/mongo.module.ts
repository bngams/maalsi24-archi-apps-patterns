import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./modules/users/entities/user.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb+srv://boris:WH12U5XkDINCq71V@cluster0.8ovqm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
      database: 'auth',
      logging: true,
      entities: [User]
    }),
  ], 
  exports: [TypeOrmModule] 
})
export class MongoModule {} 