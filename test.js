// function Library() {
//   const library = new Map();

//   class Book {
//     constructor(title, author, pages, read) {
//       this.title = title;
//       this.author = author;
//       this.pages = pages;
//       this.read = read; // true or false
//     }
//   }

//   const addBookToLibrary = (...data) => {
//     console.log(data);
//     let book = new Book(...data);
//     library.set(book.title, book);
//   };

//   addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false);
//   addBookToLibrary("The Lord of the Rings", "J.R.R. Tolkien", 1178, true);

//   library.delete("The Hobbit");

//   console.log(library);
// }
// Library();

import { Library } from "./libraryHashTable.js";

const library = new Library();

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read; // true or false
  }
}

const addBookToLibrary = (...data) => {
  console.log(data);
  let book = new Book(...data);
  library.set(book.title, book);
};

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false);
addBookToLibrary("The Lord of the Rings", "J.R.R. Tolkien", 1178, true);

console.log(library);

for (const book in library.table) {
  if (book === undefined) continue;
  console.log(library.table[book]);
}
