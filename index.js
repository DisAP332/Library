var title = document.getElementById("title");
var author = document.getElementById("author");
var pages = document.getElementById("pages");
var read = document.getElementById("read");
var addBook = document.getElementById("addBook");
var body = document.querySelector(".right");
var library = document.querySelector(".library");
// import { Library } from "./libraryHashTable.js";
// const Library = require("./libraryHashTable.js");
var Library = new Map();
// const libraryTable = new Library();
var books = 0;
var Book = /** @class */ (function () {
    function Book(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read; // true or false
    }
    return Book;
}());
addBook.addEventListener("click", function () {
    var data = {
        title: title.value,
        author: author.value,
        pages: pages.value,
        read: read.checked
    };
    addBookToLibrary(data);
});
function addBookToLibrary(data) {
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
    var book = new Book(data.title, data.author, data.pages, data.read);
    Library.set(data.title, book);
    createBookCard(book);
}
function deleteBook(title) {
    Library["delete"](title);
    library.removeChild(document.getElementById(title));
}
function createBookCard(book) {
    var bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    bookCard.setAttribute("id", book.title);
    // add content to book card
    var title = document.createElement("h3");
    title.textContent = "Title: ".concat(book.title);
    var author = document.createElement("p");
    author.textContent = "Author: ".concat(book.author);
    var pages = document.createElement("p");
    pages.textContent = "Pages: ".concat(book.pages);
    var read = document.createElement("p");
    read.textContent = "Read: ".concat(book.read);
    var remove = document.createElement("button");
    remove.textContent = "Remove";
    remove.addEventListener("click", function () {
        deleteBook(book.title);
    });
    remove.classList.add("remove");
    library === null || library === void 0 ? void 0 : library.appendChild(bookCard);
    bookCard === null || bookCard === void 0 ? void 0 : bookCard.appendChild(title);
    bookCard === null || bookCard === void 0 ? void 0 : bookCard.appendChild(author);
    bookCard === null || bookCard === void 0 ? void 0 : bookCard.appendChild(pages);
    bookCard === null || bookCard === void 0 ? void 0 : bookCard.appendChild(read);
    bookCard === null || bookCard === void 0 ? void 0 : bookCard.appendChild(remove);
}