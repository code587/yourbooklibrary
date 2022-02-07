import { gql } from '@apollo/client';

export const loginUser = gql`
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
export const getMe = gql`
  mutation get($email: String!, $password: String!) {
    get(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const createUser = gql`
  mutation createUser($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
export const saveBook = gql`
mutation saveBook($bookId: ID!) {
  saveBook(bookId: $bookId) {
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
export const deleteBook = gql`
mutation deleteBook($bookId: ID!) {
  deleteBook(bookId: $bookId) {
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
