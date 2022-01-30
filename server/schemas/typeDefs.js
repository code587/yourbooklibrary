const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
    bookCount
    savedBooks
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
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    removeBook(bookId: ID!): Book


  }

    
    
    
    
    
    }
`;
  module.exports = typeDefs;