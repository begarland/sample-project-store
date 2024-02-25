import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ItemDocument = HydratedDocument<Item>;

@Schema()
export class Item {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  price: number = 0;

  @Prop({ required: true })
  quantity: number = 0;

  @Prop([String])
  category: string[];

  @Prop()
  description: string;
}

export const ItemsSchema = SchemaFactory.createForClass(Item);
