const title = document.getElementById("title") as HTMLInputElement;
const author = document.getElementById("author") as HTMLInputElement;
const pages = document.getElementById("pages") as HTMLInputElement;
const read = document.getElementById("read") as HTMLInputElement;
const addBook = document.getElementById("addBook");
const body = document.querySelector(".right");
const library = document.querySelector(".library");

// import { Library } from "./libraryHashTable.js";
// const Library = require("./libraryHashTable.js");

const Library = new Map();

// const libraryTable = new Library();
let books = 0;

interface IBook {
  title: string;
  author: string;
  pages: string;
  read: boolean;
}

class Book implements IBook {
  title: string;
  author: string;
  pages: string;
  read: boolean;

  constructor(title: string, author: string, pages: string, read: boolean) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read; // true or false
  }
}

addBook.addEventListener("click", () => {
  let data: IBook = {
    title: title.value,
    author: author.value,
    pages: pages.value,
    read: read.checked,
  };
  addBookToLibrary(data);
});

function addBookToLibrary(data: IBook) {
  if (data.title === "" || data.author === "" || data.pages === "") {
    alert("Please fill out all fields");
    return;
  }
  if (books > 20) {
    alert("You have reached the maximum number of books");
    return;
  }
  if (Library.get(data.title)) {
    alert("Book already exists");
    return;
  }
  const book = new Book(data.title, data.author, data.pages, data.read);
  Library.set(data.title, book);
  createBookCard(book);
}

function deleteBook(title) {
  Library.delete(title);
  library.removeChild(document.getElementById(title));
}

function createBookCard(book: IBook) {
  const bookCard = document.createElement("div");
  bookCard.classList.add("book-card");
  bookCard.setAttribute("id", book.title);
  // add content to book card
  const title = document.createElement("h3");
  title.textContent = `Title: ${book.title}`;

  const author = document.createElement("p");
  author.textContent = `Author: ${book.author}`;

  const pages = document.createElement("p");
  pages.textContent = `Pages: ${book.pages}`;

  const read = document.createElement("p");
  read.textContent = `Read: ${book.read}`;

  const remove = document.createElement("button");
  remove.textContent = "Remove";
  remove.addEventListener("click", () => {
    deleteBook(book.title);
  });
  remove.classList.add("remove");
  library?.appendChild(bookCard);
  bookCard?.appendChild(title);
  bookCard?.appendChild(author);
  bookCard?.appendChild(pages);
  bookCard?.appendChild(read);
  bookCard?.appendChild(remove);
}
