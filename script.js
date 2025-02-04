const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
  };
}

function addBookToLibrary(title, author, pages, read) {
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

function createTableHeader(table) {
  const tHead = table.querySelector("thead");
  tHead.innerHTML = "";

  // Create a header row
  const headerRow = document.createElement("tr");
  const headers = ["Title", "Author", "Pages", "Read Status"];

  headers.forEach((text) => {
    const th = document.createElement("th");
    th.innerText = text;
    headerRow.appendChild(th);
  });
  tHead.appendChild(headerRow); // Append the row to the thead
}

function createTableRow(book, index) {
  const newRow = document.createElement("tr");
  newRow.setAttribute("book-index", `${index}`);

  newRow.insertCell().innerText = book.title;
  newRow.insertCell().innerText = book.author;
  newRow.insertCell().innerText = book.pages;
  newRow.insertCell().innerText = book.read;

  // Create delete button with an image
  const deleteCell = newRow.insertCell();
  const deleteButton = document.createElement("button");
  deleteButton.style.border = "none";
  deleteButton.style.background = "none";
  deleteButton.style.cursor = "pointer";

  const img = document.createElement("img");
  img.src = "img/trash-can.svg";
  img.alt = "Delete";
  img.style.width = "20px";

  deleteButton.appendChild(img);
  deleteButton.addEventListener("click", () => removeBook(index));

  deleteCell.appendChild(deleteButton);

  return newRow;
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  displayBooks(myLibrary);
}

function displayBooks(arr) {
  const table = document.getElementById("table");
  createTableHeader(table);

  const tBody = table.querySelector("tbody");
  tBody.innerHTML = ""; // Clear previous rows

  arr.forEach((book, index) => {
    if (book === null) {
      return;
    }
    tBody.appendChild(createTableRow(book, index));
  });
}

// Test the code
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 320, "read");
addBookToLibrary("1984", "George Orwell", 328, "not read");
addBookToLibrary("Pride and Prejudice", "Jane Austen", 432, "read");
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, "not read");
addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 180, "read");
addBookToLibrary("Moby Dick", "Herman Melville", 635, "not read");
addBookToLibrary("War and Peace", "Leo Tolstoy", 1225, "not read");
addBookToLibrary("Crime and Punishment", "Fyodor Dostoevsky", 430, "read");
addBookToLibrary("The Catcher in the Rye", "J.D. Salinger", 277, "not read");
addBookToLibrary("Brave New World", "Aldous Huxley", 268, "read");
addBookToLibrary("The Picture of Dorian Gray", "Oscar Wilde", 254, "not read");

displayBooks(myLibrary);
