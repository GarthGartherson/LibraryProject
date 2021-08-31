
let myLibrary = [];
const bookshelf = document.querySelector('.bookshelf')
const addBook = document.querySelector('.button_add-book')
const bookModal = document.querySelector('.modal')
const closeButton = document.querySelector('.button_close-button')
const submitBook = document.querySelector('.submitBook')
const switchRead = document.querySelectorAll('.button_switch-read')
const overlay = document.querySelector('.overlay')

let current = 0;

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = (read === 'false' ? 'Not yet read!': 'Already Read');
    this.info = function(){
        return(`${this.title} by ${this.author}, ${this.pages} pages. ${this.read}`)
    }
}

function addBookToLibrary(book){
    myLibrary.push(book)
}

const hobbit = new Book('The Hobbit', 'Your mom', '395', 'false' );
const theShining = new Book('The Shining', 'Stephen King', '431', 'true' );
const findingNemo = new Book('Finding Nemo', 'Ellen Degeneres', '35', 'false' );
addBookToLibrary(hobbit)
addBookToLibrary(theShining)
addBookToLibrary(findingNemo)


myLibrary.forEach(book => {
    renderBook(book)
})

addBook.addEventListener('click', () => {
    bookModal.classList.remove('hidden')
    overlay.classList.remove('hidden')
})

closeButton.addEventListener('click', (e) => {
    e.preventDefault();
    bookModal.classList.add('hidden')
    overlay.classList.add('hidden')
})

function renderBook(book){

    newBook = document.createElement('div');
    newBook.dataset.name = current;
    current++;
    newBook.classList.add('book', 'book_information');

    title = document.createElement('h2');
    author = document.createElement('div');
    pageCount = document.createElement('div');
    readStatus = document.createElement('div');
    switchStatus = document.createElement('button');
    switchStatus.classList.add('button_switch-read');
    deleteButton = document.createElement('button');
    deleteButton.classList.add('button_delete-book')

    console.log(book.read)

    title.textContent = book.title;
    author.textContent = book.author;
    pageCount.textContent = book.pages;
    readStatus.textContent = book.read;
    switchStatus.textContent = (book.read === 'Not yet read!' ? 'I read it' : 'I actually didn\'t read it')
    deleteButton.textContent  = 'Delete'

    console.log(this)

    newBook.appendChild(title);
    newBook.appendChild(author);
    newBook.appendChild(pageCount);
    newBook.appendChild(readStatus);
    newBook.appendChild(switchStatus);
    newBook.appendChild(deleteButton)

    bookshelf.appendChild(newBook)
}

document.addEventListener('click', (e) => {
    if(e.target.closest('.button_switch-read')){
        let readStatus = e.target.previousElementSibling
        readStatus.textContent === 'Not yet read!' ? readStatus.textContent = 'Already read' : readStatus.textContent = 'Not yet read!';
        let curButton = (e.target.closest('.button_switch-read'))
        curButton.textContent === 'I read it' ? curButton.textContent = 'I actually didn\'t read it' : curButton.textContent = 'I read it';
    }
})

document.addEventListener('click', (e)=> {
    if(e.target.closest('.button_delete-book')){
        // e.target.closest('.book').remove()
        e.target.closest('.book').remove()
        current -= 1;
    }
})


submitBook.addEventListener('click', (e) => {
    e.preventDefault();
    let selected = document.querySelector('input[type="radio"]:checked')
    const newBook = new Book(bookTitle.value, bookAuthor.value, bookPages.value, selected.value);
    myLibrary.push(newBook)
    renderBook(newBook)
    bookModal.classList.add('hidden')
    overlay.classList.add('hidden')

})
// 'The Hobbit', 'Your mom', '395', 'Not yet read'