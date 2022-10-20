const BASE_URL = 'http://localhost:3000/books';

function removeBook(bookId) {
  const options = {
    method: 'DELETE',
  };

  return fetch(`${BASE_URL}/${bookId}`, options).then(response =>
    response.json()
  );
}

removeBook(4);
removeBook(5);
