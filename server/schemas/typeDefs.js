const { gql } = require('apollo-server-express');

const typeDefs = gql`
  
  type User {
    _id: ID
    username: String
    email: String
    password: String
    savedBooks: [bookSchema]!
  },

  type Book {
  _id: ID
  authors: String
  description: String
  }
  
  
  type savedBooks: {
  bookid: id
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
    thoughts(username: String): [Thought]
    thought(thoughtId: ID!): Thought
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addBook(authors: String!): Book
    removeBook(authors: String!): Book
  }
`;
  const Book = model('Book', bookSchema);

module.exports = Book;
