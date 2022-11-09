let myLibrary = [];

let title = document.getElementById('newBookName');
let author = document.getElementById('newBookAuthor');
let pages = document.getElementById('pages')
let isRead = document.getElementById('isRead')
const submitButton = document.getElementById('submit');

submitButton.addEventListener('click', () => addBookToLibrary())

isRead.addEventListener('click', () => isRead.value = 'true')

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToLibrary(){
    const newBook = new Book(title.value, author.value, pages.value, isRead.value)
    myLibrary.push(newBook)
    for (let i=0; i<myLibrary.length; i++){
        createBook(myLibrary[i]);
    }
}

function createBook(item){
    console.log('heyo')
    const libraryContainer = document.getElementById('libraryContainer');
    const bookDiv = document.createElement('div');
    const titleDiv = document.createElement('div');
    const authorDiv = document.createElement('div');
    const pagesDiv = document.createElement('div');
    const readDiv = document.createElement('div');

    bookDiv.classList.add('book');
    bookDiv.setAttribute('id', myLibrary.indexOf(item));

    titleDiv.textContent = 'Title: ' + item.title;
    titleDiv.classList.add('title');
    bookDiv.appendChild(titleDiv);

    authorDiv.textContent = 'Author: ' + item.author;
    authorDiv.classList.add('author');
    bookDiv.appendChild(authorDiv);

    pagesDiv.textContent = 'Page Count: ' + item.pages;
    pagesDiv.classList.add('pages');
    bookDiv.appendChild(pagesDiv);

    readDiv.textContent = 'Read?: ' + item.isRead;
    readDiv.classList.add('read');
    bookDiv.appendChild(readDiv);
    
    libraryContainer.append(bookDiv)
    myLibrary = [];
}