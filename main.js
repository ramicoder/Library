const myLibrary = [];

function Book(title, author, pages, publishDate) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.publishDate = publishDate;
}

function addBook(title, author, pages, publishDate) {
    const newBook = new Book(title, author, pages, publishDate);
    myLibrary.push(newBook);
}

function displayBooks(books) {
    for (let book of books) {
        console.log(`Title: ${book.title}\nAuthor: ${book.author}\nPages: ${book.pages}\nDate of publication: ${book.publishDate}\n\n`);
    }
}

addBook("40rules", "Rami", 67, 2006);
addBook("richdad", "kako", 96, 2026);
displayBooks(myLibrary);
