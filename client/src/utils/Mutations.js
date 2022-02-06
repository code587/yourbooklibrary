import { gql } from '@apollo/client';
import { NavLink } from 'react-bootstrap';

export const getMe = gql``
  return fetch('/api/users/me', {
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  });


export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const CREATE_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
export const ADD_BOOK = gql`
mutation saveBook($bookId: ID!) {
  addBook(bookId: $bookId) {
    _id
    authors
    description
    image
    link 
    title
  }
  }
}
`;
export const DELETE_BOOK = gql`
mutation removeBook($bookId: ID!) {
  addBook(bookId: $bookId) {
    _id
    authors
    description
    image
    link 
    title
  }
  }
}
`;
export const searchGoogleBooks = (query) => {
  return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
};