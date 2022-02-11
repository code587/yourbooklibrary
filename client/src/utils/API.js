
export const searchGoogleBooks = (query) => {
  return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
};




// import axios from 'axios';

// const searchGoogleBooks = async (query) => 
//   axios.get(`http://www.googleapis.com/books/v1/volumes?q=${query}`);


// export default { searchGoogleBooks };
