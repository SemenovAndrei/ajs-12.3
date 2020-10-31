import Cart from "../service/Cart";
import Book from "../domain/Book";
import Movie from "../domain/Movie";
import MusicAlbum from "../domain/MusicAlbum";
import Smartphones from "../domain/Smartphones";

test("new card should be empty", () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

const cart = new Cart();
cart.add(new Book(1001, "War and Piece", "Leo Tolstoy", 2000, 1225, 1));
cart.add(new MusicAlbum(1008, "Meteora", "Linkin Park", 900, 1));
cart.add(
  new Movie(
    123,
    "Avengers",
    5000,
    "2012",
    "USA",
    "Avengers Assemble!",
    ["action", "fantasy", "adventure"],
    "137 min. \\ 02:17",
    1
  )
);

test("3 items in cart", () => {
  expect(cart.items.length).toBe(3);
});

test("add 3 !stacked items in cart", () => {
  cart.add(new Book(1001, "War and Piece", "Leo Tolstoy", 2000, 1225, 1));
  cart.add(new Book(1001, "War and Piece", "Leo Tolstoy", 2000, 1225, 1));
  cart.add(new Book(1001, "War and Piece", "Leo Tolstoy", 2000, 1225, 1));

  expect(cart.items.length).toBe(3);
});

test("add 3 stacked items in cart", () => {
  cart.add(new Smartphones(1008, "EtaPhone", "Bear", 10000, true, 1));
  cart.add(new Smartphones(1008, "EtaPhone", "Bear", 10000, true, 1));
  cart.add(new Smartphones(1008, "EtaPhone", "Bear", 10000, true, 1));

  expect(cart.items.length).toBe(4);
});

test("getSum()", () => {
  expect(cart.getSum()).toBe(37900);
});

describe("getSumWithDiscount()", () => {
  test.each([
    [0, 37900],
    [10, 34110],
    [50, 18950],
    [100, 0],
    [undefined, 37900],
  ])("%p", (discount, result) => {
    expect(cart.getSumWithDiscount(discount)).toBe(result);
  });

  test.each([[110], [-50]])("%p", (discount) => {
    expect(() => {
      cart.getSumWithDiscount(discount);
    }).toThrow();
  });
});

test("increase stacked items in cart", () => {
  cart.increase(cart.items[cart.getIndexItem("EtaPhone")]);

  expect(cart.items[cart.getIndexItem("EtaPhone")].count).toBe(4);
});

test("increase stacked items in cart", () => {
  cart.increase(cart.items[cart.getIndexItem("EtaPhone")], 2);

  expect(cart.items[cart.getIndexItem("EtaPhone")].count).toBe(6);
});

describe("decrease stacked items in cart", () => {
  test("item.count > step", () => {
    cart.decrease(cart.items[cart.getIndexItem("EtaPhone")], 2);

    expect(cart.items[cart.getIndexItem("EtaPhone")].count).toBe(4);
  });

  test("item.count > step, !step", () => {
    cart.decrease(cart.items[cart.getIndexItem("EtaPhone")]);

    expect(cart.items[cart.getIndexItem("EtaPhone")].count).toBe(3);
  });

  test("item.count <= step", () => {
    cart.decrease(cart.items[cart.getIndexItem("EtaPhone")], 3);

    expect(cart.items[cart.getIndexItem("EtaPhone")].count).toBe(3);
  });
});

test("delete item", () => {
  cart.deleteItem(123);
  expect(cart.items.length).toBe(3);
});
