

const { AuthenticationError } = require('apollo-server-express');
const { User, Book } = require('../models');
const { signToken } = require('../utils/auth');


const resolvers = {
    Query: {
      user: async (parent, { username, _id }) => {
        return User.find({ username, _id });
      },
      me: async (parent, args, context) => {
        if (context.user) {
          return User.findOne({_id: context.user._id});
        }
        throw new AuthenticationError('Sorry, you have to be logged in!');
      },
    },
     //adding new user with mutations as part of graphql
    Mutation: {
      addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);

      return { token, user };
    },
    //allowing existing user to login with mutations as part of graphql
    login: async (parent, { email, password }, context) => {
      const user = await User.findOne({ email, password }, context);

      if (!user) {
        throw new AuthenticationError("Credentials entered are inaccurate");
      }
      const accuratePw = await user.isAccuratePassword(password);

      if (!accuratePw) {
        throw new AuthenticationError("Credentials entered are inaccurate");
      }

      const token = signToken(user);

      return { token, user };
    },
    saveBook: async (parent, { bookId }, context) => {
      if (context.user) {
        const book = await book.findOneAndUpdate({
        bookId: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { book: book._id } }
        );

        return book;
      }
      throw new AuthenticationError('Sorry, you have to be logged on to save!');
    }
    },
    removeBook: async (parent, { bookId }, context) => {
      if (context.user) {
        const book = await book.findOneAndDelete({
          bookId: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedBook: bookId } }
        );
          
          return book;
        }
        
          throw new AuthenticationError('Sorry, you have to be logged on to delete!');
      },
    };


module.exports = resolvers;
    