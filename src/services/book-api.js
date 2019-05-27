import axios from 'axios';

const API_URL = 'https://www.googleapis.com/books/v1/volumes?';

export default function fetchBooks(name, genre) {
  const RESULT_URL = `${API_URL}q=${name.toLowerCase()}+subject:${genre}`;
  return axios.get(RESULT_URL).then(response => response.data.items);
}
