import { gql } from '@apollo/client';

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