import axios from 'axios';

const searchBooks = async (query) =>
  axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);

export default SearchBooks;
