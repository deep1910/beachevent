const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");
require("dotenv").config();


const resolvers = {
  Query: {

  },
  Mutation: {
   
  },
};

module.exports = resolvers;
