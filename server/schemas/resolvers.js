const { AuthenticationError } = require('apollo-server-express');
const { User, Book } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
      users: async () => {
        return User.find().populate('books');
      },
      user: async (parent, { username }) => {
        return User.findOne({ username }).populate('books');
      },
      thoughts: async (parent, { username }) => {
        const params = username ? { username } : {};
        return Book.find(params);
      },
      thought: async (parent, { thoughtId }) => {
        return Thought.findOne({ _id: thoughtId });
      },
    },

    Mutation: {
        addUser: async (parent, { username, email, password }) => {
          // First we create the user
          const user = await User.create({ username, email, password });
          // To reduce friction for the user, we immediately sign a JSON Web Token and log the user in after they are created
          const token = signToken(user);
          // Return an `Auth` object that consists of the signed token and user's information
          return { token, user };
        },
        login: async (parent, { email, password }) => {
            // Look up the user by the provided email address. Since the `email` field is unique, we know that only one person will exist with that email
            const user = await User.findOne({ email });
      
            // If there is no user with that email address, return an Authentication error stating so
            if (!user) {
              throw new AuthenticationError('You have entered an invalid email or password');
            }

            // If there is a user found, execute the `isCorrectPassword` instance method and check if the correct password was provided
      const correctPw = await user.isCorrectPassword(password);

      // If the password is incorrect, return an Authentication error stating so
      if (!correctPw) {
        throw new AuthenticationError('You have entered an invalid email or password');
      }
      // If email and password are correct, sign user into the application with a JWT
      const token = signToken(user);

      // Return an `Auth` object that consists of the signed token and user's information
      return { token, user };
    },
    addBook: async (parent, { book, bookAuthor }) => {
      const thought = await Book.create({ book, bookAuthor });

      await User.findOneAndUpdate(
        { username: book },
        { $addToSet: { books: book._id } }
      );

      return book;
      },

      removeBook: async (parent, { bookId }) => {
        return Book.findOneAndDelete({ _id: bookId });
    },
},
};


module.exports = resolvers;
