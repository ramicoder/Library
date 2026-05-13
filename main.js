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

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const page = document.getElementById("pages").value;
    const publication = document.getElementById("publication").value;
    const readStatus = document.querySelector('input[name="read"]:checked').value;
    addBook(title, author, page, publication, readStatus);
    form.reset();
    console.log(myLibrary);
});



function addBook(title, author, pages, publishDate, hasBeenRead) {
    const newBook = new Book(title, author, pages, publishDate, hasBeenRead);
    myLibrary.push(newBook);
}

display = document.querySelector(".system-log");

function displayBooks(books) {
    for (let book of books) {
        console.log(myLibrary);

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
        if (display) {
            display.appendChild(bookCard);
        }

    }
}
addBook("kaka", "ss", "6", "2020", true);
const displayBtn = document.querySelector(".displayBtn");

displayBtn.addEventListener("click", () => {
display.innerHTML = "";
displayBooks(myLibrary);
});


 



