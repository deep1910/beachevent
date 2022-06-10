const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    name: String
    email: String
    password: String
    events: [Event]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Establishment {
    _id: ID
    name: String
    address: String
    city: String
    state: String
    zipCode: String
    phoneNumber: String
  }

  type Date {
    _id: ID
    day: String
    time: String
  }

  type Event {
    _id: ID
    name: String
    host: Establishment
    dates: [Date]
    attendees: [User]
    attendeeCount: Int
  }

  type Query {
    users: [User]
    user(id: ID!): User
    me: User
    establishments: [Establishment]
    establishment(id: ID!): [Establishment]
    dates: [Date]
    events: [Event]
    event(id: ID!): Event
  }

  type Mutation {
    login(email: String!, password: String!): Auth

    addUser(name: String!, email: String!, password: String!): Auth

    updateUser(name: String, email: String): User
  }
`;

module.exports = typeDefs;
