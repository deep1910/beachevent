const { AuthenticationError } = require("apollo-server-express");
const { Date, Establishment, Event, User } = require("../models");
const { signToken } = require("../utils/auth");
require("dotenv").config();

const resolvers = {
  Query: {
    users: async () => {
      return await User.find();
    },
    user: async (id) => {
      return await User.findById(id);
    },
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select(
          "-__v -password"
        );
        return userData;
      }

      throw new AuthenticationError("Not logged in");
    },
    establishments: async () => {
      return await Establishment.find();
    },
    establishment: async (id) => {
      return await Establishment.findById(id);
    },
    dates: async () => {
      return await Date.find();
    },
    events: async () => {
      return await Event.find()
        .populate("host")
        .populate("dates")
        .populate("attendees");
    },
    event: async (id) => {
      return await Event.findById(id)
        .populate("host")
        .populate("dates")
        .populate("attendees");
    },
  },
  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await Admin.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },

    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    addEstablishment: async (parent, args) => {
      return Establishment.create(args);
    },

    updateEstablishment: async (parent, { id }) => {
      const establishment = await Establishment.findByIdAndUpdate(id);
    },
  },
};

module.exports = resolvers;
