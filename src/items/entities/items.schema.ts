import { EntitySchema } from 'typeorm';
import { Item } from './item.entity';

export const ItemSchema = new EntitySchema<Item>({
  name: 'Item',
  target: Item,
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    name: {
      type: String,
    },
    price: {
      type: Number,
      default: 0,
    },
    quantity: {
      type: Number,
      default: 0,
    },
    category: {
      type: String,
    },
    description: {
      type: String,
    },
  },
});
