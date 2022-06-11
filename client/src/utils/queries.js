import { gql } from "@apollo/client";

export const QUERY_USERS = gql`
  {
    users {
      _id
      name
      email
    }
  }
`;

export const QUERY_ESTABLISHMENTS = gql`
  {
    establishments {
      _id
      name
      address
      city
      state
      zipCode
      phoneNumber
    }
  }
`;

export const QUERY_EVENTS = gql`
  {
    events {
      _id
      name
      information
      host {
        _id
        name
        address
        city
        state
        zipCode
        phoneNumber
      }
      dates {
        _id
        day
        time
      }
      attendees {
        _id
        name
        email
      }
      attendeeCount
    }
  }
`;
