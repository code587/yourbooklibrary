const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [String]
  }

  type Book {
    authors: String
    description: String!
    bookID: String!
    image: String
    link: String
    title: String!
  }
  type Query {
    user: [User]
    user(username: String!): User
    }
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    removeBook(bookId: ID!): Book


  }

    
    
    
    
    
    }
`;
  module.exports = typeDefs;