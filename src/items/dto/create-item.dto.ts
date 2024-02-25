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
  price: number;

  /**
   * The category of the item
   * @example ['frozen', 'fruit']
   */
  category: string[];

  /**
   * an optional description for the item
   * @example 'this cat food is delicious'
   */
  description?: string;
}
