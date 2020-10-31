import Cart from './service/Cart';
import Book from './domain/Book';
import Movie from './domain/Movie';
import Smartphones from './domain/Smartphones';
import MusicAlbum from './domain/MusicAlbum';

const cart = new Cart();
console.log(cart.items);

cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225, 1));
cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225, 1));
cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225, 1));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900, 1));
cart.add(new Movie(123, 'Avengers', 5000, '2012', 'USA', 'Avengers Assemble!', ['action', 'fantasy', 'adventure'], '137 min. \\ 02:17', 1));
cart.add(new Smartphones(1008, 'EtaPhone', 'Bear', 10000, true, 1));
cart.add(new Smartphones(1008, 'EtaPhone', 'Bear', 10000, true, 1));
cart.increase(cart.items[cart.getIndexItem('EtaPhone')], 4);


console.log(cart.items);

console.log(cart.getSum());
console.log(cart.getSumWithDiscount());
console.log(cart.getSumWithDiscount(10));

cart.deleteItem(1001);

cart.decrease(cart.items[cart.getIndexItem('EtaPhone')], 5);

console.log(cart.items);
console.log(cart.getSum());



