import Buyable from '../domain/Buyable';

/**
 * @class Cart
 * 
 * array items
 */
export default class Cart {
    private _items: Buyable[] = [];

    /**
     * Добавляет элемент в массив
     * 
     * @param {Buyable} item - элемент реализующий интерфейс Buyable
     */
    add(item: Buyable): void {
        this._items.push(item);
    }

    /**
     * @geter возвращает this._items
     */
    get items(): Buyable[] {
        return [...this._items]; 
    }

    /**
     * @returns сумму полей price элементов
     */
    getSum(): number {
      return this._items.reduce((sum, e) => sum + e.price, 0);
    }

    /**
     * @param {number} discount - размер скидки, по умолчанию равен 0
     * 
     * @throws {Error} 'discount incorrect"
     * 
     * @returns сумму полей price элементов с учетом скидки
     */
    getSumWithDiscount(discount: number = 0): number {
      if (discount < 0 || discount > 100) {
        throw new Error('discount incorrect');
      }

      let result: number = this.getSum();
      return result - result * (discount / 100);
      ;
    }

    /**
     * 
     * @param {number} id - поле id удаляемоего элемента  
     */
    deleteItem(id: number): void {
      this._items = this._items.filter((e) => e.id !== id);
    }
}
