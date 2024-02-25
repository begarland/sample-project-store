import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';

// import { ItemsService as sql } from './items.sql.service';
import { ItemsService as mongo } from './items.mongo.service';
import { ItemsController } from './items.controller';
// import { ItemSchema } from './entities/items.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Item, ItemsSchema } from './entities/items_mongo.schema';

@Module({
  imports: [
    // TypeOrmModule.forFeature([ItemSchema]),
    MongooseModule.forFeature([{ name: Item.name, schema: ItemsSchema }]),
  ],
  controllers: [ItemsController],
  providers: [mongo],
})
export class ItemsModule {}
