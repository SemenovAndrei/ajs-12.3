import Buyable from "./Buyable";

/**
 * @class Movie
 *
 * @param {number} id - item id
 * @param {string} name - item name
 * @param {number} price - item price
 * @param {string} year - item year
 * @param {string} country - item country
 * @param {string} slogan - item slogan
 * @param {string[]} genre - item genre
 * @param {string} time - item time
 *
 * @returns {Object} item
 */
export default class Movie implements Buyable {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly price: number,
    readonly year: string,
    readonly country: string,
    readonly slogan: string,
    readonly genre: string[],
    readonly time: string,
    readonly count: number,
    readonly stacked?: true,
  ) {}
}
