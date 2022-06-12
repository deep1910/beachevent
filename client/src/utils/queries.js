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
export const QUERY_GET_USER = gql`
	query user($id: ID!) {
		users(id: $id) {
			name
			email
		}
	}
`
export const QUERY_GET_ME = gql`
	query me {
		users {
			name
			email
		}
	}
`
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
export const QUERY_GET_ESTABLISHMENT = gql`

	query establishment($id: ID!){
		establishments(id: $id){
			name
			address
			city
			state
			zipCode
			phoneNumber
		}
	}

`
export const QUERY_EVENTS = gql`
  {
    events {
      _id
      name
      information
      host {
        _id
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
export const QUERY_GET_EVENT = gql`
	query event($id: ID!){
		events(id: $id){
			name
			information
			host {
				_id
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
`