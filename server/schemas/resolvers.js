const { AuthenticationError } = require('apollo-server-express');
const { User, Book } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
      user: async (parent, { username, _id }, context) => {
        return User.findOne({ username });
      },
      me: async (parent, args, context) => {
        if (context.ser) {
          return User.findOne({_id: context.user._id});
        }
        throw new AuthenticationError('You need to be logged in!');
      },
    },
      // books: async (parent, { username }, context) => {
      //   const params = username ? { username } : {};
      //   return Book.find(params);
      // },
      // book: async (parent, { bookId }, context) => {
      //   const params = bookId ? { bookId } : {};
      //   return Book.findOne({ id: bookId });
      // },
    

Mutation: {
  addUser: async (parent, { username, email, password }) => {
    const user = await User.create({ username, email, password });
    const token = signToken(user);
    return { token, user };
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Can't find this user");
      }
      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Credentials entered are inaccurate');
      }

      const token = signToken(user);

      return { token, user };
    },
    saveBook: async (parent, { bookId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: user._id },
          { $addToSet: { savedBooks: {bookId}} },
          { new: true, runValidators: true }
      );
      return (updatedUser)

      if (!user) {
      throw new AuthenticationError('Sorry, you have to be logged in!');
      }
    }
    },
    removeBook: async (parent, { bookId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndDelete(
          { _id: context.user._id },
          { $pull: { savedBooks: (parent, { bookId }, context ) } },
          { new: true }
          ); 

        if (!updatedUser) {
          throw new AuthenticationError('Sorry, you have to be logged in!');
        } 
        return updatedUser;
      }
    }
  }
};

module.exports = resolvers;
