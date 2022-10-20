const BASE_URL = 'http://localhost:3000/books';

function fetchBooks() {
  return fetch(`${BASE_URL}`).then(response => response.json());
}

function fetchBookById(bookId) {
  return fetch(`${BASE_URL}/${bookId}`).then(response => response.json());
}

fetchBooks();

fetchBookById(2);

fetchBookById(1);
