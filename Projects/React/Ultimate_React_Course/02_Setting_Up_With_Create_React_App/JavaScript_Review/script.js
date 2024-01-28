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
        hasMovieAdaptation: true,
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

let book = getBook(3);

// destructoring
const { title, author, pages, publicationDate, genres } = book;
// this is same as writing title = book.title
// and...
// author = book.author, etc.

title;
author;
pages;
publicationDate;

/**
 * DESTRUCTURING ARRAYS AND SPREAD OPERATORS
 */

const [first, second, ...otherGenres] = genres;

console.log(otherGenres);
console.log(second);

const newGenres = ["epic fantasy", ...genres];
newGenres;

const updatedBook = { ...book, moviePublicationDate: "2001", pages: 1210 };
updatedBook;

/**
 * TEMPLATE LITERALS
 */

const summary = `${title}a book`;
summary;

/**
 * TERNARIE OPERATORS
 */

const pagesRange = pages > 1000 ? "over a thousand" : "less than 1000";
pagesRange;
pages;

console.log(`${title} has ${pagesRange} pages.`);

console.log(
    `${title} has ${pages > 1000 ? "over 1000" : "less than 1000"} pages.`
);

/* const hasMovieAdaptation(num) {
  
} */

const hasMovieAdaptation = () => book.hasMovieAdaptation;

console.log(hasMovieAdaptation());
/**
 * ARROW FUNCTIONS
 */

// This is a function declaration
/* function getYear(str) {
      return str.split("-")[0];
  } */

const getYear = (str) => str.split("-")[0];

console.log(getYear(publicationDate));

/**
 * SHORT CIRCUITING AND LOGICAL OPERATORS
 */

console.log(true && "Some string");
console.log(false && "Another string");

console.log(hasMovieAdaptation() && "This book has a movie");

// falsy: 0, '', null, undefined
console.log("jonas" && "some String");
console.log("" && "some other string");

// OR operator does the opposite
console.log(true || "Some string");
console.log(false || "some other string");

console.log(book.translations.spanish);

const spanishTranslation = book.translations.spanish || "NOT TRANSLATED";
spanishTranslation;

// this will cause the wrong piece of data due to the '0' being seen as a falsey value
//console.log(book.reviews.librarything.reviewsCount);
//const countWrong = book.reviews.librarything.reviewsCount || 'no data';
//countWrong;

// this version will return if the value is null or undefined by using ??
//const count = book.reviews.librarything.reviewsCount ?? 'no data';
//count;

/**
 * CHAINING
 */

// Adding a '?' mark in the chain of object properties, will ignore it if it does not exist
// test by removing the question mark from line 255
function getTotalReviewCount(book) {
    const goodread = book.reviews.goodreads.reviewsCount;
    const librarything = book.reviews.librarything?.reviewsCount ?? 0; // this add 0 if prop doesnt exist
    librarything; // this value =
    return goodread + librarything;
}

// changing book number to 3 will cause the Cannot read properties
console.log(getTotalReviewCount(book));

/**
 * MAP
 * Map does not change the original array! (does not mutate; creates new array)
 */

const books = getBooks();
const x = [1, 2, 3, 4, 5].map((el) => el * 2);
console.log(x);

const titles = books.map((book) => book.title);
titles;

const essentialData = books.map((book) => {
    return {
        title: book.title,
        author: book.author,
        reviewsCount: getTotalReviewCount(book),
    };
});
essentialData;

/**
 * FILTER method
 */
const longBooks = books
    .filter((book) => book.pages > 500)
    .filter((book) => book.hasMovieAdaptation);
longBooks;

const adventureBooks = books
    .filter((books) => books.genres.includes("adventure"))
    .map((book) => book.title);

adventureBooks;

/**
 * REDUCE method (does not mutate; creates new array)
 */

// can do anything with reduce as you could with map/filter
// acc = accumulator, or the running value;
const pagesAllBooks = books.reduce((acc, book) => acc + book.pages, 0);
pagesAllBooks;

/**
 * SORT method
 */

const arr = [3, 7, 1, 9, 6];
const sorted = arr.sort((a, b) => a - b);
// both of these arrays get sorted; the original array gets replaced
sorted;
arr;

// this would not mutate the original:

newArr = [3, 7, 1, 9, 6];
const newSorted = newArr.slice().sort((a, b) => a - b);
newSorted;
newArr;

const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages);
sortedByPages;

/**
 * Immutable Arrays - arrays that don't affect the original array
 */

// Add, delete, update elements of an array without changing the original one

// 1. Add book object to array
const newBook = {
    id: 6,
    title: "Harry Potter and Chamber of Secrets",
    author: "J. K. Rowling",
};
const booksAfterAdd = [...books, newBook];
booksAfterAdd;

// 2. Delete book object from array

// if the test is 'true', the value or obj will be kept
const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3); // the false value will be deleted
booksAfterDelete;

// 3. Update a book object in the array
const booksAfterUpdate = booksAfterDelete.map((book) =>
    book.id === 1 ? { ...book, pages: 1210 } : book
);
booksAfterUpdate;

/**
 * Asynchronous JavaScript
 **/

console.log(fetch("https://jsonplaceholder.typicode.com/todos/1")); // get data from api

fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((res) => res.json())
    .then((data) => console.log(data, 'oldstuff'));

console.log("poop");

/**
 * ASYNC/AWAI
 */

console.log("Async/Await...");

async function getTodos() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await res.json();
    console.log(data);
}

getTodos()

console.log('do stuff while waiting')