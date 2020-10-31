import Buyable from "./Buyable";

export default class Smartphones implements Buyable {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly company: string,
    readonly price: number,
    readonly stacked: true,
    public count: number,
  ) {}
}
