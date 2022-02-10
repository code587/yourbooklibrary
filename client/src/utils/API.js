import axios from 'axios';

const searchGoogleBooks = async (query) =>
  axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);


export default searchGoogleBooks;
