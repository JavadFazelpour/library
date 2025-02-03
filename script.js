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

function createTableHeaders() {
  // if (myLibrary.length === 0) {
  //   return;
  // }
  const table = document.getElementById("table");
  const thead = table.createTHead();
  const headerRow = thead.insertRow();
  const headers = ["Title", "Author", "Pages", "Read"];

  headers.forEach((header) => {
    const th = document.createElement("th");
    th.textContent = header;
    headerRow.appendChild(th);
  });
}

function addBookToTable(book) {
  const table = document.getElementById("table");
  let tbody = table.querySelector("tbody");
  if (!tbody) {
    tbody = document.createElement("tbody");
    table.appendChild(tbody);
  }
  const newRow = tbody.insertRow();
  const keys = ["title", "author", "pages", "read"];

  keys.forEach((key) => {
    const cell = newRow.insertCell();
    cell.textContent = book[key];
  });
}

function addAllBooks(library) {
  for (let index = 0; index < library.length; index++) {
    const book = library[index];
    addBookToTable(book);
  }
}

function displayBooks(library) {
  for (let index = 0; index < library.length; index++) {
    console.log(library[index].info());
  }
}

// Select the submit button and add event listener ato disable its default behavior
const submitBtn = document.querySelector('input[type="submit"]');

// Select the form
const form = document.querySelector(".add-book");
form.addEventListener("submit", (event) => {
  const formData = new FormData(form);
  const book = new Book(
    formData.get("title"),
    formData.get("author"),
    formData.get("pages")
  );
  addBookToLibrary(
    formData.get("title"),
    formData.get("author"),
    formData.get("pages")
  );
  addBookToTable(book);
  event.preventDefault();
});

// Test the code
createTableHeaders();
