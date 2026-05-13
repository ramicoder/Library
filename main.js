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

const display = document.querySelector(".system-log");

function displayBooks(books) {
    for (let i = 0; i < books.length; i++) {

        const bookCard = document.createElement("div");
        bookCard.className = "book-card";
        bookCard.id = i;
        const text = document.createElement("p");
        text.className = "descript";

        text.textContent =
            `Title: ${books[i].title}
            Author: ${books[i].author}
            Pages: ${books[i].pages}
            Published in: ${books[i].publishDate}
            Has been read: ${books[i].hasBeenRead}`;

        const removeBtn = document.createElement("button");

        removeBtn.classList.add("newBtn", "remove");
        removeBtn.id = i;
        removeBtn.textContent = "Remove";

        const readBtn = document.createElement("button");

        readBtn.classList.add("newBtn", "read");
        readBtn.id = i;
        readBtn.textContent = "Change Read";

        bookCard.appendChild(text);
        bookCard.appendChild(removeBtn);
        bookCard.appendChild(readBtn);
        display.appendChild(bookCard);

        removeBtn.addEventListener("click", () => {
            removeBook(myLibrary, Number(removeBtn.id));
            display.innerHTML = "";
            displayBooks(myLibrary);
        })

        readBtn.addEventListener("click", () => {
            myLibrary[Number(readBtn.id)].changeRead();
            display.innerHTML = "";
            displayBooks(myLibrary);
        })
    }
}
addBook("Welcome", "Rami", "1", "2026", true);

const displayBtn = document.querySelector(".displayBtn");

displayBtn.addEventListener("click", () => {
    display.innerHTML = "";
    displayBooks(myLibrary);
});

function removeBook(books, index) {
    books.splice(index, 1);
}

Book.prototype.changeRead = function () {
    this.hasBeenRead = !this.hasBeenRead;
};






