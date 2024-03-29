import { PartialType } from '@nestjs/mapped-types';
import { CreateItemDto } from './create-item.dto';

export class UpdateItemDto extends PartialType(CreateItemDto) {
  /**
   * The name of the item
   * @example 'cat food'
   */
  name: string;

  /**
   * The price of the item
   * @example '2.99'
   */
  price: number = 1.0;

  /**
   * The quantity of the item in inventory
   * @example '100'
   */
  quantity: number = 0;

  /**
   * The category of the item
   * @example ['frozen', 'fruit']
   */
  category?: string[];

  /**
   * an optional description for the item
   * @example 'this cat food is delicious'
   */
  description?: string;
}
