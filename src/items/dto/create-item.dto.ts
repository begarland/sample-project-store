export class CreateItemDto {
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
  quantity: number;

  /**
   * The category of the item
   * @example ['pet', 'cat']
   */
  category?: string[];

  /**
   * an optional description for the item
   * @example 'this cat food is delicious'
   */
  description?: string;
}
