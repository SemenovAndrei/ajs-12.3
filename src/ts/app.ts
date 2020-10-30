import Cart from './service/Cart';
import Book from './domain/Book';
import Movie from './domain/Movie';
import MusicAlbum from './domain/MusicAlbum';

const cart = new Cart();
console.log(cart.items);

cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
cart.add(new Movie(123, 'Avengers', 5000, '2012', 'USA', 'Avengers Assemble!', ['action', 'fantasy', 'adventure'], '137 min. \\ 02:17'));

console.log(cart.items);

console.log(cart.getSum());
console.log(cart.getSumWithDiscount());
console.log(cart.getSumWithDiscount(10));

cart.deleteItem(1001);
console.log(cart.items);


