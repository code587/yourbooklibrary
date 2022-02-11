import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
    }
  }
`;

export const QUERY_GET_ME = gql`
  query me {
    me {
      _id
      username
      email
    }
  }
`;
export const QUERY_SAVE_BOOK = gql`
  query saveBook($bookId: String) {
    saveBook(bookId: $bookId) {
      authors
      description
      bookId
      image
      link
      title
    }
  }
`;
export const QUERY_REMOVE_BOOK = gql`
  query removeBook($bookId: String) {
    removeBook(bookId: $bookId) {
      authors
      description
      bookId
      image
      link
      title
    }
  }
`;