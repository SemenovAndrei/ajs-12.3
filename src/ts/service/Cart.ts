import Buyable from "../domain/Buyable";

/**
 * @class Cart
 *
 * array items
 */
export default class Cart {
  private _items: Buyable[] = [];

  /**
   * Ищет совпадение в массиве this._items
   *
   * @param {string} name - поле name элемента
   *
   * @returns {number} - индекс в массиве this._items
   */
  getIndexItem(name: string): number {
    return this._items.findIndex((e) => e.name === name);
  }

  /**
   * Добавляет элемент в массив 
   *
   * @param {Buyable} item - элемент реализующий интерфейс Buyable
   */
  add(item: Buyable): void {
    const index = this.getIndexItem(item.name);
    if (index === -1) {
      this._items.push(item);
    } else {
      if (item.stacked) {
        this._items[index].count += 1;
      }
    }
  }

  /**
   * Уменьшает значение count переданного элемента
   * 
   * @param {Buyable} item - элемент
   * @param {number} step - значение на которое нужно уменьшить значение count переданного элемента
   * 
   */
  decrease(item: Buyable, step = 1): void {
    if (item.count > step) {
      item.count -= step;
    }
  }

  /**
   * Увеличивает значение count переданного элемента
   * 
   * @param {Buyable} item - элемент
   * @param {number} step - значение на которое нужно увеличить значение count переданного элемента
   * 
   */
  increase(item: Buyable, step = 1): void {
    item.count += step;
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
    return this._items.reduce((sum, e) => sum + e.price * e.count, 0);
  }

  /**
   * @param {number} discount - размер скидки, по умолчанию равен 0
   *
   * @throws {Error} 'discount incorrect"
   *
   * @returns сумму полей price элементов с учетом скидки
   */
  getSumWithDiscount(discount = 0): number {
    if (discount < 0 || discount > 100) {
      throw new Error("discount incorrect");
    }

    const result: number = this.getSum();
    return result - result * (discount / 100);
  }

  /**
   *
   * @param {number} id - поле id удаляемоего элемента
   */
  deleteItem(id: number): void {
    this._items = this._items.filter((e) => e.id !== id);
  }
}
