import Movie from '../domain/Movie';

test('create new Movie()', () => {
  const movie = new Movie(123, 'Avengers', 5000, '2012', 'USA', 'Avengers Assemble!', ['action', 'fantasy', 'adventure'], '137 min. \\ 02:17', 1);

  expect(movie).toEqual({
    country: "USA",
    genre: ["action", "fantasy", "adventure"],
    id: 123,
    name: "Avengers",
    price: 5000,
    slogan: "Avengers Assemble!",
    time: "137 min. \\ 02:17",
    year: "2012",
    count: 1,
  });
});
