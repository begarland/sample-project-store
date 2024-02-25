import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DevtoolsModule } from '@nestjs/devtools-integration';
// import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';
// import { Item } from './items/entities/item.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DevtoolsModule.register({
      http: process.env.NODE_ENV !== 'production',
    }),
    // https://sebrave.medium.com/how-to-spin-up-a-local-mysql-database-on-macos-a550918f092b
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: 'localhost',
    //   port: 3306,
    //   username: 'root',
    //   password: 'root',
    //   database: 'test',
    //   entities: [Item],
    //   synchronize: true,
    //   autoLoadEntities: true,
    // }),
    MongooseModule.forRoot(process.env.MONGO_CONNECTION),
    ItemsModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
