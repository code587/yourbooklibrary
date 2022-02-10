const { gql } = require('apollo-server-express');

const typeDefs = gql`
  
  type User {
    _id: ID
    username: String
    email: String
    bookCount: String
    savedBooks: [bookSchema]!
  },

  type Book {
  authors: [String]!
  description: String!
  bookId: String
  title: String
  link: String
  image: String
  }
  
input saveBookInput: {
  authors: [String]!
  description: String
  bookId: id
  image: String,
  link: String,
  title: String
  }

  type saveBook {
  authors: [String]!
  description: String
  bookId: id
  image: String,
  link: String,
  title: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    me: User
    getsaveBook:(bookId: String!): saveBook
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(input: saveBookInput): User
    updatesaveBook(bookId: String!, input: saveBookInput): User
    removeBook(bookId: String!): User
  }
`;

module.exports = typeDefs;
