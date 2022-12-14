const BASE_URL = 'http://localhost:3000/books';

const newBook = {
  title: 'The super avanturist',
  autor: 'Legendary Autor',
  genres: ['adventchure'],
  raiting: 9.21,
};

// function addBook(book) {
//   const options = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(book),
//   };

//   return fetch(BASE_URL, options)
//     .then(response => response.json())
//     .then(console.log);
// }

async function addBook(book) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  };

  const response = await fetch(BASE_URL, options);
  const newBook = await response.json();

  return newBook;
}

addBook(newBook);
