import { gql } from "@apollo/client";

export const LOGIN_USER_MUTATION = gql`

	mutation login($email: String! $password: String!) {
		login(email: $email password: $password) {
			id
		}
	}

`;

export const CREATE_USER_MUTATION = gql`
	
	mutation addUser($name: String! $email: String! $password: String!) {
		addUser(name: $name email: $email password: $password){
			id
		}
	}
	
`;

export const UPDATE_USER_MUTATION = gql`

	mutation updateUser($name: String $email: String){
		updateUser(name: $name email: $email){
		}
	}

`

export const ADD_ESTABLISHMENT_MUTATION = gql`


	mutation addEstablishment(
      $name: String!
      $address: String!
      $city: String!
      $state: String!
      $zipCode: String!
      $phoneNumber: String!
    ) {
		addEstablishment(
		  name: $name
		  address: $address
		  city: $city
		  state: $state
		  zipCode: $zipcode
		  phoneNumber: $phonenumber
		) {
		}
	}

`

export const UPDATE_ESTABLISHMENT_MUTATION = gql`

	mutation updateEstablishment
	(
      $name: String
      $address: String
      $city: String
      $state: String
      $zipCode: String
      $phoneNumber: String
    ) {
		
		updateEstablishment
		(	
		  name: $name
		  address: $address
		  city: $city
		  state: $state
		  zipCode: $zipcode
		  phoneNumber: $phoneNumber
    
		) {
			id
		}
		
	}

`

export const ADD_EVENT_MUTATION = gql`

	mutation addEvent($event: String! $information: String! $host: ID! $dates: [String!]){
		addEvent(event: $event information: $information host: $host dates: $date){
			id
		}
	}

`

export const UPDATE_EVENT_MUTATION = gql`

	mutation updateEvent($name: String $information: String $host ID $dates: [String!]){
		updateEvent(name: $name information: $information host: $host dates: $dates){
			id
		}
	}

`

export const DELETE_EVENT_MUTATION = gql`


	mutation deleteEvent($id: ID!){
		deleteEvent(id: $id){
		}
	}


`