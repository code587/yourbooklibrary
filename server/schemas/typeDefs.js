const { gql } = require('apollo-server-express');


const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [authors, description, bookId, title, link, image]
  },

  type Book {
  authors: [String]!
  description: String!
  bookId: String
  title: String
  link: String
  image: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth

    login(email: String!, password: String!): Auth

    saveBook(authors: [String], description: String!, bookId: String!, image: String, link: String!, title: String!): User

    removeBook(bookId: String!): User
  }
  `;

module.exports = typeDefs;
