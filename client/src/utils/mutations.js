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