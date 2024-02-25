import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateItemDto } from './dto/create-item.dto';
import { Item } from './entities/item.entity';

@Injectable()
export class ItemsService {
  constructor(@InjectModel(Item.name) private ItemModel: Model<Item>) {}

  async create(createItemDto: CreateItemDto): Promise<Item> {
    const createdItem = new this.ItemModel(createItemDto);
    return createdItem.save();
  }

  async findAll(): Promise<Item[]> {
    return this.ItemModel.find().exec();
  }
}
