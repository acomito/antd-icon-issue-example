import gql from 'graphql-tag';




export const SAVE_USER_ACCOUNT = gql`
	mutation SaveUserAccount ( $_id: ID, $params: UserParams ){
		saveUserAccount (_id: $_id, params: $params){
			_id
		}
	}
`;


