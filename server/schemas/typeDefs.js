const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    username: String!
    email: String!
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
  type Query {
    user: [User]
    user(username: String!): User
    }

    
    
    
    
    
    }
`;
  module.exports = typeDefs;