import Buyable from "./Buyable";

export default interface Stacked extends Buyable {
    readonly stacked: true,
    readonly count: number,
}
