import Cart from "../service/Cart";
import Book from "../domain/Book";
import Movie from "../domain/Movie";
import MusicAlbum from "../domain/MusicAlbum";

test("new card should be empty", () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

const cart = new Cart();
cart.add(new Book(1001, "War and Piece", "Leo Tolstoy", 2000, 1225));
cart.add(new MusicAlbum(1008, "Meteora", "Linkin Park", 900));
cart.add(
  new Movie(
    123,
    "Avengers",
    5000,
    "2012",
    "USA",
    "Avengers Assemble!",
    ["action", "fantasy", "adventure"],
    "137 min. \\ 02:17"
  )
);

test("3 items in cart", () => {
  expect(cart.items.length).toBe(3);
});

test("getSum()", () => {
  expect(cart.getSum()).toBe(7900);
});

describe("getSumWithDiscount()", () => {
  test.each([
    [0, 7900],
    [10, 7110],
    [50, 3950],
    [100, 0],
    [undefined, 7900],
  ])("%p", (discount, result) => {
    expect(cart.getSumWithDiscount(discount)).toBe(result);
  });

  test.each([[110], [-50]])("%p", (discount) => {
    expect(() => {
      cart.getSumWithDiscount(discount);
    }).toThrow();
  });
});

test("delete item", () => {
  cart.deleteItem(123);
  expect(cart.items.length).toBe(2);
});
