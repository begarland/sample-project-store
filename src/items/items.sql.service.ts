import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Item } from './entities/item.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class ItemsService {
  constructor(
    private dataSource: DataSource,
    @InjectRepository(Item)
    private itemsRepository: Repository<Item>,
  ) {}

  findAll(): Promise<Item[]> {
    return this.itemsRepository.find();
  }

  findOne(id: number): Promise<Item | null> {
    return this.itemsRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.itemsRepository.delete(id);
  }

  //

  create(createItemDto: CreateItemDto) {
    console.log(createItemDto.name);

    return 'This action adds a new item';
  }

  update(id: number, updateItemDto: UpdateItemDto) {
    console.log(updateItemDto);

    return `This action updates a #${id} item`;
  }

  async createMany(items: Item[]) {
    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      await queryRunner.manager.save(items[0]);
      await queryRunner.manager.save(items[1]);

      await queryRunner.commitTransaction();
    } catch (err) {
      // since we have errors lets rollback the changes we made
      await queryRunner.rollbackTransaction();
    } finally {
      // you need to release a queryRunner which was manually instantiated
      await queryRunner.release();
    }
  }
}
