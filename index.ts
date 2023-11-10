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

  readOrNot() {
    return this.read ? false : true;
  }
}

addBook.addEventListener("click", () => {
  // create book object
  let data: IBook = {
    title: title.value,
    author: author.value,
    pages: pages.value,
    read: read.checked,
  };
  // attempt to add book to library and preform checks
  addBookToLibrary(data);
});

function addBookToLibrary(data: IBook) {
  // check if all fields are filled
  if (data.title === "" || data.author === "" || data.pages === "") {
    alert("Please fill out all fields");
    return;
  }
  // ensure maximum book amounts
  if (books > 20) {
    alert("You have reached the maximum number of books");
    return;
  }
  // check if book already exists
  if (Library.get(data.title)) {
    alert("Book already exists");
    return;
  }
  // add book to library
  const book = new Book(data.title, data.author, data.pages, data.read);
  Library.set(data.title, book);
  // create book card
  createBookCard(book);
}

function deleteBook(title: string) {
  Library.delete(title);
  library.removeChild(document.getElementById(title));
}

function createBookCard(book: Book) {
  const bookCard = document.createElement("div");
  bookCard.classList.add("book-card");
  bookCard.setAttribute("id", book.title);

  // add content to book card

  const title = document.createElement("h3");
  if (book.title.length > 20) {
    title.textContent = `Title: ${book.title.slice(0, 18)}...`;
  } else {
    title.textContent = `Title: ${book.title}`;
  }

  const author = document.createElement("p");
  author.textContent = `Author: ${book.author}`;

  const pages = document.createElement("p");
  pages.textContent = `Pages: ${book.pages}`;

  const read = document.createElement("p");
  read.textContent = `Read: ${book.read}`;
  read.addEventListener("click", () => {
    book.read = book.readOrNot();
    read.textContent = `Read: ${book.read}`;
  });

  // add remove button

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

// slide out add book form

const left = document.querySelector(".left");
const right = document.querySelector(".right");
const addToLibrary = document.getElementById("add_to_library_toggler");
left.classList.add("hide");
right.classList.add("max-100");
addToLibrary?.addEventListener("click", toggleMenu);

let hidden = true;

function toggleMenu() {
  function showMenu() {
    left.classList.remove("hide");
    left.classList.add("show");
    right.classList.remove("max-100");
    right.classList.add("max-75");
    hidden = false;
  }
  function hideMenu() {
    left.classList.remove("show");
    left.classList.add("hide");
    right.classList.remove("max-75");
    right.classList.add("max-100");
    hidden = true;
  }
  hidden === true ? showMenu() : hideMenu();
}
