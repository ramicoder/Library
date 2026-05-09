const myLibrary = [];

function Book(title, author, pages, publishDate, hasBeenRead) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.publishDate = publishDate;
    this.hasBeenRead = hasBeenRead;
}

const form = document.getElementById("book-form");

if (form) {
    form.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const page = document.getElementById("pages").value;
    const publication = document.getElementById("publication").value;
    const readStatus = document.querySelector('input[name="read"]:checked').value;
    addBook(title, author, page, publication,readStatus);
});
}


function addBook(title, author, pages, publishDate, hasBeenRead) {
    const newBook = new Book(title, author, pages, publishDate, hasBeenRead);
    myLibrary.push(newBook);
}

display = document.querySelector(".card.system-log");

addBook("40rules", "Rami", 69, 1996, true);

function displayBooks(books) {
    for (let book of books) {

        const bookCard = document.createElement("div");
        bookCard.className = "book-card";
        const text = document.createElement("p");
        text.className = "descript";

        text.textContent =
        `Title: ${book.title}
        Author: ${book.author}
        Pages: ${book.pages}
        Published in: ${book.publishDate}
        Has been read: ${book.hasBeenRead}`;

        const removeBtn = document.createElement("button");
        removeBtn.className = "newBtn";
        removeBtn.textContent = "Remove";
        

        const readBtn = document.createElement("button");
        readBtn.className = "newBtn";
        readBtn.textContent = "Change Read";


        bookCard.appendChild(text);
        bookCard.appendChild(removeBtn);
        bookCard.appendChild(readBtn);

        display.appendChild(bookCard);
        
    }
}

    displayBooks(myLibrary);


