const myLibrary = [];

function Book(title, author, pages, publishDate, hasBeenRead) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.publishDate = publishDate;
    this.hasBeenRead = hasBeenRead;
}

function addBook(title, author, pages, publishDate, hasBeenRead) {
    const newBook = new Book(title, author, pages, publishDate, hasBeenRead);
    myLibrary.push(newBook);
}

function displayBooks(books) {
    for (let book of books) {
        console.log(`Title: ${book.title}\nAuthor: ${book.author}\nPages: ${book.pages}\nDate of publication: ${book.publishDate}\nHas been read: ${book.hasBeenRead}\n\n`);
    }
}

addBook("40rules", "Rami", 67, 2006, "yes");
addBook("richdad", "kako", 96, 2026, "no");
displayBooks(myLibrary);
