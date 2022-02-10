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

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
export const SAVE_BOOK = gql`
  mutation saveBook($bookId: String) {
    saveBook(bookId: $bookId, authors: $authors, description: $description, image: $image, link: $link, title: $title) {
      authors
      description
      bookId
      image
      link
      title
    }
  }
`;
export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: String) {
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

