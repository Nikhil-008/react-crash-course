const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: false,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// Destructuring

/*

const book = getBook(3);

// normal way of object

// const title = book.title;
// const author = book.author;

// destructing way
const { title, author, pages, genres, hasMovieAdaptation } = book;
console.log(title, author, pages, genres);

// normal way for array

// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];

// destructing way
const [primaryGenre, ...otherGenres] = genres;

console.log(primaryGenre, otherGenres);

const newGenre = [...genres, "epic fantasy"];
newGenre;

// adding a new property and overriding an existing one
const updatedBook = { ...book, moviePublishDate: "2023-10-01", pages: 300 };
console.log(updatedBook);

// arrow functions

// function getYear(str) {
//   return str.split("-")[0];
// }

const getYear = (str) => str.split("-")[0];
console.log(getYear(book.publicationDate));

// template literals
const summary = `${title} a ${pages}-page long book was written by ${author} in ${getYear(
  book.publicationDate
)}. the book has ${
  hasMovieAdaptation ? "" : "not "
} been adapted into a movie.`;
summary;

// ternaries
const pagesRange = pages > 1000 ? "over a thousand" : "less than a thousand";
pagesRange;
console.log(`the book has ${pagesRange} pages`);

// short circuiting

console.log(true && "hello");
console.log(false && "hello");
console.log(true || "hello");
console.log(false || "hello");
console.log(0 || "hello");
console.log(0 && "hello");
console.log(1 && "hello");
console.log(1 || "hello");
console.log(null || "hello");
console.log(undefined || "hello");
console.log("" || "hello");
console.log("hello" || "world");
console.log("hello" && "world");

console.log(hasMovieAdaptation && "has movie adaptation");
console.log(!hasMovieAdaptation && "has no movie adaptation");
console.log(!hasMovieAdaptation || "has movie adaptation");
console.log(hasMovieAdaptation || "has no movie adaptation");
console.log(!hasMovieAdaptation && "has no movie adaptation");
console.log(hasMovieAdaptation || "has movie adaptation");

console.log(book.translations.spanish);
const spanishTranslation = book.translations.spanish || "no translation";
console.log(spanishTranslation);

// console.log(book.reviews.librarything.reviewsCount);
// const libraryThingReviewsCount =
//   book.reviews.librarything.reviewsCount || "no reviews";
// libraryThingReviewsCount;

// const count = book.reviews.librarything.reviewsCount ?? "no ratings";
// count;

// optional chaining
function getTotalReviewCount(book) {
  const goodreadsCount = book.reviews?.goodreads?.reviewsCount;
  const libraryThingCount = book.reviews?.librarything?.reviewsCount ?? 0;
  return goodreadsCount + libraryThingCount;
}
console.log(getTotalReviewCount(book));


// map, filter, reduce

const x = [1, 2, 3, 4, 5].map((el) => el * 2);
console.log(x);

const books = getBooks();

const bookTitles = books.map((book) => book.title);
console.log(bookTitles);

const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
}));
essentialData;

const longBooksWithMovie = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
console.log(longBooksWithMovie);

const adventureBooks = books
  .filter((books) => books.genres.includes("adventure"))
  .map((book) => book.title);
console.log(adventureBooks);

const pagesAllBooks = books.reduce((sum, book) => sum + book.pages, 0);
console.log(pagesAllBooks);

const arr = [1, 4, 5, 0, 9, 6, 3, 2, 8, 7];
const sortedArr = arr.slice().sort((a, b) => a - b);
console.log(sortedArr);
console.log(arr);

const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages);
console.log(sortedByPages);

const newBook = {
  id: 6,
  title: "The Hitchhiker's Guide to the Galaxy",
  publicationDate: "1979-10-12",
  author: "Douglas Adams",
};

const bookAfterAdd = [...books, newBook];
console.log(bookAfterAdd);

const bookAfterDelete = bookAfterAdd.filter((book) => book.id !== 3);
console.log(bookAfterDelete);

const bookAfterUpdate = bookAfterDelete.map((book) =>
  book.id === 1 ? { ...book, pages: 1300 } : book
);
*/

// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

async function getTodos() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching todos:", error);
  }
}

getTodos();

console.log("hello");
