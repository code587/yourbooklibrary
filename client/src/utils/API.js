import axios from 'axios';

const search = async (query) =>
  axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);

export default { search };
